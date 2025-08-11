
import {Routes, Route} from 'react-router';
import Home from './pages/Home';
import Sven from './pages/Sven'
import Layout from './components/Layout';
function App() {
 

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="sven" element={<Sven/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App
