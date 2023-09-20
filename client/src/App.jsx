import { Routes, Route } from 'react-router-dom'
import {MainPage} from './pages/MainPage'
import { InfoPage } from './pages/InfoPage'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/card' element={<InfoPage/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
