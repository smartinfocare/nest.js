import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  //home component for view the profile
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi i am Yash ,from Mohali, I am working in <a href="https://smartinfocare.com/" className={utilStyles.span}>SMARTINFO CARE SOLUTION</a>  as jr. web developer.</p>
        <p>
        I complete my graduation from H.P.U. in B.C.A.
        </p><p>
        I want to become a software engineer.
        </p>
        <h3>Thanks</h3>
      </section>
    </Layout>
  )
}