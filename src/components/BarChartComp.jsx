// src/components/BarChartComponent.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComp = ({ data }) => {
  const categories = data.reduce((acc, item) => {
    const category = item.alert.category;
    acc[category] = acc[category] ? acc[category] + 1 : 1;
    return acc;
  }, {});

  console.log("categories ->", categories);

  const chartData = Object.keys(categories).map(key => ({ name: key, count: categories[key] }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComp;
