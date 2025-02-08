import Navbar from "../../components/Users/Navbar";
import imageOne from "../../assets/img/imageOne.png";
import banner from "../../assets/img/banner.png"
import { IoBriefcaseOutline } from "react-icons/io5";
import Card from "../../components/users/Card";
import soko from "../../assets/img/sf.png";
import mockup from "../../assets/img/mockup.svg";
import { FaArrowRightLong } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../../styles.css';

const HomePage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="px-24 py-14 pb-16 flex justify-between items-center">
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
      <div className="px-44 py-14 flex flex-col items-center bg-offwhite gap-16">
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
      <div className="w-full px-24 py-16">
        <div className="bg-primary rounded-3xl py-24 flex overflow-hidden items-center justify-evenly text-white relative">
          <div className="h-96 w-96 -top-40 -right-20 opacity-20 bg-white absolute rounded-full flex items-center justify-center">
            <div className="h-4/6 w-4/6 bg-primary rounded-full"></div>
          </div>
          <div className="h-96 w-96 -bottom-72 left-20 opacity-20 bg-white absolute rounded-full flex items-center justify-center">
            <div className="h-4/6 w-4/6 bg-primary rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-4xl">1</span>
            <span>Year</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-4xl">500+</span>
            <span>Challeges completed</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-4xl">10K+</span>
            <span>Users</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-4xl">6+</span>
            <span>Countries</span>
          </div>
        </div>
      </div>
      <div className="px-44 py-14 flex flex-col items-center gap-16">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-4xl w-[1022px] text-center text-secondary font-bold">
            Skills Challenges Cover various in-demand skills  and Careers for the digital economy
          </h1>
          <p className="text-lg w-max text-center text-gray-blue">
            Explore the projects that various talents are working on.
          </p>
        </div>
        <div className="w-[1000px] flex flex-wrap justify-center gap-5">
          <div className="actif text-white p-3 px-5 rounded-lg w-max">
            <span>UI/UX Design</span>
          </div>
          <div className="text-gray-blue p-3 px-5 rounded-lg bg-grey w-max">
            <span>Data science</span>
          </div>
          <div className="text-gray-blue p-3 px-5 rounded-lg bg-grey w-max">
            <span>Graphic Design</span>
          </div>
          <div className="text-gray-blue p-3 px-5 rounded-lg bg-grey w-max">
            <span>Data Analysis & Research</span>
          </div>
          <div className="text-gray-blue p-3 px-5 rounded-lg bg-grey w-max">
            <span>Animation</span>
          </div>
          <div className="text-gray-blue p-3 px-5 rounded-lg bg-grey w-max">
            <span>Videography and Photography</span>
          </div>
          <div className="text-gray-blue p-3 px-5 rounded-lg bg-grey w-max">
            <span>Data science</span>
          </div>
          <div className="text-gray-blue p-3 px-5 rounded-lg bg-grey w-max">
            <span>AI & Maching Learning </span>
          </div>
          <div className="text-gray-blue p-3 px-5 rounded-lg bg-grey w-max">
            <span>Web3</span>
          </div>
          <div className="text-gray-blue p-3 px-5 rounded-lg bg-grey w-max">
            <span>Digital Marketing & Communications </span>
          </div>
        </div>
        <div className="text-black w-full">

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="bg-grey p-16 py-16 rounded-xl w-full flex justify-between items-center">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-4">
                    <div className="bg-white w-max p-4 rounded-xl">
                      <img src={soko} className="w-10" alt="" />
                    </div>
                    <p className="text-gray-blue font-light max-w-[416px]">The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-primary font-semibold">Learn more</span>
                    <div className="bg-primary p-2 rounded-[1000px]">
                      <FaArrowRightLong className="w-4 text-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <img src={mockup} className="w-[414px]" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-grey p-16 py-16 rounded-xl w-full flex justify-between items-center">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-4">
                    <div className="bg-white w-max p-4 rounded-xl">
                      <img src={soko} className="w-10" alt="" />
                    </div>
                    <p className="text-gray-blue font-light max-w-[416px]">The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-primary font-semibold">Learn more</span>
                    <div className="bg-primary p-2 rounded-[1000px]">
                      <FaArrowRightLong className="w-4 text-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <img src={mockup} className="w-[414px]" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-grey p-16 py-16 rounded-xl w-full flex justify-between items-center">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-4">
                    <div className="bg-white w-max p-4 rounded-xl">
                      <img src={soko} className="w-10" alt="" />
                    </div>
                    <p className="text-gray-blue font-light max-w-[416px]">The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-primary font-semibold">Learn more</span>
                    <div className="bg-primary p-2 rounded-[1000px]">
                      <FaArrowRightLong className="w-4 text-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <img src={mockup} className="w-[414px]" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-grey p-16 py-16 rounded-xl w-full flex justify-between items-center">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-4">
                    <div className="bg-white w-max p-4 rounded-xl">
                      <img src={soko} className="w-10" alt="" />
                    </div>
                    <p className="text-gray-blue font-light max-w-[416px]">The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-primary font-semibold">Learn more</span>
                    <div className="bg-primary p-2 rounded-[1000px]">
                      <FaArrowRightLong className="w-4 text-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <img src={mockup} className="w-[414px]" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

        </div>
      </div>
      <div className="px-44 py-14 flex flex-col items-center gap-16">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-4xl w-max text-center text-secondary font-bold">
            Explore Challenges & Hackathons
          </h1>
          <p className="text-lg w-[652px] text-center text-gray-blue">
            Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals.
          </p>
        </div>
        <div className="flex gap-6">
          <Card />
          <Card />
          <Card />
        </div>
        <button className="border-[1px] text-primary border-primary w-max flex gap-2 items-center rounded-lg text-sm font-semibold px-14 py-4">View more</button>
      </div>
      <div className="px-44 py-14 flex flex-col items-center bg-offwhite gap-16">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-4xl w-[695px] text-center text-secondary font-bold">
            What else can I gain from participating in Skills Challenges ?
          </h1>
          <p className="text-lg w-[652px] text-center text-gray-blue">
            Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals.
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="grid grid-cols-2 gap-7">
            <div className="flex flex-col gap-3">
              <div className="bg-primary h-max w-max p-4 rounded-md">
                <IoBriefcaseOutline className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="font-bold">Enhance Your Employment Path</h2>
                <p className="text-gray-blue text-sm">Network with other talented individuals and learn from their experiences</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-primary h-max w-max p-4 rounded-md">
                <IoBriefcaseOutline className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="font-bold">Earn Recognition and Prizes</h2>
                <p className="text-gray-blue text-sm">Gain valuable experience and knowledge to advance your career in the digital economy:</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-primary h-max w-max p-4 rounded-md">
                <IoBriefcaseOutline className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="font-bold">Personal Growth</h2>
                <p className="text-gray-blue text-sm">Challenge yourself, learn new skills, and expand your professional network.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-primary h-max w-max p-4 rounded-md">
                <IoBriefcaseOutline className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="font-bold">Learn from Industry Experts</h2>
                <p className="text-gray-blue text-sm">Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces. </p>
              </div>
            </div>
          </div>
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomePage