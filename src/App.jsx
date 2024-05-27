 import Siderbar from './Sidebar'
import { Routes,Route } from 'react-router-dom'
import Submenu1 from './submenus/Submenu1'
import Submenu2 from './submenus/Submenu2'
import Submenu3 from './submenus/Submenu3'
import Submenu4 from './submenus/Submenu4'
import Submenu5 from './submenus/Submenu5'
import Submenu6 from './submenus/Submenu6'
import Submenu7 from './submenus/Submenu7'
 function App() {
  return (
    <div>
    
      <Routes>
      <Route path="/" element={<Siderbar />} />
        <Route path='/submenu1' element={<Submenu1/>}/>
        <Route path='/submenu2' element={<Submenu2/>}/>
        <Route path='/submenu3' element={<Submenu3/>}/>
        <Route path='/submenu4' element={<Submenu4/>}/>
        <Route path='/submenu5' element={<Submenu5/>}/>
        <Route path='/submenu6' element={<Submenu6/>}/>
        <Route path='/submenu7' element={<Submenu7/>}/>
      </Routes>
    </div>
  )
}
export default App
