/** pages/500.js */

import Image from 'next/image'
import Layout from 'components/layout'

export default function Custom500() {
  return (
    <Layout>
      <Image className="logo" src="/color-slug.svg" width={100} height={100} />
      <h1>500</h1>
      <h2>Something went wrong! <br /> Try again!</h2>
    </Layout>
  )
}