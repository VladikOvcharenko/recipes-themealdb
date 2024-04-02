import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Preloader } from '../Preloader'
import { GoBack } from '../GoBack'
import { getMealById } from '../../api'

function Recipe() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]))
  }, [id])

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1> {recipe.strMeal}</h1>
          <h6>category: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6>area: {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>

          <table className="recipe-Ingredient">
            <thead>
              <tr>
                <th>Ingredients</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  )
                }
                return null
              })}
            </tbody>
          </table>

          {recipe.strYoutube ? (
            <div className="recipe-video">
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowfullscreen
              />
            </div>
          ) : null}
        </div>
      )}
      <GoBack />
    </>
  )
}

export { Recipe }
