import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/Profile';
import AboutUs from '../src/pages/AboutUS';
import Contact from '../src/pages/Contact';
import Resources from '../src/pages/Resources';
import Events from '../src/pages/Events';
import FAQ from '../src/pages/FAQ';
import Documents from '../src/pages/Documents';
import { PageContextProvider } from './components/Context';
import CompanyCalender from './components/Calender';
import CompanyCarousel from './components/Carousel';
import ResultsPage from './pages/ResultsPage';
import AdvancedSearch from './pages/AdvancedSearch';
import Browse from './pages/Browse';
import ChartsPage from './pages/Charts';
import LogOut from './pages/Logout';
import ErrorComponent from './pages/ErrorComponent';
import Downloads from './src/pages/Downloads';
import News from './src/pages/News';

import './App.scss';
import './index.scss';
import 'antd/dist/reset.css';

function App() {
  return (
    <PageContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomePage />} />
          <Route path="Browse" element={<Browse />} />
          <Route path="ChartsPage" element={<ChartsPage />} />
          <Route path="Results" element={<ResultsPage />} />
          <Route path="AdvancedSearch" element={<AdvancedSearch />} />
          <Route path="Downloads" element={<Downloads />} />
          <Route path="News" element={<News />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="calender" element={<CompanyCalender />} />
          <Route path="Carousel" element={<CompanyCarousel />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Resources" element={<Resources />} />
          <Route path="Events" element={<Events />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="Documents" element={<Documents />} />
        </Route>
        <Route path="/LogOut" element={<LogOut />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </PageContextProvider>
  );
}

export default App;
