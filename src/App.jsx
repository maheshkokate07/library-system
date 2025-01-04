import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Provider } from "react-redux";
import appStore from './redux/appStore';

function App() {

  return (
    <>
      <Provider store={appStore}>
        <Navbar />
        <Outlet />
      </Provider>
    </>
  )
}

export default App