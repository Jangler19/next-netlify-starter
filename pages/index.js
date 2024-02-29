import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        {/* Player de vídeo */}
        <div>
          <h2>Player de Vídeo</h2>
          <iframe name="Player" src="https://sinalpublico.com/player3/server8http2hlb.php?vid=FRTSDUNVRSOT01EP01" frameborder="0" height="400" scrolling="no" width="640" allow="encrypted-media" allowFullScreen></iframe>
        </div>
      </main>

      <Footer />
    </div>
  )
          }
