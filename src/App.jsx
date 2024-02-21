

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/Profile';
import Documents from '../src/pages/Documents';
import AboutUs from '../src/pages/AboutUS';
import ContactUs from '../src/pages/ContactUs';
import Events from '../src/pages/Events';
import FAQ from '../src/pages/FAQ';
import Legals from '../src/pages/Legals';
import Resources from './pages/Resources';
import { PageContextProvider } from './components/Context';
import CompanyCalender from './components/Calender';
import CompanyCarousel from './components/Carousel';
import ResultsPage from './pages/ResultsPage';
import AdvancedSearch from './pages/AdvancedSearch';
import Browse from './pages/Browse';
import ChartsPage from './pages/Charts';
import LogOut from './pages/Logout';
import ErrorComponent from './pages/ErrorComponent';
import Downloads from './pages/Downloads';
import News from './pages/News';

import './App.scss';
import './index.scss';
import 'antd/dist/reset.css';
import DataSources from './pages/DataSources';

function App() {
  return (
    <PageContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="Browse" element={<Browse />} />
          <Route path="ChartsPage" element={<ChartsPage />} />
          <Route path="Results/*" element={<ResultsPage />} />
          <Route path="AdvancedSearch" element={<AdvancedSearch />} />
          <Route path="DataSources" element={<DataSources />} />
          <Route path="Downloads" element={<Downloads />} />
          <Route path="News" element={<News />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="calender" element={<CompanyCalender />} />
          <Route path="Carousel" element={<CompanyCarousel />} />
          <Route path="Documents" element={<Documents />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="Events" element={<Events />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="Legals" element={<Legals />} />
          <Route path="Resources" element={<Resources />} />
        </Route>
        <Route path="/LogOut" element={<LogOut />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </PageContextProvider>
  );
}

export default App;
