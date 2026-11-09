import { useEffect, useState } from "react"
import axios from "axios"
import "./StudentList.css"

const apiUrl = "https://jsonplaceholder.typicode.com/users"

function StudentList() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [search, setSearch] = useState("")
  const [selectedId, setSelectedId] = useState(null)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [detailLoading, setDetailLoading] = useState(false)
  const [detailError, setDetailError] = useState("")
  const [detailAttempt, setDetailAttempt] = useState(0)

  // Хуудас хаагдахад хүсэлтийг цуцална.
  useEffect(() => {
    const controller = new AbortController()
    axios.get(apiUrl, { signal: controller.signal, timeout: 15000 })
      .then(({ data }) => {
        setStudents(data)
        setLoading(false)
      })
      .catch(() => {
        if (controller.signal.aborted) return
        setError("Мэдээлэл татахад алдаа гарлаа. Дахин оролдохын тулд хуудсаа шинэчилнэ үү.")
        setLoading(false)
      })
    return () => controller.abort()
  }, [])

  // Өөр хүн сонгох эсвэл хаахад өмнөх хүсэлтийн хариуг харуулахгүй.
  useEffect(() => {
    if (selectedId === null) return
    const controller = new AbortController()
    axios.get(`${apiUrl}/${selectedId}`, { signal: controller.signal, timeout: 15000 })
      .then(({ data }) => {
        setSelectedStudent(data)
        setDetailLoading(false)
      })
      .catch(() => {
        if (controller.signal.aborted) return
        setDetailError("Дэлгэрэнгүй мэдээлэл татахад алдаа гарлаа!")
        setDetailLoading(false)
      })
    return () => controller.abort()
  }, [selectedId, detailAttempt])

  const filteredStudents = students.filter((student) =>
    [student.name, student.username, student.email].some((value) =>
      value.toLowerCase().includes(search.toLowerCase())
    )
  )

  function getStudentDetail(id) {
    if (selectedId === id && !detailError) return
    setSelectedStudent(null)
    setDetailError("")
    setDetailLoading(true)
    setDetailAttempt((attempt) => attempt + 1)
    setSelectedId(id)
  }

  function closeDetail() {
    setSelectedId(null)
    setSelectedStudent(null)
    setDetailError("")
    setDetailLoading(false)
  }

  return (
    <main className="student-list-page">
      <div className="student-container">
        <h1>Оюутны мэдээллийн жагсаалт</h1>
        {loading ? <p role="status">Мэдээлэл ачаалж байна...</p> : error ? <p className="error-message" role="alert">{error}</p> : (
          <>
            <div className="student-summary">
              <span>Нийт бүртгэлтэй хэрэглэгч: <strong>{students.length}</strong></span>
              <span>Хайлтын үр дүн: <strong>{filteredStudents.length}</strong></span>
            </div>
            <label htmlFor="student-search">Оюутан хайх</label>
            <input id="student-search" type="search" className="student-search" placeholder="Нэр, код эсвэл имэйлээр хайх..." value={search} onChange={(event) => setSearch(event.target.value)} />
            <div className="student-table-scroll" role="region" aria-label="Оюутны жагсаалт" tabIndex={0}>
              <table className="student-table">
                <thead><tr><th scope="col">№</th><th scope="col">Оюутны нэр</th><th scope="col">Оюутны код</th><th scope="col">И-мэйл</th><th scope="col">Үйлдэл</th></tr></thead>
                <tbody>
                  {filteredStudents.length > 0 ? filteredStudents.map((student, index) => (
                    <tr key={student.id}>
                      <td>{index + 1}</td><td>{student.name}</td><td>{student.username}</td><td>{student.email}</td>
                      <td><button type="button" className="detail-button" onClick={() => getStudentDetail(student.id)}>Дэлгэрэнгүй</button></td>
                    </tr>
                  )) : <tr><td colSpan={5}>Хайлтад тохирох мэдээлэл олдсонгүй.</td></tr>}
                </tbody>
              </table>
            </div>
            {detailLoading && <p role="status">Дэлгэрэнгүй мэдээлэл ачаалж байна...</p>}
            {detailError && <p className="error-message" role="alert">{detailError}</p>}
            {selectedStudent && (
              <section className="student-detail" aria-live="polite">
                <h2>Хэрэглэгчийн дэлгэрэнгүй мэдээлэл</h2>
                <p><strong>Нэр:</strong> {selectedStudent.name}</p>
                <p><strong>Хэрэглэгчийн нэр:</strong> {selectedStudent.username}</p>
                <p><strong>И-мэйл:</strong> {selectedStudent.email}</p>
                <p><strong>Утас:</strong> {selectedStudent.phone}</p>
                <p><strong>Веб сайт:</strong> {selectedStudent.website}</p>
                <p><strong>Байгууллагын нэр:</strong> {selectedStudent.company?.name}</p>
              </section>
            )}
            {selectedId !== null && <button type="button" className="close-button" onClick={closeDetail}>Хаах</button>}
          </>
        )}
      </div>
    </main>
  )
}

export default StudentList
