import styles from './status.module.css'

export default function Status({ code }) {
  return (
    <div className={`${styles.status} ${styles[`c${code}`]}`}>
      {code === 100 && "Creating your new slug..."}
      {code === 200 && "New slug has been created!"}
      {code === 400 && "Those values are invalid!"}
      {code === 409 && "That slug already exists!"}
      {code === 500 && "Something broke... Try again!"}
    </div>
  )
}