import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage';
import EventPage from './pages/Events/EventPage';
import Signup from './pages/Sign/Signup';
import TimelinePage from './pages/Timeline/TimelinePage';

function App() {
  return (
    <div className="App bg-dark-soft text-white overflow-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/sign" element={<Signup />} />
        <Route path="/timeline" element={<TimelinePage />} />
      </Routes>
    </div>
  );
}

export default App;
