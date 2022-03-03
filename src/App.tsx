import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage, AboutPage } from './pages';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
