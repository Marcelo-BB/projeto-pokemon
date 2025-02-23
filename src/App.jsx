import ContainerCards from './components/pokemons-td'
import { ThemeProvider } from './contexts/themes'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DetailedCard from './page/pokemon-details'

function App() {

  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<ContainerCards/>}/>
          <Route path='/pokemon/:id' element={<DetailedCard/>}/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
