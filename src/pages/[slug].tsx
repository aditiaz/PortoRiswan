import Layout from '../components/layout'
import Image from "next/image";
import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

import type { SlugProps } from '../types';
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";

import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';

const Slug: NextPage<SlugProps> = ({ data, content }) => {
  return (
    <Layout title={data.title}>
      <article className='mt-1 md:mt-10'>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-center">{data.title}</h1>
        <section className='w-max mx-auto flex flex-col items-center gap-1 my-8' aria-label='author'>
          <Image src="/avatar.png" width={40} height={40} alt="author-avatar" />
          <h2 className="font-semibold dark:font-light text-sm">Hendri Alqori</h2>
          <div className='flex items-center gap-3 text-xs'>
            <p>{data.created}</p>
            <p>{data.timeRead}</p>
          </div>
          <div className='flex items-center gap-3 mt-8' aria-label='social-media-anchor'>
            <Link href={'https://www.linkedin.com/in/hendri-alqori-b87a52171/'}>
                <a><FaLinkedin className='text-2xl' /></a>
            </Link>
            <Link href={'https://github.com/hendrialqori'}>
                <a><AiFillGithub className='text-2xl' /></a>
            </Link>
          </div>
        </section>
        <section className='mdx-wrapper dynamic-font'>
          <MDXRemote {...content}/>
        </section>
      </article>
    </Layout>
  )
}

export default Slug

export const getStaticPaths:GetStaticPaths = async() => {
    const files = fs.readdirSync(path.join('src', 'articles'))
    const paths = files.map((filename: string) => ({
        params : {
            slug: filename.replace('.md', '')
        }
    }))

   return {
    paths,
    fallback : false
   }
}

export const getStaticProps:GetStaticProps = async ({ params: { slug } }) => {
    const article = fs.readFileSync(path.join('src', 'articles', (slug as string) + '.md'))
    const { data, content: markdownData } = matter(article)
    const content = await serialize(markdownData, {
        mdxOptions: {
            rehypePlugins : [
                rehypeCodeTitles,
                rehypePrism
            ]
        }
    })

    return {
        props: {
            data,
            content
        }
    }
}