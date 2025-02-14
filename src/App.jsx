
// App.jsx, the main component of the app

// Imports for App.jsx
// BrowserRouter for routing in single page application, and views for the 'pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import NameInfoView from './views/NameInfoView'
import HealthInfoView from './views/HealthInfoView'
import SummaryView from './views/SummaryView'
import './App.css'

/**
 * The main entry point for the application.
 * 
 * @returns {JSX.Element} The JSX elements for the application, including the views, and routes.
 */
function App() {
  // Allows routing throughout the entire application for url based navigation
  return (
    // Different routes for each view, first view is the NameInfoView
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<NameInfoView />} />
        <Route path="/healthinfoview" element={<HealthInfoView />} />
        <Route path="/summaryview" element={<SummaryView />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;