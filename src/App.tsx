import { BrowserRouter } from 'react-router-dom'
import { GlobalCSS } from './styles'
import Rotas from './routes'

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <GlobalCSS />
          <Rotas />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
