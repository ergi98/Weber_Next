import Head from 'next/head';

// Components
import UnderConstruction from '../components/under-construction/UnderConstruction'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="../favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="google-site-verification" content="WOGUalplDuCjzI9CkM7nSUnHMFJrmYUinVYK_nM5NeY" />
        <meta
          name="description"
          content="Work for one of the most inovative web design companies in albania!"
        />
        <link rel="apple-touch-icon" href="../apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png" />
        <link rel="manifest" href="../manifest.json" />
        <title>Weber Careers</title>
      </Head>
      <main>
        <UnderConstruction />
      </main>
    </>
  )
}
