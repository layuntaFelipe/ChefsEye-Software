import QRCodePage from './pages/QRCodePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Panel from './pages/Panel';
import Menu from './pages/Menu';
import Kitchen from './pages/Kitchen';
import Manage from './pages/Manage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Panel/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/kitchen' element={<Kitchen/>} />
        <Route path='/manage' element={<Manage/>} />
        <Route path='/qrcode' element={<QRCodePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
