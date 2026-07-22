'use client';

import { useState } from 'react';
import SearchTab from '@/components/SearchTab';
import SearchBar from '@/components/SearchBar';
import LayerPopup from '@/components/LayerPopup';
import DataTableList from '@/components/DataTableList';
import LineGraph from '@/components/LineGraph';
import LayerSearchPopup from '@/components/LayerSearchPopup';

export default function Menu12Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenProduct = (name) => {
    setSelectedProduct(name);
    setIsPopupOpen(true);
  };

  const renderProductLink = (name) => (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); handleOpenProduct(name); }}
      className="text-indigo-700 overflow-hidden text-ellipsis"
    >
      {name}
    </a>
  );



  const rows = [
    { id: 'r1', no: 1, 바코드: '8809591316526', 상품명: renderProductLink('신라면 블랙'), 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
    { id: 'r2', no: 2, 바코드: '8809591316526', 상품명: renderProductLink('신라면 화이트'), 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
    { id: 'r3', no: 3, 바코드: '8809591316526', 상품명: renderProductLink('신라면 블랙'), 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
    { id: 'r4', no: 4, 바코드: '8809591316526', 상품명: renderProductLink('신라면 블랙'), 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
    { id: 'r5', no: 5, 바코드: '8809591316526', 상품명: renderProductLink('신라면 블랙'), 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
    { id: 'r6', no: 6, 바코드: '8809591316526', 상품명: renderProductLink('신라면 블랙'), 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
    { id: 'r7', no: 7, 바코드: '8809591316526', 상품명: renderProductLink('신라면 블랙'), 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
  ];
  const rows2 = [
    { id: 'r1', no: 1, 지역: '서울', 규모: '100평 이하', 점포명: renderProductLink('S마트'), 상품판매가: '4,480', 상품이익율: '5,600', 등록일: '24-10-08', 판매가변경: '26-04-10', },
    { id: 'r2', no: 2, 지역: '인천', 규모: '100평 이하', 점포명: renderProductLink('YS마트'), 상품판매가: '1,480', 상품이익율: '600', 등록일: '24-10-08', 판매가변경: '26-04-10', },
    { id: 'r3', no: 3, 지역: '부산', 규모: '100평 이하', 점포명: renderProductLink('BS마트'), 상품판매가: '2,480', 상품이익율: '1,600', 등록일: '24-10-08', 판매가변경: '26-04-10', },
    { id: 'r4', no: 4, 지역: '대구', 규모: '100평 이하', 점포명: renderProductLink('DS마트'), 상품판매가: '3,480', 상품이익율: '2,600', 등록일: '24-10-08', 판매가변경: '26-04-10', },
    { id: 'r5', no: 5, 지역: '광주', 규모: '100평 이하', 점포명: renderProductLink('GS마트'), 상품판매가: '4,480', 상품이익율: '3,600', 등록일: '24-10-08', 판매가변경: '26-04-10', },
    { id: 'r6', no: 6, 지역: '대전', 규모: '100평 이하', 점포명: renderProductLink('DS마트'), 상품판매가: '5,480', 상품이익율: '4,600', 등록일: '24-10-08', 판매가변경: '26-04-10', },
    { id: 'r7', no: 7, 지역: '울산', 규모: '100평 이하', 점포명: renderProductLink('US마트'), 상품판매가: '6,480', 상품이익율: '5,600', 등록일: '24-10-08', 판매가변경: '26-04-10', },
    { id: 'r8', no: 8, 지역: '제주', 규모: '100평 이하', 점포명: renderProductLink('JS마트'), 상품판매가: '7,480', 상품이익율: '6,600', 등록일: '24-10-08', 판매가변경: '26-04-10', },
  
  ];

  return (
    <div className="flex flex-col flex-1 max-w-7xl justify-center">
      <main className="flex items-start gap-6">
        <div className="flex-1 flex flex-col gap-4 md:p-6 rounded-xl bg-white md:shadow-xs transition-all">
          <SearchTab tabs={[
            '분류별',
            '공급사별',
            '제조사별',
            '날짜별',
            '검색어'
          ]} />
          <button
            onClick={() => setIsSearchOpen(true)}
            className="md:hidden px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer"
          >
            상세검색
          </button>

          <div className="hidden md:flex h-50 bg-gray-100 border">
            차트영역
          </div>

          <div className="min-h-100 -mx-4 md:-mx-6 border-y border-zinc-100">
            <table className="table-fixed w-full border-collapse bg-white text-sm">
              <thead className="sticky top-0 z-10 border-b border-zinc-200 text-white bg-[#4A5B6D]">
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
              <DataTableList rows={rows} rowKey="id" />
            </table>
          </div>
        </div>
      </main>
        {/* 레이어팝업 */}
      <LayerPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title="상품 가격비교">
        <div className="w-6xl space-y-4">
          <div>
            <div className="grid grid-cols-6 w-full gap-px bg-gray-300 border border-gray-300 *:bg-white text-sm">
              <div className="flex items-center px-4 text-left text-gray-900">바코드</div>
              <div className="flex items-center px-4 text-left text-gray-900">88088088080080</div>
              <div className="flex items-center px-4 text-gray-500">우리 매입가</div>
              <div className="flex items-center px-4 text-gray-500">1,800</div>
              <div className="row-span-3 flex items-center px-4 text-gray-500">상품설명</div>
              <div className="row-span-3 flex items-center px-4 text-gray-500">
                가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사
              </div>
              <div className="flex items-center px-4 text-gray-500">상품명</div>
              <div className="flex items-center px-4 text-gray-500">맥스웰오리지널믹스</div>
              <div className="flex items-center px-4 text-gray-500">우리 판매가</div>
              <div className="flex items-center px-4 text-gray-500">2,500</div>
              <div className="flex items-center px-4 text-gray-500">규격</div>
              <div className="flex items-center px-4 text-gray-500">1,000g</div>
              <div className="flex items-center px-4 text-gray-500">우리 이익율</div>
              <div className="flex items-center px-4 text-gray-500">2,800</div>
            </div>
          </div>

          <div className="flex items-center">
            <SearchTab tabs={[
              '점포별',
              '지역별',
              '규모별'
            ]} />
            <div className="flex items-center gap-1 ml-auto">
              <select className="min-w-30 px-2 py-1 border rounded border-zinc-300 bg-white">
                <option value="sales">판매가</option>
                <option value="profit">이익순</option>
              </select>
              <select className="min-w-30 px-2 py-1 border rounded border-zinc-300 bg-white">
                <option value="sales">판매량</option>
                <option value="profit">이익순</option>
              </select>
              <button className="ml-auto px-4 py-1 bg-[#26499d] text-white rounded hover:bg-[#26499d] transition-colors cursor-pointer">다시조회</button>
            </div>
          </div>
          <div className="flex *:flex-1 gap-4 rounded-2xl border bg-white transition-all">
            <LineGraph />
            <LineGraph />
            <LineGraph />
          </div>
          <div className="-mx-6 border-y border-zinc-100">
            <table className="table-fixed w-full border-collapse bg-white text-sm overflow-hidden">
              <colgroup>

              </colgroup>
              <thead className="border-b border-zinc-200 text-white bg-[#4A5B6D]">
                <tr>
                  <th className="p-2 text-center font-normal">No.</th>
                  <th className="p-2 text-left font-normal">지역</th>
                  <th className="p-2 text-left font-normal">규모</th>
                  <th className="p-2 text-left font-normal">점포명</th>
                  <th className="p-2 text-right font-normal">판매가</th>
                  <th className="p-2 text-right font-normal">이익율</th>
                  <th className="p-2 text-right font-normal">등록일</th>
                  <th className="p-2 pr-6 text-right font-normal">판매가변경</th>
                </tr>
              </thead>
              <DataTableList rows={rows2} rowKey="id" />
            </table>
          </div>
        </div>
      </LayerPopup>
      {/* 상세검색 레이어팝업 */}
      <LayerSearchPopup isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  )
}