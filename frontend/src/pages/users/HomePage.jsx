import Navbar from "../../components/Users/Navbar";
import imageOne from "../../assets/img/imageOne.png";
import { IoBriefcaseOutline } from "react-icons/io5";

const HomePage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="px-24 py-14 flex justify-between items-center">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-[44px] leading-none w-[570px] font-bold text-primary">
              Build Work Experience through Skills Challenges Program
            </h1>
            <p className="w-[570px] text-dark-blue text-xl font-normal">
              Enhance your Employability and Accelerate your Career Growth by working on Hands-on projects & hackathons from various businesses & organizations.
            </p>
          </div>
          <button className="bg-primary w-max flex gap-2 items-center rounded-lg text-white text-sm font-medium px-14 py-4">Get Started</button>
        </div>
        <div>
          <img src={imageOne} alt="" />
        </div>
      </div>
      <div className="px-44 py-14 flex flex-col items-center gap-16">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl w-[695px] text-center text-secondary font-bold">
            Experience a New Way of Building Work Experience
          </h1>
          <p className="text-lg w-[653px] text-center text-gray-blue">
            Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary p-12 col-span-2 rounded-xl flex flex-col gap-5">
              <div className="bg-white h-max w-max p-4 rounded-md">
                <IoBriefcaseOutline className="text-primary text-2xl" />
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-white text-2xl font-bold">
                  Build a Strong Portfolio and Hand-On Experience
                </h3>
                <p className="text-white">
                  Tackle real-world projects through challenges and hackathons that mirror real world challenges faced by businesses and organizations. Therefore, showcase your skills and accomplishments to potential employers and clients through a portofolio  of completed projects.
                </p>
              </div>
            </div>
            <div className="bg-primary p-12 rounded-xl flex flex-col gap-5">
              <div className="bg-white h-max w-max p-4 rounded-md">
                <IoBriefcaseOutline className="text-primary text-2xl" />
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-white text-2xl font-bold">
                  Enhance Your Employment Path
                </h3>
                <p className="text-white">
                  Develop the in-demand skills and build a strong portofolio to increase your chances of landing your dream job or contract.
                </p>
              </div>
            </div>
            <div className="bg-primary p-12 rounded-xl flex flex-col gap-5">
              <div className="bg-white h-max w-max p-4 rounded-md">
                <IoBriefcaseOutline className="text-primary text-2xl" />
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-white text-2xl font-bold">
                  Earn Recognition and Prizes
                </h3>
                <p className="text-white">
                  Earn both Money and Knowledge Prizes by participating in various contests and competitions by working on real world projects and hackathons from our partner companies & organizations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage