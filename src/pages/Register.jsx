import { ArrowLeft, Upload } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';


const UploadLogo = () => {
    return (
        <>
            <div className="h-[100px] w-[100px] border rounded-full flex items-center justify-center">
                <Upload />
            </div>
            <div className='max-w-[200px] font-medium leading-tight'>
                <p>Click the button bellow to upload your school logo</p>
                <button type="button" className="bg-black px-4 py-1 pb-2 mt-4 text-white rounded-xl shadow text-lg">Upload Logo</button>
            </div>
        </>
    );
}

const Register = () => {
  return (
    <div>
        <div className="p-12 max-[500px]:p-6">
            <form action="" className='grid grid-cols-2 max-[980px]:grid-cols-1 gap-6 bg-white shadow rounded-xl p-12 max-[500px]:p-0 max-[500px]:shadow-none'>
                <div className="right flex flex-col gap-5">

                    <div className="flex items-center gap-3">
                        <Link to={-1} className="flex items-center justify-center gap-1 h-[35px] w-[35px] rounded-full border">
                            <ArrowLeft />
                        </Link>
                        <span className="font-bold text-3xl">School Registration</span>
                    </div>

                    <div className="max-[980px]:flex left hidden flex-col gap-3 items-center justify-center text-center border-dashed  border-2 rounded-xl p-6">
                        <UploadLogo />
                    </div>

                    <div className="grid grid-cols-2 gap-5 max-[500px]:grid-cols-1">
                        <div className="input flex flex-col gap-1">
                            <label htmlFor="">School Name</label>
                            <input type="text"  className='border rounded-xl shadow-sm p-1.5 px-3 text-lg'/>
                        </div>

                        <div className="input flex flex-col gap-1">
                            <label htmlFor="">School Email</label>
                            <input type="text"  className='border rounded-xl shadow-sm p-1.5 px-3 text-lg'/>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5 max-[500px]:grid-cols-1">
                        <div className="input flex flex-col gap-1">
                            <label htmlFor="">First Name</label>
                            <input type="text"  className='border rounded-xl shadow-sm p-1.5 px-3 text-lg'/>
                        </div>

                        <div className="input flex flex-col gap-1">
                            <label htmlFor="">Last Email</label>
                            <input type="text"  className='border rounded-xl shadow-sm p-1.5 px-3 text-lg'/>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5 max-[500px]:grid-cols-1">
                        <div className="input flex flex-col gap-1">
                            <label htmlFor="">Password</label>
                            <input type="text"  className='border rounded-xl shadow-sm p-1.5 px-3 text-lg'/>
                        </div>

                        <div className="input flex flex-col gap-1">
                            <label htmlFor="">Confirm Password</label>
                            <input type="text"  className='border rounded-xl shadow-sm p-1.5 px-3 text-lg'/>
                        </div>
                    </div>

                    <div className="input flex flex-col gap-1">
                            <label htmlFor="">School Type</label>
                        <input type="text"  className='border rounded-xl shadow-sm p-1.5 px-3 text-lg'/>
                    </div>

                    <div className="input flex flex-col gap-1">
                            <label htmlFor="">Country</label>
                        <input type="text"  className='border rounded-xl shadow-sm p-1.5 px-3 text-lg'/>
                    </div>

                    <Link to="/schools" className='font-bold text-center bg-blue-500 text-white rounded-xl px-6 py-2 pb-3 text-lg '>Register</Link>
                </div>
                <div className="max-[980px]:hidden left flex flex-col gap-3 items-center justify-center text-center border-dashed  border-2 rounded-xl p-6">
                    <UploadLogo />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register