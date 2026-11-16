import { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../components/AuthContext"
import "./Register.css"

function Login() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [form, setForm] = useState({ email: "", password: "" })
  const [message, setMessage] = useState("")
  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }
  function handleSubmit(event) {
    event.preventDefault()
    if (!form.email.trim() || !form.password) {
      setMessage("Мэдээллээ бүрэн оруулна уу!")
      return
    }
    const result = login(form.email, form.password)
    setMessage(result.message)
    if (result.success) navigate("/")
  }
  return (
    <main className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <h1>Хэрэглэгч нэвтрэх</h1>
        {!message && location.state?.message && <p className="auth-success" role="status">{location.state.message}</p>}
        <label htmlFor="login-email">И-мэйл</label>
        <input id="login-email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="И-мэйл хаяг" autoComplete="username" />
        <label htmlFor="login-password">Нууц үг</label>
        <input id="login-password" type="password" name="password" value={form.password} onChange={handleChange} placeholder="Нууц үг" autoComplete="current-password" />
        {message && <p className="auth-message" role="alert">{message}</p>}
        <button type="submit">Нэвтрэх</button>
        <p>Бүртгэлгүй юу? <Link to="/register">Бүртгүүлэх</Link></p>
      </form>
    </main>
  )
}
export default Login
