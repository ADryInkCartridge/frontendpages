import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/Navbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Navbar />
      <body className='px-10 py-0'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
