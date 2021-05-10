import Head   from 'next/head'
import Image  from 'next/image'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Slugify Link</title>
        <meta property="og:title"       content="slugify.link" />
        <meta property="og:description" content="Shortened URLs for your code projects." />
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://slugify.link" />
        <meta property="og:image"       content="/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {children}
      </main>

      <footer>
          Powered by{' '}
          <span className={styles.logo}>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </a>
          </span>
      </footer>
    </div>
  )
}