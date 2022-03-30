import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from './components/authentication/Auth'
import Dashboard from './components/Dashboard'
import Layout from './components/Layout'
import Login from './components/authentication/Login'
import Starships from './containers/Starships'
import Vehicles from './containers/Vehicles'
import Planets from './containers/Planets'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth/>}>
              <Route index element={<Login/>}/>
              <Route path='login' element={<Login/>}/>
          </Route>

          <Route path="/" element={<Layout/>}>
              <Route path='dashboard' element={<Dashboard/>}/>
              <Route path='starships' element={<Starships/>}/>
              <Route path='vehicles' element={<Vehicles/>}/>
              <Route path='planets' element={<Planets/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
