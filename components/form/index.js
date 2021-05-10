import { useState } from 'react'
import Status from 'components/status'
import styles from './form.module.css'

export default function Form() {
  // Status of form submission.
  const [ status, setStatus ] = useState();

  async function submitForm(e) {
    // Set status to 100 - loading.
    e.preventDefault();
    setStatus(100);
      
    // Post form data to server.
    fetch('/api/submit', { 
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))), 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => setStatus(res.status))
    .catch(err => setStatus(400));
  }

  return (
    <div className={styles.container}>
      <Status code={status} />
      <form onSubmit={submitForm} autoComplete="off">
        <input 
          type="text" 
          name="url" 
          placeholder="enter a url to shorten" 
          maxLength="1024"
          required 
        />
        <input 
          type="text"
          name="slug"
          placeholder="enter a slug (optional)"
          maxLength="120"
        />
        <button type="submit" className="create">create</button>
      </form>
    </div>
  )
}

