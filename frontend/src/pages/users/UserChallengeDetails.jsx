import logo from '../../assets/img/logoOne.png'
import { CiMail, CiDollar } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import SecondaryButton from '../../components/Users/SecondaryButton';
import { FaArrowLeftLong } from "react-icons/fa6";

const UserChallengeDetails = () => {
    return (
        <div>
            <div className="flex items-center gap-3">
                <div className="bg-white cursor-pointer border-[1px] border-slate-light w-max p-2 rounded-md">
                    <FaArrowLeftLong />
                </div>
                <span className="text-slate-dark text-sm">Go back</span>
            </div>
            <div className="mb-10 flex gap-6 mt-4">
                <div className="bg-white p-4 border-[1px] border-slate-light max-lg:w-full rounded-xl w-7/12">
                    <div className="bg-primary max-sm:h-60 h-80 flex items-center justify-center rounded-lg">
                        <img className="h-20" src={logo} alt="" />
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <h2 className="font-semibold text-xl">Project Brief : Payroll and HR Management System</h2>
                        <p className="text-slate-dark text-base">
                            A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa is partnering with Umurava to run a Skills Challenge for Product Design. This Fintech Company offers Payroll Management System to Employers and Embedded Financial services and products to Employees and Gig Workers across Africa.
                        </p>
                    </div>
                    <div>
                        <div>
                            <h2 className="font-semibold text-xl">Tasks:</h2>
                            <h2 className="font-semibold text-xl">Product Requirements</h2>
                        </div>
                        <div className="text-slate-dark ml-4">
                            <li>UX research to understand Project Requirements</li>
                            <li>Understanding User Needs</li>
                            <li>Understanding Business Goals</li>
                            <li>Determine interaction between users</li>
                            <li>Requirements Catalog</li>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className="font-semibold text-xl">Product Design</h2>
                        </div>
                        <div className="text-slate-dark ml-4">
                            <li>User Interface Design for each step </li>
                            <li>Creating wireframes to outline the basic structure and layout of the web and mobile app.</li>
                            <li>
                                Designing visually appealing and user-friendly interfaces for the web and mobile apps focusing on usability and user experience.
                            </li>
                            <li>Ensuring the web application works seamlessly across web, mobile, and tablet devices.</li>
                            <li>Provide a feedback session for in-development guidance</li>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className="font-semibold text-xl">Deliverables:</h2>
                        </div>
                        <div className="text-slate-dark ml-4">
                            <li>Requirements Catalog and User Interaction Diagram</li>
                            <li>User Interface Mockups </li>
                            <li>Payroll and HR System Design Completed</li>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 max-lg:hidden">
                    <div className="bg-white p-6 border-[1px] border-slate-light rounded-xl flex flex-col gap-2 h-max">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-semibold">Key instructions:</h2>
                            <p className="text-slate-dark">You are free to schedule the clarification call with the team via this</p>
                        </div>
                        <div className="mt-5 flex flex-col gap-4">
                            <div className="flex gap-3">
                                <div className="bg-light-blue h-max w-max p-4 rounded-full">
                                    <CiMail className="text-primary text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">talent@umurava.africa</h3>
                                    <span className="text-slate-dark">Contact Email</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="bg-light-blue h-max w-max p-4 rounded-full">
                                    <IoBriefcaseOutline className="text-primary text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Web design</h3>
                                    <span className="text-slate-dark">Challenge Category</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="bg-light-blue h-max w-max p-4 rounded-full">
                                    <CiCalendar className="text-primary text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">7 Days</h3>
                                    <span className="text-slate-dark">Duration</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="bg-light-blue h-max w-max p-4 rounded-full">
                                    <CiDollar className="text-primary text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">$150 - $400</h3>
                                    <span className="text-slate-dark">Money Prize</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <SecondaryButton content="Submit your work" styles="bg-primary border-none py-4 text-white w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserChallengeDetails;