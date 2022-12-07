import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { SiInstagram } from "react-icons/si";
import { NextSeo } from "next-seo";

import type { NextPage } from "next";

const IndonesiaIcon = () => {
  return <Image src="/indonesia.svg" width={30} height={20} alt="indonesia-icon" />;
};

const About: NextPage = () => {
  return (
    <Layout title="About">
      <>
        <NextSeo
          title="About -- Mohammad Riswanto"
          description="About myself, the skills I have and my career path"
          openGraph={{
            type: "website",
            title: "About -- Mohammad Riswanto",
            description: "About myself, the skills I have and my career path",
            siteName: "Mohammad Riswanto",
            images: [
              {
                url: "../components/assets/MyPic.jpeg",
                width: 1200,
                height: 630,
              },
            ],
          }}
        />
        <section className="dynamic-font md:leading-[1.75rem] mt-5 flex flex-col-reverse md:flex-row gap-2 text-gray-600 dark:text-gray-300">
          <section className="w-full md:w-9/12">
            <h1 className="text-3xl font-bold">About me</h1>
            <p className="mb-5">
              Hey everyone! My name is <b>Mohammad Riswanto</b> and i&apos;m from{" "}
              <a
                className="text-sky-600 dark:text-sky-400 underline"
                href="https://en.wikipedia.org/wiki/Tegal"
                target="_blank"
                rel="noreferrer"
              >
                Tegal, Central Java
              </a>
              <sup>
                <IndonesiaIcon />
              </sup>
            </p>
            <blockquote>
              <em>
                &quot;If the web can be evolved to include the missing APIs and have better
                performance, [developers] won’t need to go beyond the web. &quot;
              </em>{" "}
              <br /> <br />— Brendan Eich (Creator of Javascript)
            </blockquote>
            <p>
              I was graduated from SMKN 1 Bojonggede in 2015,which my major was
              Mulitimedia,specifically I studied Design Graffis,Content Creator and Photo
              Graffy.Then I managed to swicth my career by being in
              <a
                href="https://www.alterra.id/"
                className="font-semibold text-sky-600 dark:text-sky-400 underline"
              >
                {" "}
                Alttera Academy
              </a>{" "}
              bootcamp for 3 months. Right now I'm focusing on Frontend Developer field.I had
              several clients before both from private componies and goverments.
            </p>
            <br />
            <p>
              I am quite proficient in several technologies to build an interactive web app, such as
              React JS, Next JS, Vue JS,Glutre and React Native.I&apos;m open to work as{" "}
              <b>Frontend Development</b>.
            </p>
          </section>
          <aside>
            <Image
              className="rounded-full"
              src="/MyPic.jpeg"
              alt="avatar"
              width={200}
              height={200}
            />
          </aside>
        </section>

        <section className="dynamic-font text-gray-600 dark:text-gray-300" aria-label="bottom-side">
          <h1 className="text-xl font-bold">Better Together</h1>
          <p>
            If you want to make friendship or cooperation, please contact me on my social media
            accounts below.
          </p>
          <section className="flex flex-wrap gap-2 mt-3" aria-label="contact-wrapper">
            <Link href={"https://www.linkedin.com/in/moh-riswanto-182989244/"}>
              <a
                className="flex items-center justify-center gap-2 border-[1px] border-gray-400 rounded-lg px-1 py-2 w-5/12 md:w-3/12 "
                target="_blank"
              >
                <FaLinkedin className="text-xl" />
                <p className="font-semibold">LinkedIn</p>
              </a>
            </Link>
            <Link href={"mailto: mohwantoris@gmail.com?subject="}>
              <a
                className="flex items-center justify-center gap-2 border-[1px] border-gray-400 rounded-md px-1 py-2 w-5/12 md:w-3/12 "
                target="_blank"
              >
                <SiGmail className="text-xl" />
                <p className="font-semibold">Gmail</p>
              </a>
            </Link>
            <Link href={"https://github.com/onerism12"}>
              <a
                className="flex items-center justify-center gap-2 border-[1px] border-gray-400 rounded-md px-1 py-2 w-5/12 md:w-3/12 "
                target="_blank"
              >
                <AiFillGithub className="text-2xl" />
                <p className="font-semibold">Github</p>
              </a>
            </Link>
            <Link href={"https://www.instagram.com/moh_riswanto/"}>
              <a
                className="flex items-center justify-center gap-2 border-[1px] border-gray-400 rounded-md px-1 py-2 w-5/12 md:w-3/12 "
                target="_blank"
              >
                <SiInstagram className="text-xl" />
                <p className="font-semibold">Instagram</p>
              </a>
            </Link>
            <Link href={"https://wa.me/+6289513427678"}>
              <a
                className="flex items-center justify-center gap-2 border-[1px] border-gray-400 rounded-md px-1 py-2 w-5/12 md:w-3/12 "
                target="_blank"
              >
                <AiOutlineWhatsApp className="text-xl" />
                <p className="font-semibold">WhatsApp</p>
              </a>
            </Link>
          </section>
        </section>
      </>
    </Layout>
  );
};

export default About;
