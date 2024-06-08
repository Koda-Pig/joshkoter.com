import Layout from '@/components/Layout'
import '../styles/global.scss'

export const metadata = {
  title: 'Josh Koter',
  description: 'Josh Koter - Frontend Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Google Tag Manager */}
      {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4ML6BZSHFC');
            `,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4ML6BZSHFC"
        ></script> */}
      {/* End Google Tag Manager */}
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
