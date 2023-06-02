import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Dracomania from '../pages/Dracomania';
import Mitomania from '../pages/Mitomania';
import Naruto from '../pages/Naruto';
import Xmen from '../pages/Xmen';
import Page404 from '../pages/Page404';

export default function MyRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/dracomania" element={<Dracomania />} />
      <Route exact path="/mitomania" element={<Mitomania />} />
      <Route exact path="/naruto" element={<Naruto />} />
      <Route exact path="/xmen" element={<Xmen />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
