import { Header } from './components/Header/Header'
import { Footer } from './/components/Footer/Footer'
import { Home } from './components/Pages/Home'
import { NotFound } from './components/Pages/NotFound'
import { Category } from './components/Pages/Category'
import { Recipe } from './components/Pages/Recipe'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <main className="main container">
      <BrowserRouter basename="/recipes-themealdb">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/meal/:id" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </main>
  )
}
export default App
