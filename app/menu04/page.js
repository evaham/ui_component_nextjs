'use client';
import React from 'react';
import SearchBar from "@/components/SearchBar";
import DataTableList from '@/components/DataTableList';
import { LineChart } from "recharts"; 
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Menu04Page() {
  const rows = [
    { id: 'r1', no: 1, 바코드: '8809591316526', 상품명: '신라면 블랙', 품목포지션: <span className="text-red-500">B 점검필요</span>, 평균매입가: '4,480', 우리매입량: '56', 우리매입가: '6,400', 차액율: <span className="text-red-500">27.3%</span> },
    { id: 'r2', no: 2, 바코드: '8801073145637', 상품명: '진라면 매운맛', 품목포지션: <span className="text-green-500">A 유지</span>, 평균매입가: '3,980', 우리매입량: '48', 우리매입가: '4,520', 차액율: <span className="">-13.6%</span> },
    { id: 'r3', no: 3, 바코드: '8801051107465', 상품명: '안성탕면', 품목포지션: <span className="text-green-500">C 강점확인</span>, 평균매입가: '3,720', 우리매입량: '42', 우리매입가: '4,120', 차액율: <span className="text-red-500">10.8%</span> },
    { id: 'r4', no: 4, 바코드: '8801043128326', 상품명: '열라면', 품목포지션: <span className="text-red-500">B 점검필요</span>, 평균매입가: '4,100', 우리매입량: '52', 우리매입가: '4,820', 차액율: <span className="text-red-500">17.6%</span> },
    { id: 'r5', no: 5, 바코드: '8801043301952', 상품명: '오징어짬뽕', 품목포지션: <span className="text-green-500">A 유지</span>, 평균매입가: '4,250', 우리매입량: '37', 우리매입가: '4,780', 차액율: <span className="text-red-500">12.5%</span> },
    { id: 'r6', no: 6, 바코드: '8801127826003', 상품명: '짜파게티', 품목포지션: <span className="text-blue-500">C 강점확인</span>, 평균매입가: '5,050', 우리매입량: '36', 우리매입가: '5,480', 차액율: <span className="text-red-500">8.5%</span> },
    { id: 'r7', no: 7, 바코드: '8801031304210', 상품명: '삼양라면', 품목포지션: <span className="text-red-500">B 점검필요</span>, 평균매입가: '3,920', 우리매입량: '40', 우리매입가: '4,280', 차액율: <span className="">-9.2%</span> },
    { id: 'r8', no: 8, 바코드: '8801043131908', 상품명: '오모리 김치찌개', 품목포지션: <span className="text-red-500">B 점검필요</span>, 평균매입가: '3,720', 우리매입량: '38', 우리매입가: '4,150', 차액율: <span className="text-red-500">11.6%</span> },
    { id: 'r9', no: 9, 바코드: '8801043109643', 상품명: '안성탕면 순한맛', 품목포지션: <span className="text-green-500">A 유지</span>, 평균매입가: '3,540', 우리매입량: '34', 우리매입가: '3,980', 차액율: <span className="text-red-500">12.4%</span> },
    { id: 'r10', no: 10, 바코드: '8801025106489', 상품명: '불닭볶음면', 품목포지션: <span className="text-blue-500">C 강점확인</span>, 평균매입가: '5,400', 우리매입량: '30', 우리매입가: '6,100', 차액율: <span className="text-red-500">13.0%</span> },
    { id: 'r11', no: 11, 바코드: '8801043280966', 상품명: '팔도비빔면', 품목포지션: <span className="text-red-500">B 점검필요</span>, 평균매입가: '4,300', 우리매입량: '44', 우리매입가: '4,920', 차액율: <span className="text-red-500">14.4%</span> },
    { id: 'r12', no: 12, 바코드: '8801043118242', 상품명: '참깨라면', 품목포지션: <span className="text-green-500">A 유지</span>, 평균매입가: '3,520', 우리매입량: '39', 우리매입가: '3,980', 차액율: <span className="text-red-500">13.1%</span> },
    { id: 'r13', no: 13, 바코드: '8801073101881', 상품명: '진짬뽕', 품목포지션: <span className="text-blue-500">C 강점확인</span>, 평균매입가: '4,250', 우리매입량: '41', 우리매입가: '4,900', 차액율: <span className="">-15.4%</span> },
    { id: 'r14', no: 14, 바코드: '8801073119144', 상품명: '불타는 라볶이', 품목포지션: <span className="text-red-500">B 점검필요</span>, 평균매입가: '4,180', 우리매입량: '43', 우리매입가: '4,760', 차액율: <span className="text-red-500">13.9%</span> },
    { id: 'r15', no: 15, 바코드: '8801043119594', 상품명: '육개장 사발면', 품목포지션: <span className="text-green-500">A 유지</span>, 평균매입가: '3,840', 우리매입량: '35', 우리매입가: '4,240', 차액율: <span className="text-red-500">10.4%</span> },
    { id: 'r16', no: 16, 바코드: '8801043301976', 상품명: '참깨라면 큰컵', 품목포지션: <span className="text-blue-500">C 강점확인</span>, 평균매입가: '3,640', 우리매입량: '37', 우리매입가: '4,100', 차액율: <span className="text-red-500">12.6%</span> },
    { id: 'r17', no: 17, 바코드: '8801073100044', 상품명: '짜장볶이', 품목포지션: <span className="text-red-500">B 점검필요</span>, 평균매입가: '3,930', 우리매입량: '36', 우리매입가: '4,390', 차액율: <span className="text-red-500">11.7%</span> },
    { id: 'r18', no: 18, 바코드: '8801043128333', 상품명: '불닭볶음면 큰컵', 품목포지션: <span className="text-green-500">A 유지</span>, 평균매입가: '4,760', 우리매입량: '38', 우리매입가: '5,370', 차액율: <span className="text-red-500">12.8%</span> },
    { id: 'r19', no: 19, 바코드: '8801073104899', 상품명: '짜파구리', 품목포지션: <span className="text-blue-500">C 강점확인</span>, 평균매입가: '4,350', 우리매입량: '40', 우리매입가: '4,870', 차액율: <span className="text-red-500">11.9%</span> },
    { id: 'r20', no: 20, 바코드: '8801073119916', 상품명: '육개장 사발면 큰컵', 품목포지션: <span className="text-green-500">A 유지</span>, 평균매입가: '3,900', 우리매입량: '34', 우리매입가: '4,340', 차액율: <span className="text-red-500">11.3%</span> },
  ];
  const data2 = [
    { name: '1일', 우리매출: 4000, 전국200평이하: 3000, 인천200평이하: 3400 },
    { name: '2일', 우리매출: 3000, 전국200평이하: 4400, 인천200평이하: 4400 },
    { name: '3일', 우리매출: 2000, 전국200평이하: 5400, 인천200평이하: 2400 },
    { name: '4일', 우리매출: 2780, 전국200평이하: 4400, 인천200평이하: 1400 },
    { name: '5일', 우리매출: 1890, 전국200평이하: 2400, 인천200평이하: 3400 },
    { name: '6일', 우리매출: 2390, 전국200평이하: 3400, 인천200평이하: 1400 },
    { name: '7일', 우리매출: 4490, 전국200평이하: 3400, 인천200평이하: 2400 },
  ];



  return (
    <div className="flex flex-col flex-1 max-w-7xl justify-center">
      <div className="flex items-start gap-4">
        <div className="flex-1 flex flex-col gap-4 p-6 rounded-2xl bg-white">
          <SearchBar
            searchFilters={[
              { label: '지역', options: [{ value: '', label: '전체' }, { value: 'seoul', label: '서울' }, { value: 'busan', label: '부산' }] },
              { label: '규모', options: [{ value: '', label: '전체' }, { value: 'small', label: '200평 이하' }, { value: 'large', label: '200평 이상' }] },
              { label: '정렬', options: [{ value: 'position', label: '포지션순' }, { value: 'sales', label: '매출순' }] }
            ]}
            centerFilters={[]}
            placeholder="바코드, 상품명"
            buttonLabel="조회"
          />

          <div className="min-h-100 -mx-6 border-y border-zinc-100 bg-black/1">
            <table className="table-fixed w-full border-collapse bg-white text-sm">
              <colgroup>
                <col style={{ width: '40px' }} />
                <col style={{ width: '120px' }} />
                <col style={{ width: '200px' }} />
                <col style={{ width: '120px' }} />
                <col style={{ width: '90px' }} />
                <col style={{ width: '90px' }} />
                <col style={{ width: '90px' }} />
                <col style={{ width: '90px' }} />
              </colgroup>
              <thead className="sticky top-0 z-10 border-b border-zinc-200 text-white bg-[#4A5B6D]">
                <tr>
                  <th className="p-2 text-center font-normal">No.</th>
                  <th className="p-2 text-left font-normal">바코드</th>
                  <th className="p-2 text-left font-normal">상품명</th>
                  <th className="p-2 text-left font-normal">품목포지션</th>
                  <th className="p-2 text-right font-normal">평균매입가</th>
                  <th className="p-2 text-right font-normal">우리매입량</th>
                  <th className="p-2 text-right font-normal">우리매입가</th>
                  <th className="p-2 pr-6 text-right font-normal">차액율</th>
                </tr>
              </thead>
              <DataTableList rows={rows} rowKey="id" />
            </table>
          </div>
        </div>
        {/* 그래프 정보 */}
        <div className="sticky top-0 min-w-72 min-h-64 p-6 rounded-2xl bg-white transition-all">
          <div className="flex flex-col justify-center font-semibold -mt-2 mb-2">
            <span>농심바나나킥</span>
            <span className="text-sm font-medium text-gray-500">6개월 매입단가 추이</span>
          </div>
          <div className="w-80 h-50 flex items-center justify-center text-xs text-gray-400">
            <ResponsiveContainer>
              <LineChart data={data2}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Tooltip />
                <Line type="monotone" dataKey="우리매출" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="전국200평이하" stroke="#93c5fd" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}