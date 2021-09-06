import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

import utilStyles from '../styles/utils.module.css'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className="my-4 leading-8">
          Hello. I'm Riza, web developer and currently an undergraduate
          informatics student at Institut Teknologi Sepuluh Nopember, Surabaya
        </p>
        <p className="my-4">
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 aria-hidden="true" className="text-2xl my-4 mx-0 font-bold">
          Blog
        </h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="my-4" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

// Ini untuk server-side-redering
// context berisi request specific parameters (cek gambar SSR with getServerSideProps)
// export async function getServerSideProps(context)

export async function getStaticProps() {
  // * Disini kita bener2 bisa ngelakuin fetch data API
  // * Bahkan ngelakuin query ke database
  /**
   * This is possible because getStaticProps only runs on the server-side.
   * It will never run on the client-side. IT WONT BE INCLUDED IN JS BUNDLE
   * FOR THE BROWSER. That means you can write code such as direct database queries
   * without them being sent to browsers.
   */
  const allPostsData = getSortedPostsData()
  return { props: { allPostsData } }
}
