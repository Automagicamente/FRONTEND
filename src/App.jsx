import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserForm from './components/UserForm';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crear" element={<UserForm />} />
      {/* Otras rutas pueden ir aquí */}
    </Routes>
  </Router>
);

export default App;
