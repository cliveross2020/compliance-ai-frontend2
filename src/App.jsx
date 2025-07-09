import React from 'react';
import ABPISearch from './components/ABPISearch';
import GlobalCodeComparator from './components/GlobalCodeComparator';
import MaterialLibrary from './components/MaterialLibrary';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div>
      <h1>Compliance AI Dashboard</h1>
      <ABPISearch />
      <GlobalCodeComparator />
      <MaterialLibrary />
      <Chatbot />
    </div>
  );
}

export default App;