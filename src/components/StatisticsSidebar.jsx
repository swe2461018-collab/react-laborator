import "./StatisticsSidebar.css"

// Зурагт өгсөн тоон мэдээлэл
const statistics = [
  {
    title: "Суралцагчид",
    items: [
      "Бакалавр оюутан: 4087",
      "Хос хөтөлбөрийн оюутан: 50",
      "Бакалаврын гадаад оюутан: 96",
      "Магистрант: 268",
      "Докторант: 430",
      "Ахисан түвшний гадаад суралцагч: 213",
    ],
  },
  {
    title: "Багш, ажилтнууд",
    items: [
      "Үндсэн багш: 354",
      "Гадаад багш: 4",
      "Гэрээт багш: —",
      "Зочин профессор: 0",
      "Ажилтнууд: 294",
    ],
  },
  {
    title: "Багшлах бүрэлдэхүүний бүтэц",
    items: [
      "Докторын зэрэгтэй багш: 196",
      "Магистрын зэрэгтэй багш: 158",
      "Профессор багш: 15",
      "Дэд профессор багш: 84",
      "Ахлах багш: 117",
      "Багш: 79",
      "Дадлагажигч багш: 40",
      "Зөвлөх профессор: 19",
    ],
  },
]

// Гарчиг болон бүлгүүдийг тухайн хуудас props-оор дамжуулж болно.
function StatisticsSidebar({ title = "ХААИС Тоон мэдээлэл", groups = statistics }) {
  return (
    <aside className="statistics-sidebar" aria-label={title}>
      <h2>{title}</h2>
      <ol className="statistics-groups">
        {groups.map((group, index) => (
          <li className="statistics-group" key={group.title}>
            <span className="statistics-number" aria-hidden="true">{index + 1}</span>
            <div>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  )
}

export default StatisticsSidebar
