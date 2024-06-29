import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/home/HomePage';
import EventPage from './pages/Events/EventPage';

function App() {
  return (
    <div className="App bg-dark-soft text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
      </Routes>
    </div>
  );
}

export default App;
