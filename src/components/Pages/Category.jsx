import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getFilteredCategories } from '../../api'
import { MealList } from './MealList'

import { Preloader } from '../Preloader'
import { GoBack } from '../GoBack'

function Category() {
  const { name } = useParams()
  const [meals, setMeals] = useState([])

  useEffect(() => {
    getFilteredCategories(name).then((data) => setMeals(data.meals))
  }, [name])

  return (
    <div>
      <GoBack />
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </div>
  )
}

export { Category }
