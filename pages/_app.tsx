import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'
import * as gtag from '../lib/gtag'
import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo'

const App = ({ Component, pageProps }: any) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
        <Script
        id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <DefaultSeo 
        title="Rutvij's Portfolio"
        description="Single page Portfolio of 'Rutvij Sathe (Full Stack Developer)' developed using NextJS, Sanity.io and Deployed on Vercel!"
        canonical='https://rutvijsathe.dev'
      />
      <Component {...pageProps} />
    </>
  )
}

export default App