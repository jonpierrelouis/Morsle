import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
      </Routes>
    </>
  )
}

export default App