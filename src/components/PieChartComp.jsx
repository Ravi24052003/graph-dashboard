// src/components/PieChartComponent.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComp = ({ data }) => {
  const severityCounts = data.reduce((acc, item) => {
    const severity = item.alert.severity;
    acc[severity] = acc[severity] ? acc[severity] + 1 : 1;
    return acc;
  }, {});

  const chartData = Object.keys(severityCounts).map(key => ({ name: `Severity ${key}`, value: severityCounts[key] }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComp;
