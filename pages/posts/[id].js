import Head from 'next/head'
import React from 'react'

import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'

import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>

        <div className="text-gray-500 my-4">
          <Date dateString={postData.date} />
        </div>

        {/* Cara render string HTML pake dangerouslySetInnerHTML */}
        {/* Pakai "prose" untuk render markdown. "prose" dari package @tailwindcss/typography */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  )
}

// Ini untuk server-side-redering
// context berisi request specific parameters (cek gambar SSR with getServerSideProps)
// export async function getServerSideProps(context) context itu mengandung info request

export async function getStaticProps({ params }) {
  // params ini salah satu object yang ada pada array di key paths pada getStaticPaths
  // Kenapa id ? cek pada getAllPostIds()
  // karena nama filenya [id] dan return value `paths` pada getStaticPaths harus -
  // berbentuk array of object dengan objectnya itu wajib ada params & nama file dynamic route
  const postData = await getPostData(params.id)
  return { props: { postData } }
}

// getStaticPaths akan nyambung ke getStaticProps
// * disini juga bahkan kita bisa lakuin query database
export async function getStaticPaths() {
  const paths = getAllPostIds()

  // paths harus berupa object dengan formatnya cek aja di getAllPostIds()
  return { paths, fallback: false }
}
