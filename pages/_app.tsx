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
        description="A comprehensive portfolio showcasing Rutvij's projects and skills."
        canonical='https://rutvijsathe.dev'
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://rutvijsathe.dev',
          title: "Rutvij's Portfolio",
          description: "A comprehensive portfolio showcasing Rutvij's projects and skills.",
          images: [
            {
              url: 'https://rutvijsathe.dev/images/og-image.jpg',
              width: 941,
              height: 941,
              alt: "Rutvij's Portfolio",
            },
          ],
          site_name: "Rutvij's Portfolio",
        }}
        twitter={{
          handle: '@rutcool26',
          site: '@rutcool26',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          {
            name: 'theme-color',
            content: '#000000',
          },
          {
            name: 'keywords',
            content: 'Rutvij, Portfolio, Web Development, Full Stack, Next.js, React, Sanity.io, Vercel, HTML, CSS, JavaScript, Angular, Vue.js, Vuex, Node.js, Express.js, MySQL, MongoDB, RESTful APIs, Database Schemas, SQL, React Native, Python Scripts, Cloud Data, Internal Administration Consoles, Agile Environment, AWS Services, Elastic Bean Stalk, EC2, Lambda, CloudWatch, ETL Solution, Google BigQuery, Third Party Partners, Ruby on Rails, Data Pipeline, Game Catalogue Database, Vite, State Management, Redux, MobX State Tree, Custom Hooks, Functional Programming, Wordle App, Full Stack Developer Intern, R&D, Weekly Sprints, Data Driven Decisions, Google Nest, Full-stack Developer',
           }
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
          },
        ]}
        noindex={false}
        nofollow={false}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App