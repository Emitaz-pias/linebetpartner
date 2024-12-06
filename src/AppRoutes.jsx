import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Homepage from './pages/homepage/Homepage';
import RegistrationForm from './components/registrationForm/RegistrationForm';
import Login from './components/loginForm/LoginForm';
import ContactsPage from './pages/contacts/ContactsPage';
import FAQ from './components/faq/FAQ';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Routes that use the Layout */}
                <Route path="/" element={<Layout><Homepage/></Layout>} />
                <Route path="/sign-up" element={<Layout><RegistrationForm/></Layout>} />
                <Route path="/sign-in" element={<Layout><Login/></Layout>} />
                <Route path="/contacts" element={<Layout><ContactsPage/></Layout>} />
                <Route path="/faq" element={<Layout><FAQ/></Layout>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;