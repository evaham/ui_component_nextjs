'use client';

import React from 'react';

export default function DateTableList({ rows = [], renderRow, rowKey = 'id' }) {
  const hasRows = Array.isArray(rows) && rows.length > 0;

  const defaultRender = (row, idx) => (
    <tr key={row[rowKey] ?? idx} className="hover:bg-zinc-50">
      <td className="px-1 py-2 text-center">{row.no ?? idx + 1}</td>
      <td className="px-1 py-2 text-left">{row.barcode}</td>
      <td className="px-1 py-2 text-left">{row.name}</td>
      <td className="px-1 py-2 text-right">{row.position}</td>
      <td className="px-1 py-2 text-right">{row.avgPrice}</td>
      <td className="px-1 py-2 text-right">{row.ourPrice}</td>
      <td className="px-1 py-2 text-right">{row.comparison}</td>
    </tr>
  );

  return (
    <tbody className="divide-y divide-zinc-200">
      {!hasRows && (
        <tr className="hidden">
          <td colSpan="14" className="px-4 py-12 text-center text-zinc-400">데이터를 준비 중입니다.</td>
        </tr>
      )}

      {hasRows && rows.map((row, idx) => (
        renderRow ? renderRow(row, idx) : defaultRender(row, idx)
      ))}
    </tbody>
  );
}