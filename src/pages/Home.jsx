import NewsCard from "../components/NewsCard";

export function Home() { 

    return (
        <main>
        {/* HERO - НҮҮР ХУУДАСНЫ ТОМ ХЭСЭГ */}
        <section className="hero">
          <div className="hero-content">
            <h2>Хөдөө аж ахуйн их сургууль</h2>
            <p>Мэдлэг, шинжлэх ухаан, инновацид суурилсан</p>
            <p>2034 боловсролын байгууллага</p>
          </div>
        </section>

        {/* ЧУХАЛ ХОЛБООС */}
        <section className="important">
          <div className="important-image">
            <img src="/medee.jpg" alt="ХААИС-ийн зураг" />
          </div>

          <div className="important-content">
            <h2>ЧУХАЛ ХОЛБООС</h2>
            <div className="link-cards">
              <a href="https://shilendans.gov.mn/organization/30156?ry=2026&group=5" target="_blank" rel="noreferrer">
                <span className="link-icon">₮</span> Шилэн данс
              </a>
              <a href="https://www1.unicus.mn/nar/" target="_blank" rel="noreferrer">
                <span className="link-icon">▣</span> Сахилгын бүртгэлийн программ
              </a>
              <a href="https://lms.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">◉</span> Сургалтын албаны ВЭБ
              </a>
              <a href="https://teacher.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">◫</span> Багшийн ВЭБ
              </a>
              <a href="https://lce.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">★</span> Багшийн хөгжлийн программ
              </a>
              <a href="https://student.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">◒</span> Оюутны ВЭБ
              </a>
              <a href="https://elselt.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">✦</span> Элсэлтийн ВЭБ
              </a>
              <a href="https://finance.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">¥</span> Оюутны төлбөрийн мэдээлэл
              </a>
              <a href="https://mail.google.com/a/muls.edu.mn" target="_blank" rel="noreferrer">
                <span className="link-icon">✉</span> Электрон шуудан
              </a>
              <a href="https://library.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">▣</span> Номын сан ВЭБ
              </a>
              <a href="http://catalog.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">○</span> Номын сангийн электрон каталог
              </a>
              <a href="http://map.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">⌖</span> Төв байр план зураг
              </a>
              <a href="https://sites.google.com/muls.edu.mn/feedback-muls-edu-mn/home" target="_blank" rel="noreferrer">
                <span className="link-icon">◈</span> Санал хүсэлт илгээх
              </a>
              <a href="https://www.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">↗</span> ХААИС-ийн үндсэн ВЭБ
              </a>
            </div>
          </div>
        </section>

        {/* МЭДЭЭ */}
        <section className="news">
          <h2>СҮҮЛИЙН МЭДЭЭ</h2>
          <div className="news-list">
           <NewsCard
            title="ХААИС-ийн шинэ мэдээлэл"
            image="/news1.jpg"
            description="Хөдөө аж ахуйн их сургуулийн үйл ажиллагаа, шинэ мэдээ мэдээлэл."
            date="2026.09.06"
          />
            <NewsCard
            title="Сургалт, эрдэм шинжилгээний үйл ажиллагаа"
            image="/news2.jpg"
            description="Сургалт болон эрдэм шинжилгээний үйл ажиллагааны талаарх мэдээлэл."
            date="2026.09.05"
            />
            <NewsCard
            title="Оюутны үйл ажиллагаа"
            image="/news3.jpg"
            description="Оюутнуудад зориулсан үйл ажиллагаа, арга хэмжээний мэдээлэл."
            date="2026.09.04"
            />

          </div>
        </section>
      </main>
    )
}

export default Home