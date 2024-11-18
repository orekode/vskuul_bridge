import React, { useState, useEffect } from 'react';
import { Button, HomeNav } from '@/components';
import { Watch } from 'lucide-react';

const moodleUrl = "https://vskuul.com/webservice/rest/server.php";
const token = "f2fcb9dd42a3070704df6517f0a00062";
const wsFunctionCourses = "core_course_get_courses";
const wsFunctionFiles = "core_files_get_files";
const wsFunctionContents = "core_course_get_contents";
const wsFunctionQuizzes = "mod_quiz_get_quizzes_by_courses";

const Exams = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch course images
    const fetchCourseImage = async (courseId) => {
        try {
            const contentsParams = new URLSearchParams({
                wstoken: token,
                wsfunction: wsFunctionContents,
                courseid: courseId,
                moodlewsrestformat: "json",
            });

            const contentsResponse = await fetch(`${moodleUrl}?${contentsParams.toString()}`);
            const contentsData = await contentsResponse.json();

            if (!contentsData || contentsData.length === 0) {
                console.warn(`No contents found for course ${courseId}`);
                return null;
            }

            const contextId = contentsData[0].contextid;

            const filesParams = new URLSearchParams({
                wstoken: token,
                wsfunction: wsFunctionFiles,
                moodlewsrestformat: "json",
                contextid: contextId,
                component: "course",
                filearea: "overviewfiles",
                itemid: 0,
            });

            const filesResponse = await fetch(`${moodleUrl}?${filesParams.toString()}`);
            const filesData = await filesResponse.json();

            if (filesData && filesData.files) {
                const imageFile = filesData.files.find(file => file.mimetype.includes("image"));
                return imageFile ? `${imageFile.fileurl}&token=${token}` : null;
            }

            return null;
        } catch (error) {
            console.error(`Error fetching image for course ${courseId}:`, error);
            return null;
        }
    };

    // Function to fetch exams or quizzes for each course
    const fetchCourseExams = async (courseId) => {
        try {
            const examsParams = new URLSearchParams({
                wstoken: token,
                wsfunction: wsFunctionQuizzes,
                moodlewsrestformat: "json",
                courseids: [courseId], // Moodle API requires course IDs as an array
            });

            const examsResponse = await fetch(`${moodleUrl}?${examsParams.toString()}`);
            const examsData = await examsResponse.json();

            console.log(examsData);

            if (examsData && examsData.quizzes) {
                return examsData.quizzes.map(quiz => ({
                    name: quiz.name,
                    timeopen: quiz.timeopen, // Unix timestamp for opening time
                    timeclose: quiz.timeclose, // Unix timestamp for closing time
                }));
            }

            return [];
        } catch (error) {
            console.error(`Error fetching exams for course ${courseId}:`, error);
            return [];
        }
    };

    // Function to fetch all courses along with images and exams
    const fetchCourses = async () => {
        setLoading(true);
        setError(null);

        try {
            const params = new URLSearchParams({
                wstoken: token,
                wsfunction: wsFunctionCourses,
                moodlewsrestformat: "json",
            });

            const response = await fetch(`${moodleUrl}?${params.toString()}`);
            const coursesData = await response.json();

            if (coursesData.exception) {
                throw new Error(coursesData.message || "Failed to fetch courses");
            }

            // Fetch images and exams for each course
            const coursesWithDetails = await Promise.all(coursesData.map(async (course) => {
                const imageUrl = await fetchCourseImage(course.id);
                const exams = await fetchCourseExams(course.id);
                
                
                // Only return the course if it has quizzes
                if (exams.length > 0) {
                    return { ...course, imageUrl, exams };
                }
                return null; // Filter out courses without quizzes
            }));

            // Filter out null values (courses without quizzes)
            setCourses(coursesWithDetails.filter(course => course !== null));
        } catch (error) {
            setError(error.message);
            console.error("Error fetching courses:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div className='p-12 py-24'>
            <HomeNav />
            <div className="search-box mb-6">
                <input type="text" className='border rounded-2xl px-3 py-3 text-xl w-full' placeholder='Search for an exam here...' />
            </div>

            {loading && <p>Loading exams...</p>}
            {error && <p>Error: {error}</p>}

            <div className="flex flex-wrap gap-6 justify-items-center">
                {(!loading && courses.length == 0) && "No exams found"}
                {courses.map((course, index) => (
                    <div key={index} className="item w-[320px] max-w-[450px] flex-grow max-[960px]:w-[280px] h-max min-h-[500px] max-[960px]:min-h-[400px] bg-orange-100 bg-opacity-30 rounded-3xl p-4 group">
                        <div className="image overflow-hidden h-[300px] rounded-2xl relative">
                            <img src={course.imageUrl ?? "/images/courses.webp"} alt="course image" className="h-full w-full object-cover relative z-0" />
                            <Button.Md className="bg-[#8c271e] text-lg font-semibold px-6 pb-2 pt-1 text-white rounded-3xl absolute -bottom-[50%] group-hover:bottom-[10%] left-1/2 -translate-x-1/2 z-20 transition-all duration-300 whitespace-nowrap">
                                Get Started
                            </Button.Md>
                            <div className="absolute top-0 left-0 h-full w-full group-hover:backdrop-blur-sm"></div>
                        </div>
                        <div className="content mt-3">
                            <div className="title text-xl max-[960px]:text-base font-medium px-2">{course.fullname}</div>
                            <p className="px-2 max-[960px]:text-sm">This is a simple course to introduce the principles of computer design and the purpose of computing.</p>
                            <div className="flex mt-3 opacity-40">
                                <div className="icon">
                                    <Watch />
                                </div>
                                <div className="font-bold">Jan 1st 2022 - October 3rd 2024</div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">Exams/Quizzes</h3>
                                <ul>
                                    {course.exams.map((exam, idx) => (
                                        <li key={idx} className="text-sm">
                                            <strong>{exam.name}</strong> - 
                                            {new Date(exam.timeopen * 1000).toLocaleDateString()} to {new Date(exam.timeclose * 1000).toLocaleDateString()}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Exams;
