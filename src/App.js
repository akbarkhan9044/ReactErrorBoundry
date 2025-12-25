import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './page/home/Home';
import Mainuser from './page/user/Mainuser';
import ShowExample from './page/sentary/page';
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route 
  path='/' element={<Home/>}
  />
  <Route
  path='/user'
  element={<Mainuser/>}
  />
  <Route
  path='/show'
  element={<ShowExample/>}
  />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
