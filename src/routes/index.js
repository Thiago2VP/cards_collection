import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Dracomania from '../pages/Dracomania';
import Mitomania from '../pages/Mitomania';

export default function MyRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/dracomania" element={<Dracomania />} />
      <Route exact path="/mitomania" element={<Mitomania />} />
    </Routes>
  );
}
