'use client';
import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function LineGraph() {
  const data = [
    { name: '1일', 우리매출: 4000, 전국200평이하: 3000, 인천200평이하: 3400 },
    { name: '2일', 우리매출: 3000, 전국200평이하: 4400, 인천200평이하: 4400 },
    { name: '3일', 우리매출: 2000, 전국200평이하: 5400, 인천200평이하: 2400 },
    { name: '4일', 우리매출: 2780, 전국200평이하: 4400, 인천200평이하: 1400 },
    { name: '5일', 우리매출: 1890, 전국200평이하: 2400, 인천200평이하: 3400 },
    { name: '6일', 우리매출: 2390, 전국200평이하: 3400, 인천200평이하: 1400 },
    { name: '7일', 우리매출: 4490, 전국200평이하: 3400, 인천200평이하: 2400 },
  ];

  return (
    <div className="min-h-64 p-6 rounded-2xl bg-white transition-all">
      <div className="flex items-center text-lg font-semibold -mt-2 mb-2">
        최근 일주일 매출
      </div>
      <div className="h-50 flex items-center justify-center text-sm text-gray-400">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="우리매출" stroke="#3b82f6" strokeWidth={2} />
          <Line type="monotone" dataKey="전국200평이하" stroke="#93c5fd" strokeWidth={2} />
          <Line type="monotone" dataKey="인천200평이하" stroke="#38bdf8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}