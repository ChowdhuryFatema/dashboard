import { AiFillHome, AiFillSignal } from "react-icons/ai";
import { MdEmail, MdEmojiEmotions, MdFormatListBulleted, MdNotificationAdd, MdWidgets } from 'react-icons/md';
import { LiaElementor, LiaTableSolid } from 'react-icons/lia';
import { FaCalendarAlt, FaClipboardList, FaRegEdit, FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import { IoBarChartSharp, IoDocumentText } from 'react-icons/io5';
import { BiMessageAltDetail } from 'react-icons/bi';
import { FaLocationDot } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";

const Sidebar = () => {
    return (
        <>
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <div className="menu w-56 min-h-full text-base-content side-bar box-shadow bg-white relative">
                {/* Sidebar content here */}

                <div className='absolute top-0 left-0 w-full'>
                    <div className='bg-gradient-to-r from-[#DA4584] to-[#A153A0] py-4'>
                        <h1 className='text-white text-2xl text-center'>
                            <span>Dashboard</span>
                        </h1>
                    </div>
                </div>

                <div className='pt-[64px] -ml-2 space-y-1 mt-8'>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><AiFillHome className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>Overview</span></p>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><MdWidgets className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>Widgets</span></p>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><LiaElementor className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>Ui Elements</span></p>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><AiFillSignal className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>Advanced Ui</span></p>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><MdFormatListBulleted className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>Form Elements</span></p>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><FaRegEdit className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>Editors</span></p>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><IoBarChartSharp className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>Charts</span></p>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><LiaTableSolid className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>Tables</span></p>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><BiMessageAltDetail className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>Popups</span></p>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><MdNotificationAdd className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>Notifications</span></p>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><MdEmojiEmotions className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>Icons</span></p>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><FaLocationDot className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>Maps</span></p>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><FaUserPlus className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>User Pages</span></p>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><FaShoppingCart className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>E-Commerce</span></p>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><MdEmail className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>E-mail</span></p>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><FaCalendarAlt className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>Calendor</span></p>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><FaClipboardList className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>Todo List</span></p>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><GrGallery className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>Gallery</span></p>
                    <p className='border-l-4 border-white hover:border-l-4 hover:border-[#F5B707] flex gap-3 items-center pl-5 py-2 duration-500 *:hover:text-[#46C381]'><IoDocumentText className='text-2xl text-[#B4B3B9]' /> <span className='lg:text-lg text-[#585858]'>Documentations</span></p>
                </div>

            </div>
        </>
    );
};

export default Sidebar;