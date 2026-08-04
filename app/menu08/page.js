'use client';

import { useState } from 'react';
import SearchTab from '@/components/SearchTab';
import SearchBar from '@/components/SearchBar';
import LayerPopup from '@/components/LayerPopup';
import DataTableList from '@/components/DataTableList';
import LineGraph from '@/components/LineGraph';
import LayerPopup01 from '@/components/LayerPopup01';

export default function Menu08Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
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
    <div className="contents-group">
      <div className="contents-col">
        <div className="card-panel">
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

          <div className="table-data-container">
            <table className="table-data">
              <colgroup>
                <col style={{ width: '40px' }} />
                <col style={{ width: '120px' }} />
                <col style={{ width: '150px' }} />
              </colgroup>
              <thead>
                <tr>
                  <th className="text-center">No.</th>
                  <th className="text-left">바코드</th>
                  <th className="text-left">상품명</th>
                  <th className="text-right">취급점</th>
                  <th className="text-right">평균매입가</th>
                  <th className="text-right">우리매입가</th>
                  <th className="text-right">평균판매가</th>
                  <th className="text-right">우리판매가</th>
                  <th className="text-right">최종매입</th>
                  <th className="pr-6! text-right">판매가변경</th>
                </tr>
              </thead>
              <DataTableList rows={rows} rowKey="id" />
            </table>
          </div>
        </div>
      </div>
      <LayerPopup01 isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  )
}  