import { House, LibraryBig, BookOpenCheck, PhoneCall, LogIn, X, Menu } from  "lucide-react"
import { Link } from "react-router-dom"


const navs = [
    {
      name: "Home",
      link: "/",
      icon: <House size={17}/>,
    },
    {
      name: "Courses",
      link: "/courses",
      icon: <LibraryBig size={17}/>,
    },
    // {
    //   name: "Exams",
    //   link: "/exams",
    //   icon: <BookOpenCheck size={17} />,
    // },
    {
      name: "Contact Us",
      link: "/contact",
      icon: <PhoneCall size={17}/>,
    },
    {
      name: "Log In",
      link: "https://vskuul.com/login/index.php",
      icon: <LogIn size={17} />,
    },
]


const HomeNav = () => {
  return (
    <nav>
        <div className="group">
                    
        <div className="fixed min-[605px]:hidden group-hover:hidden top-5 right-5 bg-white bg-opacity-70 max-[605px]:bg-opacity-80 backdrop-blur-xl  flex items-center justify-center  rounded-2xl shadow z-30 overflow-hidden h-[40px] w-[40px]">
        <span className="">
            <Menu />
        </span>
        </div>

        <div className="fixed max-[605px]:group-hover:h-[205px] max-[605px]:group-hover:w-[155px] max-[605px]:h-[40px] max-[605px]:w-[40px] transition-all duration-300 top-1 max-[605px]:top-5 max-[605px]:right-5 min-[605px]:left-1/2 min-[605px]:-translate-x-1/2 bg-white bg-opacity-70 max-[605px]:bg-opacity-80 backdrop-blur-xl min-[605px]:p-3 flex max-[605px]:flex-col items-center justify-center min-[605px]:gap-3 rounded-2xl shadow z-20 overflow-hidden">
        {navs.map(item => 
            item.name == "Log In" ?
            <div onClick={ () => { location.href = item.link } } className="opacity-70 hover:opacity-100 cursor-pointer flex items-center justify-center gap-1 min-[605px]:px-3 max-[605px]:p-1.5 max-[605px]:hover:bg-[#fee39a] font-semibold text-lg">
                <span className="mt-1 px-3">{item.icon}</span>
                <span className='whitespace-nowrap max-[605px]:w-[90px]'>{item.name}</span>
            </div>
            :
            <Link to={item.link} className="opacity-70 hover:opacity-100 cursor-pointer flex items-center justify-center gap-1 min-[605px]:px-3 max-[605px]:p-1.5 max-[605px]:hover:bg-[#fee39a] font-semibold text-lg">
                <span className="mt-1 px-3">{item.icon}</span>
                <span className='whitespace-nowrap max-[605px]:w-[90px]'>{item.name}</span>
            </Link>
        )}
        </div>
    </div>

    </nav>
  )
}

export default HomeNav