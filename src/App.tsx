import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import ActiveHouse from './pages/ActiveHouse';
import FullRoster from './pages/FullRoster';
import MissionStatement from './pages/MissionStatement'; // Import MissionStatement
import NationalHistory from './pages/NationalHistory'; // Import NationalHistory
import ChapterHistory from './pages/ChapterHistory'; // Import ChapterHistory
import Recruitment from './pages/Recruitment';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="brothers/active-house" element={<ActiveHouse />} />
          <Route path="brothers/full-roster" element={<FullRoster />} />
          <Route path="about/national-history" element={<NationalHistory />} /> {/* Add NationalHistory route */}
          <Route path="about/mission-statement" element={<MissionStatement />} /> {/* Add MissionStatement route */}
          <Route path="about/chapter-history" element={<ChapterHistory />} /> {/* Add ChapterHistory route */}
          <Route path="recruitment" element={<Recruitment />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;