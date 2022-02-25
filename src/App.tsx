import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
