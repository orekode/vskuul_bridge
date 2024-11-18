import { Button, HomeNav, ParticleBG } from '@/components';
import Meteors from '@/components/ui/meteors';
import { CheckCircle, House, LibraryBig, Watch } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const moodleUrl = "https://vskuul.com/webservice/rest/server.php";
const token = "f2fcb9dd42a3070704df6517f0a00062";
const wsFunctionCourses = "core_course_get_courses";
// const wsFunctionFiles = "core_files_get_files";
// const wsFunctionContents = "core_course_get_contents";


const features = [
  {
      image: '/images/pastquestion.webp',
      title: "Access Comprehensive Past Questions",
      description: "Easily find past exam questions to prepare thoroughly for your exams."
  },
  {
      image: '/images/interactive.png',
      title: "Interactive and Self-Paced Courses",
      description: "Learn anytime, anywhere with courses tailored to your needs."
  },
  {
      image: '/images/school.jpg',
      title: "Efficient School Management Tools",
      description: "Streamline administrative tasks and improve academic management with our tools."
  },
  {
      image: '/images/expert.jpg',
      title: "Engage with Expert Instructors",
      description: "Connect with knowledgeable instructors for guidance and support."
  }
];

const plans = [
  {
    name: 'Free',
    price: 'Free',
    currency: '',
    description: 'Get started with essential features at no cost! Perfect for small groups or those exploring our platform’s capabilities.',
    users: 'Up to 5',
    duration: '30 days',
    features: [
      'Access to basic learning resources',
      'Past questions',
      'Standard support'
    ],
    callToAction: 'Get Started Free!'
  },
  {
    name: 'Premium',
    price: '6000',
    currency: 'Ghc',
    description: 'Unlock additional tools and resources designed for active learners and growing teams. Enjoy enhanced features and a flexible experience.',
    users: 'Up to 20',
    duration: '3 months',
    features: [
      'Everything in Free',
      'Advanced courses',
      'Priority support',
      'Customizable settings'
    ],
    callToAction: 'Upgrade to Premium!'
  },
  {
    name: 'Enterprise',
    price: '12000',
    currency: 'Ghc',
    description: 'Designed for large teams and institutions, our Enterprise plan offers full access to premium features and dedicated support for a seamless experience.',
    users: 'Unlimited',
    duration: '1 year',
    features: [
      'All Premium features',
      'Exclusive content',
      'Advanced analytics',
      'Priority assistance'
    ],
    callToAction: 'Get Started with Enterprise!'
  }
];



const Home = () => {
  const [courses, setCourses] = useState([]);

      // Function to fetch all courses
  const fetchCourses = async () => {
        // setLoading(true);
        // setError(null);

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
            // setError(error.message);
            // console.error("Error fetching courses:", error);
        } finally {
            // setLoading(false);
        }
  };

  useEffect(() => {
      fetchCourses();
  }, []);
  
    
  return (
    <div>
        <header className='overflow-x-hidden relative afri-bg'>

            <HomeNav />            

            <div className="relative z-10 rounded-3xl h-full w-full">
              <div className="content text-center min-h-screen max-[500px]:min-h-[500px] max-[777px]:p-6 h-max  flex flex-col items-center justify-center z-10">

                <h1 className="max-w-[700px] max-[765px]:max-w-[406px] relative z-0">
                  <span className='relative z-10 afri-text font-black leading-none text-5xl max-[765px]:text-3xl'>Empowering Students and Simplifying Education with Smart Learning</span>
                  <img src="/images/idea_book.png" alt="" className="object-contain -top-12 -left-2 max-[765px]:-left-8 absolute h-[100px] max-[765px]:h-[70px] z-0" />
                  <img src="/images/plane.png" alt="" className="object-contain -bottom-12 -right-2 absolute max-[765px]:-right-8  h-[100px] max-[765px]:h-[70px] z-0 -rotate-90" />
                </h1>
                <p className="text-xl max-[765px]:text-lg max-[765px]:max-w-[350px] max-[765px]:leading-[1] max-w-[550px] my-5 mt-3 leading-tight font-medium relative z-10">
                  Your all-in-one platform to access past questions, prepare for exams, and manage school activities efficiently.
                </p>
                <div className="buttons">
                  <Button.Md onClick={() => location.href = "https://vskuul.com/login/index.php"}>Get Started</Button.Md>
                </div>

                <div className="absolute bottom-0 -left-10 z-10 max-[1200px]:w-[50vw]">
                  <img src="/images/teenager2.png" className="object-contain h-full w-full" />
                </div>
                <div className="absolute bottom-0 -right-10 z-10 flip-x max-[1200px]:w-[50vw]">
                  <img src="/images/school_girl.png" className="h-full w-full object-contain" />
                </div>

              </div>

              <ParticleBG.RGB />
            </div>
            <div className="h-[97%] w-[98%] rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 bg-white">
            </div>
        </header>

        <section className='p-12 max-[620px]:p-9 py-20'>
          <div className="grid grid-cols-12 max-[1030px]:grid-cols-6 max-[620px]:grid-cols-3 max-[620px]:max-w-[300px] gap-6 bg-red-5 max-[1030px]:max-w-[660px] mx-auto">
            {features.map( (item, index) => 
              <div key={index} className="col-span-3  min-h-[240px] max-[1030px]:max-w-[300px] p-4 bg-white shadow-lg rounded-3xl">
                <div className={`image h-[70px] w-[70px] ${index % 2 == 0 ? 'blob-1' : 'blob-2'} overflow-hidden`}>
                  <img src={item.image} className="h-full w-full object-cover" />
                </div>
                <div className="content mt-4">
                  <div className="title font-bold text-xl leading-none mb-1.5 my-5">{item.title}</div>
                  <div className="title font-semibold leading-tight">{item.description}</div>
                </div>
              </div>
            )}
          </div>
        </section>


        <section className="pl-12 max-[750px]:px-0">
          <div className="flex gap-12 max-[750px]:flex-col max-[520px]:gap-3">
            <div className="w-[33vw] max-[750px]:w-full max-[750px]:px-6 max-[750px]:gap-6 flex flex-col max-[750px]:flex-row max-[520px]:flex-col max-[520px]:gap-0 justify-center">
              <div className="text-7xl max-[960px]:text-5xl font-bold afri-text">
                ALL PAST QUESTIONS IN ONE PLACE
              </div>
              <div className="">
                <p className="text-xl max-[960px]:text-base my-4">
                  Get all your past questions in one easy-to-use, updated platform—no more buying old, outdated materials. Study smarter with the latest questions, all in one place.
                </p>
                <div className="w-max">
                  <Button.OutlineMd link='/courses'>
                    <div className="flex items-center gap-1.5">
                      <LibraryBig />
                      <span>Our Courses</span>
                    </div>
                  </Button.OutlineMd>
                </div>
              </div>
            </div>
            <div className="flex-grow">
              <div className="w-[55vw] max-[750px]:w-full max-[750px]:px-3 max-[500px]:scale-95 overflow-x-scroll">
                <div className="w-max flex py-3 gap-3">
                {courses.length > 0 && courses.slice(0, 5).map((course, index) => (
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
                  {courses.length <= 0 && Array.from({length: 5}, (_, index) => 
                    <div className="item w-[320px] max-[960px]:w-[280px] h-max min-h-[500px] max-[960px]:min-h-[400px] bg-orange-100 bg-opacity-30 rounded-3xl p-4 group">
                      <div className="image overflow-hidden h-[300px] rounded-2xl relative bg-orange-50">
                        {/* <img src="/images/computer_studies.jpg" alt="course image" className="h-full w-full object-cover relative z-0" /> */}
                        {/* <Button.Md className="bg-[#8c271e] text-lg font-semibold px-6 pb-2 pt-1 text-white rounded-3xl absolute -bottom-[50%] group-hover:bottom-[10%] left-1/2 -translate-x-1/2 z-20 transition-all duration-300 whitespace-nowrap" onClick={() => location.href = 'https://vskuul.com/course/view.php?id=' + course.id}>Get Started</Button.Md> */}
                        <div className="absolute top-0 left-0 h-full w-full group-hover:backdrop-blur-sm"></div>
                      </div>
                      <div className="content mt-3 text-opacity-0">
                        <div className="title text-xl max-[960px]:text-base font-medium px-2 bg-orange-200 text-transparent opacity-20">Introduct To Computer Studies</div>
                        <p className="px-2 max-[960px]:text-sm  bg-orange-200 opacity-20 my-1 text-transparent">This is a simple course to introduce the principles of computer design and the purpose of computing.</p>
                        <div className="flex mt-3 opacity-40">
                          <div className="icon bg-orange-200 text-transparent">
                            <Watch />
                          </div>

                          <div className=" font-bold  bg-orange-200 text-transparent">Jan 1st 2022 - October 3rd 2024</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='px-12 py-24 max-[880px]:px-0'>
          <div className="bg-red-10 bg-opacity-40 min-h-[500px] rounded-3xl max-[880px]:rounded-none flex relative overflow-hidden" >
            <div className="w-full relative z-10 bg-gradient-to-r from-black to-transparent p-12 max-[430px]:p-6">
              <div className="content max-w-[600px] text-white">
                <div className="font-bold text-5xl max-[430px]:text-3xl">
                  Empower Your School with Seamless Digital Learning and Management
                </div>
                <p className='my-6'>
                  Elevate your school's educational environment with our platform, designed to provide students with access to past questions and flexible online courses. Streamline administrative tasks and improve communication, all while fostering student engagement. Our goal is to support your school’s academic needs with effective tools that facilitate learning and management. Embrace a more organized and accessible approach to education today.
                </p>
                <Button.OutlineMd onClick={() => location.href = "https://vskuul.com/login/index.php"} extra='w-max'>
                    <div className="flex items-center gap-1.5">
                      <House />
                      <span>Get Started</span>
                    </div>
                </Button.OutlineMd>
              </div>
            </div>
            <div className="absolute top-0 left-0 h-full w-full">
              <img src="/images/school_image.jpg" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="px-12 relative w-full overflow-hidden">
          <div className="content relative z-10">
            <h1 className="text-center text-5xl font-bold">Flexible Pricing For Every School</h1>
            <div className="flex flex-wrap items-center justify-center gap-9 py-6 scale-95 mt-7">
              {plans.map( (item, index) => 
                <div key={index} className="h-[550px] w-[350px] rounded-2xl backdrop-blur-sm bg-[#8c271e] bg-opacity-5 shadow p-6">
                  <div className="name font-black text-2xl bg-[#8c271e] bg-opacity-50 rounded-2xl text-white  w-max px-5 pb-2 py-1">{item.name}</div>
                  <p className="font-medium opacity-80 my-4">{item.description ?? ""}</p>
                  <div className="price flex">
                    <div className="currency">{item.currency}</div>
                    <div className="amount text-5xl">{item.price}</div>
                  </div>
                  <div className="button w-full flex-col mt-6">
                    <Button.OutlineMd extra="w-full" onClick={() => location.href = "https://vskuul.com/login/index.php"}>Get Started</Button.OutlineMd>
                  </div>

                  <div className=" mt-6">
                    {item.features.map( item => 
                      <div className="flex items-center gap-4 text-xl mb-3">
                        <div className="icon">
                          <CheckCircle />
                        </div>
                        <div className="feature">
                          {item}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <Meteors number={40}/>
        </section>

        <footer className="bg-black p-12 mt-24">

        </footer>
    </div>
  )
}

export default Home