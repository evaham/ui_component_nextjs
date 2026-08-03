'use client';
import React from 'react';
import SearchBar from "@/components/SearchBar";
import DataTableList from '@/components/DataTableList';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Scatter } from 'recharts';


export default function Menu05Page() {
  const rows = [
    { id: 'r1', no: 1, 바코드: '8809591316526', 상품명: '신라면 블랙', 취급매장: '1,511', 판매량: '4,480', 판매액: '5,600', 확산지역: '서울,경기,인천,대전,전북' },
    { id: 'r2', no: 2, 바코드: '8809112316526', 상품명: '신라면 레드', 취급매장: '511', 판매량: '3,230', 판매액: '4,600', 확산지역: ',인천,대전,전북,제주' },
    {}
  ];
  const data2 = [
    { name: '1주', 평균매출액: 4000, 취급매장: 3000, },
    { name: '2주', 평균매출액: 3000, 취급매장: 4400, },
    { name: '3주', 평균매출액: 2000, 취급매장: 5400, },
    { name: '4주', 평균매출액: 2780, 취급매장: 4400, },
  ];

  return (
    <div className="contents-group">
      <div className="flex items-start gap-4">
        <div className="flex-1 flex flex-col gap-4 p-6 rounded-2xl bg-white">
          <SearchBar
            searchFilters={[
              { label: '상위 100개', options: [{ value: 'top100', label: '상위 100개' }] },
              { label: '지역', options: [{ value: '', label: '전체' }, { value: 'seoul', label: '서울' }, { value: 'incheon', label: '인천' }] },
              { label: '판매구분', options: [{ value: '', label: '전체' }, { value: 'high', label: '고매출' }, { value: 'low', label: '저매출' }] }
            ]}
            centerFilters={[]}
            placeholder="바코드, 상품명"
            buttonLabel="조회"
          />
          <div className="table-container">
            <table className="table-data">
              <colgroup>
                <col style={{ width: '5%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '30%' }} />
              </colgroup>
              <thead className="sticky top-0 z-10 border-b border-zinc-200 text-white bg-[#4A5B6D]">
                <tr>
                  <th className="p-2 text-center font-normal">No.</th>
                  <th className="p-2 text-left font-normal">바코드</th>
                  <th className="p-2 text-left font-normal">상품명</th>
                  <th className="p-2 text-right font-normal">취급매장</th>
                  <th className="p-2 text-right font-normal">판매량</th>
                  <th className="p-2 text-right font-normal">판매액</th>
                  <th className="p-2 pr-6 font-normal text-left">확산지역</th>
                </tr>
              </thead>
              <DataTableList rows={rows} rowKey="id" />
            </table>
          </div>
        </div>
        {/* 그래프 정보 */}
        <div className="sticky top-0 min-w-72 min-h-64 p-6 rounded-2xl bg-white transition-all">
          <div className="flex flex-col justify-center font-semibold -mt-2 mb-2">
            <span>큰사발신라면</span>
            <span className="text-sm font-medium text-gray-500">매출,취급 매장수 추이</span>
          </div>
          <div className="w-80 flex flex-col gap-4 items-center justify-center text-xs text-gray-400">
            <ComposedChart
              responsive
              className="w-full h-50"
              data={data2}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" />
              <YAxis width="auto" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="취급매장" fill="#3b82f6" stroke="#93c5fd" />
              <Bar dataKey="평균매출액" barSize={20} fill="#3b82f6" />
            </ComposedChart>
          </div>
          <table className="w-full mt-2 border-collapse border border-gray-400 bg-white text-sm">
            <thead>
              <tr>
                <th className="border border-gray-300 px-1 py-0.5 text-center font-normal bg-zinc-100"></th>
                <th className="border border-gray-300 px-1 py-0.5 text-center font-normal bg-zinc-100">1주차</th>
                <th className="border border-gray-300 px-1 py-0.5 text-center font-normal bg-zinc-100">2주차</th>
                <th className="border border-gray-300 px-1 py-0.5 text-center font-normal bg-zinc-100">3주차</th>
                <th className="border border-gray-300 px-1 py-0.5 text-center font-normal bg-zinc-100">4주차</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border border-gray-300 px-1 py-0.5 text-center font-normal bg-zinc-100">취급매장</th>
                {data2.map((row, idx) => (
                  <td key={idx} className="border border-gray-300 px-1 py-0.5 text-right">{row.취급매장}</td>
                ))}
              </tr>
              <tr>
                <th className="border border-gray-300 px-1 py-0.5 text-center font-normal bg-zinc-100">매출액</th>
                {data2.map((row, idx) => (
                  <td key={idx} className="border border-gray-300 px-1 py-0.5 text-right">{row.평균매출액}</td>
                ))}
              </tr>
            </tbody>
          </table>


        </div>
      </div>
    </div>
  )
}