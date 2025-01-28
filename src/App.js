import React from 'react';

import { AboutUs, Location, Footer, Header, SpecialMenu, BookTable } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <BookTable />
    <Location />
    <Footer />
  </div>
);

export default App;
