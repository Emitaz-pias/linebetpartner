import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Routes that use the Layout */}
                <Route path="/" element={<Layout></Layout>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;