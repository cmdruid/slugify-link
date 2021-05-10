/** pages/404.js */

import Image from 'next/image'
import Layout from 'components/layout'

export default function Custom404() {
  return (
    <Layout>
      <Image className="logo" src="/color-slug.svg" width={100} height={100} />
      <h1>404</h1>
      <h2>That slug was not found!</h2>
    </Layout>
  )
}