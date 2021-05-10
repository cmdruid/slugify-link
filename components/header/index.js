import Image  from 'next/image'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image className="logo" src="/color-slug.svg" width={100} height={100} />
      <h1>slugify</h1>
      <h2>Short URLs for your <br /> code projects.</h2>
    </header>
  )
}