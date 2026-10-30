 function Header() {

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
          src="/logo_muls.png" 
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

      </div>


    </header>
  )
}

export default Header