import { MdAlarmAdd, MdDelete, MdOutlineAccountBalanceWallet } from "react-icons/md";
import icon1 from './../assets/icon1.png';
import icon3 from './../assets/icon3.png';
import icon4 from './../assets/icon4.png';
import { TbProgressCheck } from "react-icons/tb";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoMdDocument } from "react-icons/io";
import MyAreaChart from "./MyAreaChart";
import MyPieChart from "./MyPieChart";
import { PiGraduationCapThin } from "react-icons/pi";

const Main = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 m-5'>
                <div className='col-auto lg:col-span-3 bg-white rounded-lg'>
                    <div className="border-b">
                        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 p-8">
                            <div className="space-y-7 col-auto lg:col-span-2">
                                <div className="space-y-2">
                                    <h4 className="text-xl font-semibold">Dashboard</h4>
                                    <p>Overview of latest Month</p>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-4xl font-semibold">$6468.96</h2>
                                    <p>current Month Earnings</p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-4xl font-semibold">82</h3>
                                    <p>Current Month Sales</p>
                                </div>
                                <div>
                                    <button className='btn rounded-full bg-gradient-to-r from-[#CB5088] to-[#EE5F7B] text-white font-bold px-5'>Last Month Summary</button>
                                </div>
                            </div>
                            <div className="col-auto lg:col-span-4">
                                <MyAreaChart></MyAreaChart>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-2 space-y-5 md:space-y-0">
                        <div className="flex pt-3 gap-3">
                            <p className="bg-[#ED4A84] rounded-full flex justify-center size-14 items-center"><MdOutlineAccountBalanceWallet className="text-white text-7xl p-2" /></p>
                            <div className="space-y-1">
                                <p>Wallet Ballance</p>
                                <p className="font-bold text-lg">$3,567.80</p>
                            </div>
                        </div>
                        <div className="flex pt-3 gap-3">
                            <p className="bg-[#855FC0] rounded-full flex justify-center size-14 items-center"><MdOutlineAccountBalanceWallet className="text-white text-7xl p-2" /></p>
                            <div className="space-y-1">
                                <p>Referral Earning</p>
                                <p className="font-bold text-lg">$1589.53</p>
                            </div>
                        </div>
                        <div className="flex pt-3 gap-3">
                            <p className="bg-[#855FC0] rounded-full flex justify-center size-14 items-center"><MdOutlineAccountBalanceWallet className="text-white text-7xl p-2" /></p>
                            <div className="space-y-1">
                                <p>Estimate Sales</p>
                                <p className="font-bold text-lg">$2651.50</p>
                            </div>
                        </div>
                        <div className="flex pt-3 gap-3">
                            <p className="bg-[#5ECEF4] rounded-full flex justify-center size-14 items-center"><MdOutlineAccountBalanceWallet className="text-white text-7xl p-2" /></p>
                            <div className="space-y-1">
                                <p>Earning</p>
                                <p className="font-bold text-lg">$53,567.52</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-auto lg:col-span-1 bg-white rounded-lg flex justify-center relative'>
                    <MyPieChart></MyPieChart>
                    <div className="absolute top-[39%] left-[50%] -translate-x-[50%] bg-[#60CDF6] rounded-full w-20 h-20 flex justify-center items-center">
                        <PiGraduationCapThin className='text-5xl text-white' />
                    </div>

                    <div className="absolute top-[80%] left-[50%] flex gap-2 justify-center -translate-x-[50%]">
                        <p className="text-2xl font-semibold">33%</p>
                        <p className="text-2xl font-semibold">55%</p>
                        <p className="text-2xl font-semibold">12%</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-5">
                <div className="bg-gradient-to-r from-[#E3498B] to-[#C64F9A] *:text-white p-5 rounded-lg">
                    <h3>Revinue Status</h3>
                    <div className="flex justify-between items-center gap-2 py-3">
                        <div>
                            <img src={icon1} alt="" />
                        </div>
                        <div>
                            <h4 className="text-4xl font-semibold">$ 432</h4>
                            <p>Jan 01 - Jan 10</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-t from-[#6D44C3] to-[#8D4CD3] *:text-white p-5 rounded-lg">
                    <h3>Revinue Status</h3>
                    <div className="flex justify-between items-center gap-2 py-3">
                        <div>
                            <h4 className="text-4xl font-semibold">$ 432</h4>
                            <p>Jan 01 - Jan 10</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-[#4DB9EC] to-[#5AA2E1] *:text-white p-5 rounded-lg">
                    <h3>Revinue Status</h3>
                    <div className="flex justify-between items-center gap-2 py-3">
                        <div>
                            <h4 className="text-4xl font-semibold">$ 432</h4>
                        </div>
                        <div>
                            <img src={icon3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-[#FFB230] to-[#F88F4C] *:text-white p-5 rounded-lg">
                    <h3>Revinue Status</h3>
                    <div className="flex justify-between items-center gap-2 py-3">
                        <div>
                            <img src={icon4} alt="" />
                        </div>
                        <div>
                            <h4 className="text-4xl font-semibold">$ 432</h4>
                            <p>Jan 01 - Jan 10</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-8 gap-5 m-5'>
                <div className='col-auto lg:col-span-3 bg-white p-5 rounded-lg'>
                    <div>
                        <h2 className="font-bold text-xl mb-8">Recent Activities</h2>
                    </div>

                    <div className="space-y-10">
                        <div className="flex gap-5 items-center">
                            <p>40 Min Ago</p>
                            <p className="bg-[#ED4A84] rounded-full flex justify-center size-12 items-center"><TbProgressCheck className="text-white text-6xl p-2" /></p>
                            <div>
                                <h4 className="text-lg font-semibold">Task Updated</h4>
                                <p>Nikolai Updated a Task</p>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <p>40 Min Ago</p>
                            <p className="bg-[#865FC0] rounded-full flex justify-center size-12 items-center"><TbProgressCheck className="text-white text-6xl p-2" /></p>
                            <div>
                                <h4 className="text-lg font-semibold">Deal Added</h4>
                                <p>Panshi Updated a Task</p>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <p>40 Min Ago</p>
                            <p className="bg-[#63CDF6] rounded-full flex justify-center size-12 items-center"><TbProgressCheck className="text-white text-6xl p-2" /></p>
                            <div>
                                <h4 className="text-lg font-semibold">Published Article</h4>
                                <p>Sanshi Updated Article</p>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <p>40 Min Ago</p>
                            <p className="bg-[#FFB82E] rounded-full flex justify-center size-12 items-center"><TbProgressCheck className="text-white text-6xl p-2" /></p>
                            <div>
                                <h4 className="text-lg font-semibold">Dock Updated</h4>
                                <p>Manshi Updated a Dack</p>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <p>40 Min Ago</p>
                            <p className="bg-[#49F24A] rounded-full flex justify-center size-12 items-center"><TbProgressCheck className="text-white text-6xl p-2" /></p>
                            <div>
                                <h4 className="text-lg font-semibold">Replayed Comment</h4>
                                <p>Fanshi Added a Comment</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-auto lg:col-span-5 bg-white rounded-lg p-5'>
                    <div className="mb-8 space-y-2">
                        <h2 className="font-bold text-xl">Order Status</h2>
                        <p>Overview of latest month</p>
                    </div>
                    <div className="md:flex justify-between gap-5 space-y-3">
                        <div className="flex gap-3">
                            <button className="bg-[#E45958] text-white btn hover:bg-[#c73b3b] px-3"><MdAlarmAdd size={20} />Add</button>
                            <button className="text-[#BDBDBD] bg-[#F2F2F2] flex items-center justify-center px-3 rounded-md"><MdDelete size={32} /></button>
                            <button className="text-[#BDBDBD] bg-[#F2F2F2] flex items-center justify-center px-3 rounded-md"><RiErrorWarningFill size={32} /></button>
                            <button className="text-[#BDBDBD] bg-[#F2F2F2] flex items-center justify-center px-3 rounded-md"><IoMdDocument size={32} /></button>
                        </div>
                        <div className="flex gap-2">
                            <input type="text" className="bg-[#F2F2F2] rounded-lg px-2 outline-0" placeholder="Search" />
                            <button className="text-[#BDBDBD] bg-[#F2F2F2] flex items-center justify-center px-3 rounded-md"><IoMdDocument size={32} /></button>
                        </div>
                    </div>
                    <div className="pt-7">
                        <table>
                            <tr>
                                <th className="text-center">INVOICE</th>
                                <th className="text-center">CUSTOMERS</th>
                                <th className="text-center">FROM</th>
                                <th className="text-center">PRICE</th>
                                <th className="hidden md:flex text-center">STATUS</th>
                            </tr>
                            <tr>
                                <td className="text-center">12386</td>
                                <td className="text-center">Charly dues</td>
                                <td className="text-center">Russia</td>
                                <td className="text-center">$2652</td>
                                <td className="text-center"><button className="hidden md:flex px-5 py-2 rounded-lg bg-[#EB4785] text-white">Process</button></td>
                            </tr>
                            <tr>
                                <td className="text-center">12386</td>
                                <td className="text-center">Charly dues</td>
                                <td className="text-center">Russia</td>
                                <td className="text-center">$2652</td>
                                <td className="text-center"><button className="hidden md:flex px-5 py-2 rounded-lg bg-[#875EC0] text-white">Process</button></td>
                            </tr>
                            <tr>
                                <td className="text-center">12386</td>
                                <td className="text-center">Charly dues</td>
                                <td className="text-center">Russia</td>
                                <td className="text-center">$2652</td>
                                <td className="text-center"><button className="hidden md:flex px-5 py-2 rounded-lg bg-[#46C5F3] text-white">Process</button></td>
                            </tr>
                            <tr>
                                <td className="text-center">12386</td>
                                <td className="text-center">Charly dues</td>
                                <td className="text-center">Russia</td>
                                <td className="text-center">$2652</td>
                                <td className="text-center"><button className="hidden md:flex px-5 py-2 rounded-lg bg-[#5CF461] text-white">Process</button></td>
                            </tr>
                            <tr>
                                <td className="text-center">12386</td>
                                <td className="text-center">Charly dues</td>
                                <td className="text-center">Russia</td>
                                <td className="text-center">$2652</td>
                                <td className="text-center"><button className="hidden md:flex px-5 py-2 rounded-lg bg-[#FBB72C] text-white">Process</button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;