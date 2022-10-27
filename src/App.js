import Nav from './components/Nav';
import Main from './components/Main';
import Detail from './components/Detail';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
