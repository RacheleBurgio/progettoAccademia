import styles from './login.module.css'
import { jwtDecode } from 'jwt-decode'
const REACT_APP_API_URL = process.env.REACT_APP_API_URL

function Login() {
  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.inputField}
          name="username"
          placeholder="Username"
          required
        />
        <input
          type="password"
          className={styles.inputField}
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit" className={styles.loginBtn}>
          Accedi
        </button>
      </form>
    </div>
  )
}

function handleSubmit(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const data = {
    username: formData.get('username'),
    password: formData.get('password'),
  }

  fetch(`${REACT_APP_API_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Credenziali errate')
      }
      return response.json()
    })
    .then((result) => {
      localStorage.setItem('token', result.token)
      const decoded = jwtDecode(result.token)
      const role = decoded.roles[0]
      sessionStorage.setItem('role', role)

      if (result.role === 'admin') {
        window.location.href = '/admin'
      } else {
        window.location.href = '/'
      }
    })
    .catch((error) => {
      alert('Credenziali errate')
    })
}

export default Login
