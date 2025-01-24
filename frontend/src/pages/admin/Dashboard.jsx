import { CgFileDocument } from "react-icons/cg";
import { IoIosArrowRoundUp } from "react-icons/io";

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col">
                <h1 className="text-2xl font-semibold">Welcome back Hilaire,</h1>
                <p className="font-normal text-slate-dark">Build Work Experience through Skills Challenges</p>
            </div>
            <div className="grid grid-cols-6 gap-4 max-lg:grid-cols-1">
                <div className="bg-white px-5 pb-10 flex flex-col gap-3 pt-3 rounded-xl lg:col-span-3 border-[1px] border-slate-light">
                    <div className="flex">
                        <span className="text-slate-dark text-xs self-end ml-auto">This Week</span>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="bg-light-blue p-3 rounded-full">
                            <CgFileDocument className="text-primary" size={"20px"} />
                        </div>
                        <div>
                            <span className="text-slate-dark text-sm">Total Challenges</span>
                            <div className="flex gap-3">
                                <span className="text-lg font-semibold">29,405</span>
                                <div className="bg-white-blue flex gap-1 items-center p-1 pr-3 rounded-full">
                                    <IoIosArrowRoundUp className="text-primary m-0" />
                                    <span className="text-primary text-xs font-bold">15 %</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-5 pb-10 flex flex-col gap-3 pt-3 rounded-xl lg:col-span-3 border-[1px] border-slate-light">
                    <div className="flex">
                        <span className="text-slate-dark text-xs self-end ml-auto">This Week</span>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="bg-light-blue p-3 rounded-full">
                            <CgFileDocument className="text-primary" size={"20px"} />
                        </div>
                        <div>
                            <span className="text-slate-dark text-sm">Total Challenges</span>
                            <div className="flex gap-3">
                                <span className="text-lg font-semibold">29,405</span>
                                <div className="bg-white-blue flex gap-1 items-center p-1 pr-3 rounded-full">
                                    <IoIosArrowRoundUp className="text-primary m-0" />
                                    <span className="text-primary text-xs font-bold">15 %</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-5 pb-10 flex flex-col gap-3 pt-3 rounded-xl md:col-span-2 border-[1px] border-slate-light">
                    <div className="flex">
                        <span className="text-slate-dark text-xs self-end ml-auto">This Week</span>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="bg-light-blue p-3 rounded-full">
                            <CgFileDocument className="text-primary" size={"20px"} />
                        </div>
                        <div>
                            <span className="text-slate-dark text-sm">Total Challenges</span>
                            <div className="flex gap-3">
                                <span className="text-lg font-semibold">29,405</span>
                                <div className="bg-white-blue flex gap-1 items-center p-1 pr-3 rounded-full">
                                    <IoIosArrowRoundUp className="text-primary m-0" />
                                    <span className="text-primary text-xs font-bold">15 %</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-5 pb-10 flex flex-col gap-3 pt-3 rounded-xl md:col-span-2 border-[1px] border-slate-light">
                    <div className="flex">
                        <span className="text-slate-dark text-xs self-end ml-auto">This Week</span>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="bg-light-blue p-3 rounded-full">
                            <CgFileDocument className="text-primary" size={"20px"} />
                        </div>
                        <div>
                            <span className="text-slate-dark text-sm">Total Challenges</span>
                            <div className="flex gap-3">
                                <span className="text-lg font-semibold">29,405</span>
                                <div className="bg-white-blue flex gap-1 items-center p-1 pr-3 rounded-full">
                                    <IoIosArrowRoundUp className="text-primary m-0" />
                                    <span className="text-primary text-xs font-bold">15 %</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-5 pb-10 flex flex-col gap-3 pt-3 rounded-xl md:col-span-2 border-[1px] border-slate-light">
                    <div className="flex">
                        <span className="text-slate-dark text-xs self-end ml-auto">This Week</span>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="bg-light-blue p-3 rounded-full">
                            <CgFileDocument className="text-primary" size={"20px"} />
                        </div>
                        <div>
                            <span className="text-slate-dark text-sm">Total Challenges</span>
                            <div className="flex gap-3">
                                <span className="text-lg font-semibold">29,405</span>
                                <div className="bg-white-blue flex gap-1 items-center p-1 pr-3 rounded-full">
                                    <IoIosArrowRoundUp className="text-primary m-0" />
                                    <span className="text-primary text-xs font-bold">15 %</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;