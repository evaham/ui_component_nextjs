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
      바코드: '8809591316526',
      상품명: '신라면 블랙',
      품목포지션: '1,511',
      평균판매가: '4,480',
      우리판매가: '5,600',
      판매가비교: '27.3% down'
    }
  ];


  return (
    <div className="flex flex-col flex-1 max-w-7xl justify-center">
      <main className="flex items-start gap-6">
        <div className="flex-1 flex flex-col gap-4 p-6 rounded-xl bg-white shadow-xs transition-all">
          <SearchTab tabs={[
            '분류별',
            '공급사별',
            '제조사별',
            '날짜별',
            '검색어'
          ]} />
          <SearchBar />

          <div className="flex h-50 bg-gray-100 border">
            차트영역
          </div>

          <div className="min-h-100 -mx-6 border-y border-zinc-100">
            <table className="table-fixed w-full border-collapse bg-white text-sm">
              <colgroup>
                <col style={{ width: '40px' }} />
                <col style={{ width: '120px' }} />
                <col style={{ width: '150px' }} />
              </colgroup>
              <thead className="sticky top-0 z-10 border-b border-zinc-200 text-white bg-blue-900/90">
                <tr>
                  <th className="p-2 text-center font-normal">No.</th>
                  <th className="p-2 text-left font-normal">바코드</th>
                  <th className="p-2 text-left font-normal">상품명</th>
                  <th className="p-2 text-right font-normal">품목포지션</th>
                  <th className="p-2 text-right font-normal">평균 판매가</th>
                  <th className="p-2 text-right font-normal">우리 판매가</th>
                  <th className="p-2 pr-6 text-right font-normal">판매가 비교</th>
                </tr>
              </thead>
              <DateTableList rows={rows} rowKey="id" />
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