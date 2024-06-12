import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import {RxDiscordLogo,RxGithubLogo,RxInstagramLogo,RxTwitterLogo,RxLinkedinLogo,} from "react-icons/rx";

export const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={50}
            height={50}
            draggable={false}
            className="cursor-pointer hover:animate-slowspin rounded-full"
          />
          <div className="font-bold ml-[10px] hidden md:block text-gray-300">
            Evolumin 2024
          </div>
        </Link>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
      <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
        {[
          {
            title: "About me",
            link: "/#about-me",
          },
          {
            title: "SDG",
            link: "/sdg",
          },
          {
            title: "Skills",
            link: "/#skills",
          },
          {
            title: "Projects",
            link: "/#projects",
          },
        ].map((link) => (
          <Link
            key={link.title}
            href={link.link}
            className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>

    <div className="flex flex-row gap-5">
      {[
        {
          name: "Instagram",
          icon: RxInstagramLogo,
          link: "https://instagram.com",
        },
        {
          name: "Facebook",
          icon: FaFacebook,
          link: "https://facebook.com",
        },
        {
          name: "Twitter",
          icon: RxTwitterLogo,
          link: "https://twitter.com",
        },
      ].map(({ link, name, icon: Icon }) => (
        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          key={name}
        >
          <Icon className="h-6 w-6 text-white" />
        </Link>
      ))}
    </div>
    </div>
    </div>
  );
};
