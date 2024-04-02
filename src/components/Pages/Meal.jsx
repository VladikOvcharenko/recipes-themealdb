import { Link } from 'react-router-dom'

function Meal(props) {
  const { strMeal, idMeal, strMealThumb } = props
  return (
    <div className="category-item">
      <img className="category-item__img" src={strMealThumb} alt={strMeal} />
      <span className="category-item__title">{strMeal}</span>

      <Link to={`/meal/${idMeal}`} className="btn">
        watch recipe
      </Link>
    </div>
  )
}
export { Meal }
