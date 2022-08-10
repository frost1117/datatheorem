import { Provider as ReduxProvider } from 'react-redux'

import { ToastContainer } from 'react-toastify'

import { store } from 'redux/store'

import Router from './router'

import 'react-toastify/dist/ReactToastify.css'

const Main = () => {
  return <Router />
}

function App() {
  return (
    <ReduxProvider store={store}>
      <Main />
      <ToastContainer />
    </ReduxProvider>
  )
}

export default App
