import QRCodePage from './pages/QRCodePage';
import Panel from './pages/Panel';
import Menu from './pages/Menu';
import Kitchen from './pages/Kitchen';
import Manage from './pages/Manage';

function App() {

  return (
    <>
      <Panel/>
      <Manage/>
      <Kitchen/>
      <Menu/>
      <QRCodePage/>
    </>
  );
}

export default App;
