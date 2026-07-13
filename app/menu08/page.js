'use client';

import { useState } from 'react';
import SearchTab from '@/components/SearchTab';
import SearchBar from '@/components/SearchBar';
import LayerPopup from '@/components/LayerPopup';
import DateTableList from '@/components/DateTableList';

export default function Menu08Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const rows = [
    {
      id: 'r1',
      no: 1,
      barcode: '8809591316526',
      name: '신라면 블랙',
      position: '1,511',
      avgPrice: '4,480',
      ourPrice: '5,600',
      comparison: '27.3% down'
    }
  ];

  const renderRow = (row, idx) => (
    <tr key={row.id ?? idx} className="hover:bg-zinc-50">
      <td className="px-1 py-2 text-center">{row.no}</td>
      <td className="px-1 py-2 text-left">{row.barcode}</td>
      <td className="px-1 py-2 text-left">
        <button
          onClick={() => setIsPopupOpen(true)}
          className="text-blue-700 hover:underline text-left"
        >
          {row.name}
        </button>
      </td>
      <td className="px-1 py-2 text-right">{row.position}</td>
      <td className="px-1 py-2 text-right">{row.avgPrice}</td>
      <td className="px-1 py-2 text-right">{row.ourPrice}</td>
      <td className="px-1 py-2 text-right">{row.comparison}</td>
    </tr>
  );

  return (
    <div className="flex flex-col flex-1 max-w-7xl justify-center">
      <main className="flex items-start gap-6">
        <div className="flex-1 flex flex-col gap-4 p-6 border border-zinc-200 rounded-xl bg-white shadow-sm">
          <div>
            <SearchTab tabs={[
              '전체',
              '품목별',
              '매출별',
              '재고별',
              '기타'
            ]} />
            <SearchBar />
          </div>

          <div className="flex h-50 bg-gray-100 border">
            차트영역
          </div>

          <div className="overflow-y-auto h-150 border-y border-zinc-200">
            <table className="table-fixed w-full border-collapse bg-white text-sm">
              <colgroup>
                <col style={{ width: '40px' }} />
                <col style={{ width: '120px' }} />
                <col style={{ width: '150px' }} />
              </colgroup>
              <thead className="bg-zinc-50 border-b border-zinc-200 sticky top-0 z-10">
                <tr>
                  <th className="px-1 py-2 text-center font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">No.</th>
                  <th className="px-1 py-2 text-left font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">바코드</th>
                  <th className="px-1 py-2 text-left font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">상품명</th>
                  <th className="px-1 py-2 text-right font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">품목포지션</th>
                  <th className="px-1 py-2 text-right font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">평균 판매가</th>
                  <th className="px-1 py-2 text-right font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">우리 판매가</th>
                  <th className="px-1 py-2 text-right font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">판매가 비교</th>
                </tr>
              </thead>
              <DateTableList rows={rows} renderRow={renderRow} rowKey="id" />
            </table>
          </div>
        </div>
      </main>
      <LayerPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        title="상품 상세 정보"
      >
        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-zinc-500">상품명</span>
            <span className="font-bold">신라면 블랙</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-zinc-500">바코드</span>
            <span>8809591316526</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-zinc-500">우리 판매가</span>
            <span className="text-blue-600 font-bold">5,600원</span>
          </div>
          <p className="text-sm text-zinc-500 pt-2">
            ※ 해당 상품의 상세 매출 분석 및 가격 추이를 확인하실 수 있습니다.
          </p>
        </div>
      </LayerPopup>
    </div>
  )
}