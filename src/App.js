import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Create from './Create/creer.js';
import Login from './login/log';
import Profil from './profil/profil';
import Ajout from './Ajout/Ajout';
import Dash from './Dashbord/dash';
import Suivi from './suivi/suivi';
function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/creer" element={<Create/>} />
        <Route path="/profil" element={<Profil/>} />
        <Route path="/dash" element={<Dash/>} />
        <Route path="/ajout" element={<Ajout/>} />
        <Route path="/suivi" element={<Suivi/>} />
      </Routes>
    </div>
  );
}

export default App;
