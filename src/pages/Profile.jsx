import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../components/AuthContext"
import "./Register.css"

function Profile() {
  const { user } = useContext(AuthContext)
  if (!user) return <Navigate to="/login" replace />
  return (
    <main className="auth-container">
      <section className="auth-form">
        <h1>Миний мэдээлэл</h1>
        <p><strong>Овог:</strong> {user.lastname}</p>
        <p><strong>Нэр:</strong> {user.firstname}</p>
        <p><strong>И-мэйл:</strong> {user.email}</p>
      </section>
    </main>
  )
}
export default Profile
