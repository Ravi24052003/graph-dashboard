// src/App.js
import React from 'react';
import LineChartComp from './components/LineChartComp';
import BarChartComp from './components/BarChartComp';
import PieChartComp from './components/PieChartComp';
import { data } from './data';

const App = () => {
  return (
    <div className="dark bg-gray-900 text-white min-h-screen p-4">

      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl mb-2">Flow ID over Time</h2>
          <LineChartComp data={data} />
        </div>

        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl mb-2">Alert Categories</h2>
          <BarChartComp data={data} />
        </div>

        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl mb-2">Severity Distribution</h2>
          <PieChartComp data={data} />
        </div>
      </div>
    </div>
  );
};

export default App;
