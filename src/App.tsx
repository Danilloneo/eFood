import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCSS } from './styles'
import Rotas from './routes'
import { store } from './Store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
