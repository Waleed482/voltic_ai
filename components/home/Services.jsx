import React from "react";
import Image from "next/image";
import Devoops from "@/public/homeImages/Devoop.png";
import coldInfrast from "@/public/homeImages/coldInfrast.png";
import coldMail from "@/public/homeImages/coldMail.png";
import digitalMar from "@/public/homeImages/digitalMar.png";
import emailMar from "@/public/homeImages/emailMar.png";
import interface1 from "@/public/homeImages/interface1.png";
import leadG from "@/public/homeImages/leadG.png";
import SoftDev from "@/public/homeImages/SoftDev.png";
import staff from "@/public/homeImages/staff.png";
import CallMadeIcon from '@mui/icons-material/CallMade';

const Services = () => {
  // Data for the services section
  const servicesData = [
    {
      title: "DEVOPS CONSULTING",
      description:
        "Streamline your development lifecycle with automation and scalable solutions.",
      image: Devoops,
    },
    {
      title: "USER INTERFACE DESIGN",
      description:
        "Create visually stunning, user-friendly interfaces that drive engagement.",
      image: interface1,
    },
    {
      title: "SOFTWARE DEVELOPMENT",
      description:
        "Deliver tailored, high-performance software solutions for your business.",
      image: SoftDev,
    },
    {
      title: "STAFF AUGMENTATION",
      description:
        "Enhance your team with skilled professionals for seamless project execution.",
      image: staff,
    },
    {
      title: "COLD INFRASTRUCTURE",
      description:
        "Develop secure and scalable email systems for outreach success.",
      image: coldInfrast,
    },
    {
      title: "LEAD GENERATION",
      description:
        "Boost growth with strategies that convert leads into loyal customers.",
      image: leadG,
    },
    {
      title: "COLD EMAILING",
      description:
        "Engage prospects with personalized and effective email campaigns.",
      image: coldMail,
    },
    {
      title: "EMAIL MARKETING",
      description:
        "Nurture customer relationships with targeted email strategies.",
      image: emailMar,
    },
    {
      title: "DIGITAL MARKETING",
      description:
        "Expand your reach with SEO, PPC, and impactful online strategies.",
      image: digitalMar,
    },
  ];

  return (
    <div id="services" className="bg-black text-white py-16 ">
      <div className=" mx-auto">
        {/* Header Section */}
        <div className="w-full flex flex-row my-10 px-32">
          <div className="w-1/2">
            <h2 className="text-5xl font-bold uppercase">Services</h2>
          </div>
          <div className="w-1/2">
            <p className=" text-lg text-gray-300">
              Turn your online presence into a growth engine by converting
              clicks into customers and interactions into results.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex-row md:flex items-center border-t border-b border-gray-900  py-6 px-32 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Service Image */}
              <div className=" flex-shrink-0 mr-6 ">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={200}
                  height={96}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Service Content */}
              <div className="flex mx-5 w-2/3">
                <div className="w-1/2"><h3 className="text-2xl font-bold">{service.title}</h3></div>
                <div className="w-1/2"><p className="text-gray-400 text-base mt-2">
                  {service.description}
                </p></div>
                
                
              </div>

              {/* Icon */}
              <div className="ml-4">
                <CallMadeIcon className="text-white text-3xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
