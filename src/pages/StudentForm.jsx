import { useState } from "react"
import "./StudentForm.css"

function StudentForm() {
  const [student, setStudent] = useState({
    studentId: "", name: "", age: "", major: "", email: "", about: "", active: true,
  })
  const [errors, setErrors] = useState({})
  const [submittedStudent, setSubmittedStudent] = useState(null)

  // Checkbox-ийн checked, бусад талбарын value утгыг авна.
  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setStudent((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }

  function validateForm() {
    const newErrors = {}
    if (!student.studentId.trim()) newErrors.studentId = "Оюутны кодыг оруулна уу."
    if (!student.name.trim()) newErrors.name = "Овог, нэрийг оруулна уу."
    if (student.age === "" || !Number.isFinite(Number(student.age)) || Number(student.age) < 16 || Number(student.age) > 60) {
      newErrors.age = "Нас 16–60 хооронд байна."
    }
    if (!student.major) newErrors.major = "Мэргэжлээ сонгоно уу."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email)) newErrors.email = "И-мэйл хаяг буруу байна."
    if (student.about.trim().length < 10) newErrors.about = "Өөрийн тухай 10-аас доошгүй тэмдэгт бичнэ үү."
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (validateForm()) {
      setSubmittedStudent({ ...student })
      window.alert("Оюутны мэдээллийг амжилттай бүртгэлээ!")
    } else {
      setSubmittedStudent(null)
    }
  }

  function errorProps(name) {
    return { "aria-invalid": Boolean(errors[name]), "aria-describedby": errors[name] ? `${name}-error` : undefined }
  }

  return (
    <main className="registration-page">
      <div className="form-container">
        <h1>ХААИС-ийн оюутны бүртгэл</h1>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="studentId">Оюутны код</label>
          <input id="studentId" name="studentId" type="text" value={student.studentId} onChange={handleChange} placeholder="SWE2461001" {...errorProps("studentId")} />
          {errors.studentId && <p id="studentId-error" className="error" role="alert">{errors.studentId}</p>}

          <label htmlFor="name">Овог, нэр</label>
          <input id="name" name="name" type="text" value={student.name} onChange={handleChange} placeholder="Бат" {...errorProps("name")} />
          {errors.name && <p id="name-error" className="error" role="alert">{errors.name}</p>}

          <label htmlFor="age">Нас</label>
          <input id="age" name="age" type="number" value={student.age} onChange={handleChange} min="16" max="60" {...errorProps("age")} />
          {errors.age && <p id="age-error" className="error" role="alert">{errors.age}</p>}

          <label htmlFor="major">Мэргэжил</label>
          <select id="major" name="major" value={student.major} onChange={handleChange} {...errorProps("major")}>
            <option value="">-- Мэргэжлээ сонгоно уу --</option>
            <option value="Программ хангамж">Программ хангамж</option>
            <option value="Мэдээллийн систем">Мэдээллийн систем</option>
          </select>
          {errors.major && <p id="major-error" className="error" role="alert">{errors.major}</p>}

          <label htmlFor="email">И-мэйл</label>
          <input id="email" name="email" type="email" value={student.email} onChange={handleChange} placeholder="student@example.com" {...errorProps("email")} />
          {errors.email && <p id="email-error" className="error" role="alert">{errors.email}</p>}

          <label htmlFor="about">Өөрийн тухай</label>
          <textarea id="about" name="about" value={student.about} onChange={handleChange} rows={4} placeholder="Өөрийн тухай бичнэ үү" {...errorProps("about")} />
          {errors.about && <p id="about-error" className="error" role="alert">{errors.about}</p>}

          <label className="checkbox-label">
            <input type="checkbox" name="active" checked={student.active} onChange={handleChange} />
            Идэвхтэй оюутан
          </label>
          <button type="submit">БҮРТГҮҮЛЭХ</button>
        </form>

        {submittedStudent && (
          <section className="result" aria-live="polite">
            <h2>Бүртгэгдсэн оюутны мэдээлэл</h2>
            <p><strong>Оюутны код:</strong> {submittedStudent.studentId}</p>
            <p><strong>Овог, нэр:</strong> {submittedStudent.name}</p>
            <p><strong>Нас:</strong> {submittedStudent.age}</p>
            <p><strong>Мэргэжил:</strong> {submittedStudent.major}</p>
            <p><strong>И-мэйл:</strong> {submittedStudent.email}</p>
            <p><strong>Өөрийн тухай:</strong> {submittedStudent.about}</p>
            <p><strong>Төлөв:</strong> {submittedStudent.active ? "Идэвхтэй" : "Идэвхгүй"}</p>
          </section>
        )}
      </div>
    </main>
  )
}

export default StudentForm
