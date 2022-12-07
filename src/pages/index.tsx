import type { NextPage, GetStaticProps } from "next";
import Image from "next/image";
import Layout from "../components/layout";
import type { ArticlesProps } from "../types";
import Link from "next/link";
import { NextSeo } from "next-seo";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ByeIcon = () => {
  return <Image src="/bye.svg" className="text-yellow-400 " alt="icon" width={50} height={50} />;
};

const Home: NextPage<ArticlesProps> = ({ articles }) => {
  const Articles = articles.sort((a, b) => b.id - a.id).slice(0, 2);

  return (
    <Layout title="Home">
      <>
        <NextSeo
          title="Mohammad Riswanto"
          description="Blog, Project showcase and code snippets"
          openGraph={{
            type: "website",
            title: "Mohammad Riswanto - Developer",
            description: "About Blog, Project showcase and code snippets",
            url: "https://hendrialqori.vercel.app",
            siteName: "Hendri Alqori",
            images: [
              {
                url: "https://ik.imagekit.io/ils26chuk/og-image.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668654017675",
                width: 1200,
                height: 630,
              },
            ],
          }}
        />
        <header className="mt-1 md:mt-10" aria-label="up-side">
          <ByeIcon />
          <h1 className="text-[2.1rem] font-extrabold">Mohammad Riswanto</h1>
          <p className="font-semibold">Frontend Developer</p>
          <p className="text-gray-600 dark:text-gray-400">
            A guy from Tegal, Indonesia <br /> who is creative, a fast learner who likes to code.
          </p>
        </header>

        <section className="mt-16" aria-label="recent-post-container">
          <h3 className="text-2xl font-bold my-5">Recent Post</h3>
          <section className="flex flex-wrap gap-3">
            {Articles.map((article, i) => (
              <Link key={article.slug} href={"/blog/" + article.slug}>
                <article
                  className="flex gap-5 w-[100%] md:w-[48%] rounded-2xl bg-gray-100 dark:bg-light/5 p-6"
                  aria-label="card-wrapper"
                  role={"button"}
                  tabIndex={0}
                >
                  <section className="w-full" aria-label="card-content">
                    <div className="flex items-center text-xs gap-4 mb-4">
                      <p>{article.created}</p>
                      <p>{article.tag}</p>
                    </div>
                    <h2 className="font-extrabold text-xl">{article.title}</h2>
                  </section>
                </article>
              </Link>
            ))}
          </section>
        </section>
      </>
    </Layout>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join("src", "articles"));
  const articles = files.map((file: string) => {
    const dataWithMatter = fs.readFileSync(path.join("src", "articles", file), "utf-8");
    const { data } = matter(dataWithMatter);
    return data;
  });

  return {
    props: {
      articles,
    },
  };
};
