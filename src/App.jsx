import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegisterPage } from './pages/TempPage';
import { LoginPage } from './pages/loginPage';
import { SearchPage } from './pages/SearchPage';
import { Navigate } from 'react-router-dom';
// import { useAuthContext } from './context/AuthContext'; 

const LandingRoute = () => {
    // const { isAuthenticated } = useAuthContext(); // To be built later
    
    // If they are logged in, kick them straight to the main app
    if (false) {
        return <Navigate to="/search" replace />;
    }
    console.log("Here");
    // Otherwise, show them the Register/Login page
    return <LoginPage />;
};

function App() {
  return (
    <BrowserRouter>
        <Routes>
            {/* Make Auth the absolute default landing page */}
            <Route path="/" element={<LandingRoute />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* Move the main application to a secondary route */}
            <Route path="/search" element={<SearchPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;