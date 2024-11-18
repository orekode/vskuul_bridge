// token: f2fcb9dd42a3070704df6517f0a00062

import React, { useState, useEffect } from 'react';
import { Button, HomeNav } from '@/components';
import { Watch } from 'lucide-react';
import { Link } from "react-router-dom"

const moodleUrl = "https://vskuul.com/webservice/rest/server.php";
const token = "f2fcb9dd42a3070704df6517f0a00062";
const wsFunctionCourses = "core_course_get_courses";
const wsFunctionFiles = "core_files_get_files";
const wsFunctionContents = "core_course_get_contents";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch all courses
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

            console.log(coursesData);

            if (coursesData.exception) {
                throw new Error(coursesData.message || "Failed to fetch courses");
            }

            // Get images for each course
            

            setCourses(coursesData);
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
            {/* <div className="search-box mb-6">
                <input type="text" className='border rounded-2xl px-3 py-3 text-xl w-full' placeholder='Search for a course here...' />
            </div> */}

            {loading && <p>Loading courses...</p>}
            {error && <p>Error: {error}</p>}

            <div className="flex flex-wrap gap-6 justify-items-center">
                {courses.map((course, index) => (
                    <Link onClick={() => location.href = 'https://vskuul.com/course/view.php?id=' + course.id} key={index} className="item w-[320px] max-w-[450px] flex-grow max-[960px]:w-[280px] h-max min-h-[500px] max-[960px]:min-h-[400px] bg-orange-100 bg-opacity-30 rounded-3xl p-4 group">
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
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Courses;
