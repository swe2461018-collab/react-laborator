import { useState } from "react"
import "./oyutan.css"

function Oyutan() {
  const [studentCount, setStudentCount] = useState(0)

  const addStudent = () => setStudentCount((count) => count + 1)
  const removeStudent = () => setStudentCount((count) => count > 0 ? count - 1 : 0)
  const resetCount = () => setStudentCount(0)

  return (
    <main className="oyutan-page">
      <section className="student-header">
        <span className="student-label">ХААИС · ОЮУТНЫ СИСТЕМ</span>
        <h1>Оюутны мэдээлэл</h1>
        <p>Хичээлд бүртгүүлсэн оюутны тоог удирдах хэсэг</p>
      </section>
      <section className="student-card" aria-labelledby="student-card-title">
        <div className="student-icon" aria-hidden="true">🎓</div>
        <h2 id="student-card-title">Оюутны бүртгэл</h2>
        <p className="student-description">Бүртгүүлсэн оюутны нийт тоо</p>
        <div className="student-count">{studentCount}</div>
        <p className="student-status" role="status">
          {studentCount === 0
            ? "Одоогоор оюутан бүртгэгдээгүй байна."
            : `Нийт ${studentCount} оюутан бүртгэгдсэн байна.`}
        </p>
        <div className="student-actions">
          <button type="button" className="student-btn add-btn" onClick={addStudent}>
            + Оюутан нэмэх
          </button>
          <button type="button" className="student-btn remove-btn" onClick={removeStudent} disabled={studentCount === 0}>
            − Оюутан хасах
          </button>
        </div>
        <button type="button" className="reset-btn" onClick={resetCount} disabled={studentCount === 0}>
          Тоо тэглэх
        </button>
      </section>
    </main>
  )
}

export default Oyutan
