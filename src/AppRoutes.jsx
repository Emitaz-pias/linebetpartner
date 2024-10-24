import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Homepage from './components/pages/homepage/Homepage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Routes that use the Layout */}
                <Route path="/" element={<Layout><Homepage/></Layout>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;