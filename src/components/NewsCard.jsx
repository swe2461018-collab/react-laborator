function NewsCard({ title, description, date, image }) {
  return (
    <article className="news-card">
      <img
        className="news-image"
        src={image}
        alt={title}
      />

      <div className="news-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{date}</span>
      </div>
    </article>
  )
}

export default NewsCard