import { BrowserRouter, Routes, Route } from "react-router-dom"
import Pyipaes from "./docs/python/introduction-to-python/installing-python-and-environment-setup/Pyipaes";
import Pyitp from "./docs/python/introduction-to-python/introduction-to-python/Pyitp";
import Pywaeofpp from "./docs/python/introduction-to-python/writing-and-executing-our-first-python-program/Pywaeofpp";
import Pydt from './docs/python/variables-and-data-types/data-types/Pydt'
import Pyv from './docs/python/variables-and-data-types/variables/Pyv'

import Python from "./docs/python/Python";
import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route index element={<Home />} />

        <Route path='/docs/python' element={<Python />} />

        <Route path='docs/python/introduction-to-python' element={<Pyitp />} />
        <Route path='/docs/python/installing-python-and-environment-setup' element={<Pyipaes />} />
        <Route path='/docs/python/writing-and-executing-our-first-python-program' element={<Pywaeofpp/>}/>

        <Route path='/docs/python/data-types' element={<Pydt/>}/>
        <Route path='/docs/python/variables' element={<Pyv/>}/>
      



        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
