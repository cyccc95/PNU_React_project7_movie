import Nav from './components/Nav';
import Main from './components/Main';
import Detail from './components/Detail';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/PNU_React_project7_movie" element={<Main />} />
        <Route path="/PNU_React_project7_movie/Detail/:mvCd" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
