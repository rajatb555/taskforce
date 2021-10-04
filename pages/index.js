import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-3 sm:px-5 lg:px-6">
      <Head>
        <title>TaskForce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
        <Header/>
      {/* Main */}
      <main class="flex justify-center max-w-6xl mx-auto px-8 sm:px-16">
        <Main/>
      </main>
      {/* Footer */}
      <div class="flex justify-center">
        <Footer/>
      </div>
    </div>
  )
}
