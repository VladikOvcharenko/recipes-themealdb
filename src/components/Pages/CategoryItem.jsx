import { Link } from 'react-router-dom'

function CategoryItem(props) {
  const { strCategory, strCategoryDescription, strCategoryThumb } = props

  return (
    <div className="category-item">
      <img
        className="category-item__img"
        src={strCategoryThumb}
        alt={strCategory}
      />
      <span className="category-item__title">{strCategory}</span>
      <p className="category-item__desc">
        {strCategoryDescription.slice(0, 60)}...
      </p>
      <Link to={`/category/${strCategory}`} className="btn">
        watch more
      </Link>
    </div>
  )
}

export { CategoryItem }
