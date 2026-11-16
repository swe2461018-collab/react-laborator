import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "./AuthContext"

function Header() {
  const { user, logout } = useContext(AuthContext)

  // Их сургуулийн монгол нэр
  const universityName = "ХӨДӨӨ АЖ АХУЙН ИХ СУРГУУЛЬ"

  // Их сургуулийн англи нэр
  const englishName = "MONGOLIAN UNIVERSITY OF LIFE SCIENCES"

  return (
    <header className="header">

      {/* Лого болон сургуулийн нэр */}
      <div className="logo-section">

        {/* ХААИС-ийн лого */}
        <img 
          src={import.meta.env.BASE_URL + "logo_muls.png"} 
          alt="ХААИС лого" 
          className="muls-logo" 
        />

        {/* Их сургуулийн нэр */}
        <div className="university-title">

          <h1>{universityName}</h1>

          <p>{englishName}</p>

        </div>

      </div>
      {/* HEADER-ИЙН БАРУУН ТАЛЫН ЦЭС */}
      <div className="top-links">
        <a href="#">
         ЭЛСЭЛТИЙН БҮРТГЭЛ
       </a>

       <a href="#">
         БҮТЭЦ БҮРЭЛДЭХҮҮН
       </a>

       <a href="#">
         ТӨГСӨГЧИД
       </a>

        {user ? (
          <>
            <span className="auth-greeting">Сайн байна уу, {user.firstname}!</span>
            <Link to="/profile">Миний мэдээлэл</Link>
            <button type="button" className="auth-logout" onClick={logout}>Гарах</button>
          </>
        ) : (
          <>
            <Link to="/login">НЭВТРЭХ</Link>
            <Link to="/register">БҮРТГҮҮЛЭХ</Link>
          </>
        )}
      </div>


    </header>
  )
}

export default Header
