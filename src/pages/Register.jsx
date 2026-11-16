import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../components/AuthContext"
import "./Register.css"

function Register() {
  const { register } = useContext(AuthContext)
  const navigate = useNavigate()
  const [form, setForm] = useState({ lastname: "", firstname: "", email: "", password: "", confirmPassword: "" })
  const [message, setMessage] = useState("")

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.lastname.trim() || !form.firstname.trim() || !form.email.trim() || !form.password || !form.confirmPassword) {
      setMessage("Бүх талбарыг бөглөнө үү!")
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setMessage("Имэйл хаягаа зөв оруулна уу!")
      return
    }
    if (form.password.length < 6) {
      setMessage("Нууц үг 6-аас доошгүй тэмдэгттэй байна!")
      return
    }
    if (form.password !== form.confirmPassword) {
      setMessage("Нууц үг таарахгүй байна!")
      return
    }
    const result = register({ lastname: form.lastname.trim(), firstname: form.firstname.trim(), email: form.email.trim().toLowerCase(), password: form.password })
    setMessage(result.message)
    if (result.success) navigate("/login", { state: { message: result.message } })
  }

  return (
    <main className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <h1>Хэрэглэгч бүртгүүлэх</h1>
        <label htmlFor="register-lastname">Овог</label>
        <input id="register-lastname" name="lastname" value={form.lastname} onChange={handleChange} placeholder="Овгоо оруулна уу" autoComplete="family-name" />
        <label htmlFor="register-firstname">Нэр</label>
        <input id="register-firstname" name="firstname" value={form.firstname} onChange={handleChange} placeholder="Нэрээ оруулна уу" autoComplete="given-name" />
        <label htmlFor="register-email">И-мэйл</label>
        <input id="register-email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="example@email.com" autoComplete="email" />
        <label htmlFor="register-password">Нууц үг</label>
        <input id="register-password" type="password" name="password" value={form.password} onChange={handleChange} placeholder="Нууц үг" autoComplete="new-password" />
        <label htmlFor="register-confirm">Нууц үг давтах</label>
        <input id="register-confirm" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Нууц үгээ давтана уу" autoComplete="new-password" />
        {message && <p className="auth-message" role="alert">{message}</p>}
        <button type="submit">Бүртгүүлэх</button>
        <p>Бүртгэлтэй юу? <Link to="/login">Нэвтрэх</Link></p>
      </form>
    </main>
  )
}
export default Register
