"use client";
import { useState } from 'react';
import SearchBar from "@/components/SearchBar";
import SearchTab from "@/components/SearchTab";
import DataTableList from '@/components/DataTableList';
import LayerPopup01 from '@/components/LayerPopup01';

export default function Menu01Page() {
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
    { id: 'r1', no: 1, 바코드: '8809591316526', 상품명: renderProductLink('신라면 블랙'), 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
    { id: 'r2', no: 2, 바코드: '8809591316526', 상품명: renderProductLink('신라면 화이트'), 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
    { id: 'r3', no: 3, 바코드: '8809591316526', 상품명: renderProductLink('신라면 블랙'), 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
    { id: 'r4', no: 4, 바코드: '8809591316526', 상품명: renderProductLink('신라면 블랙'), 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
    { id: 'r5', no: 5, 바코드: '8809591316526', 상품명: renderProductLink('신라면 블랙'), 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
    { id: 'r6', no: 6, 바코드: '8809591316526', 상품명: renderProductLink('신라면 블랙'), 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
    { id: 'r7', no: 7, 바코드: '8809591316526', 상품명: renderProductLink('신라면 블랙'), 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
  ];

  return (
    <div className="contents-group">
      <div className="flex flex-col gap-4">
        <div className="card-pannel">
          <div className="product-container">
            <div className="product-group">
              <div className="product-header">
                <div className="product-tag bg-green-100 text-green-700">A. 유지</div>
                <div>
                  <span className="text-3xl font-bold text-blue-800">3,187</span>개
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <span className="font-bold">전국 평균 유지</span>
                <span className="opacity-70">판매량이 전국 평균과 비슷한 상품입니다. 판매 전략을 유지하세요.</span>
              </div>
            </div>
            <div className="product-group">
              <div className="product-header">
                <div className="product-tag bg-red-100 text-red-700">B. 점검필요</div>
                <div>
                  <span className="text-4xl font-bold text-blue-800">32</span>개
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <span className="font-bold">우리매장만 판매 저조</span>
                <span className="opacity-80">전국 평균 대비 판매량이 낮은 상품입니다. 가격을 조정이 필요합니다.</span>
              </div>
            </div>
            <div className="product-group">
              <div className="product-header">
                <div className="product-tag bg-blue-100 text-blue-700">C. 강점확인</div>
                <div>
                  <span className="text-4xl font-bold text-blue-800">13</span>개
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <span className="font-bold">우리매장 잘 팔림</span>
                <span className="opacity-80 font-light tracking-tight">전국 평균 대비 판매량이 높은 상품입니다. 판매 전략을 강화하세요.</span>
              </div>
            </div>
            <div className="product-group">
              <div className="product-header">
                <div className="product-tag bg-zinc-100 text-zinc-700">D. 교체검토</div>
                <div>
                  <span className="text-4xl font-bold text-blue-800">3</span>개
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <span className="font-bold">전국 판매 저조</span>
                <span className="opacity-80 font-light tracking-tight">전국 평균 대비 판매량이 낮은 상품입니다. 상품교체를 추천합니다.</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center px-6 text-sm">
              <div className="">
                <span className="font-bold">전월</span> 전국매장 평균 대비 <br />
                우리 매장 판매량 비교
              </div>
              <a href="#" className="mx-auto text-blue-800 underline">기준 자세히 보기</a>
              <div className="text-sm">2026.5.1 ~ 2026.5.31</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white transition-all">
          <SearchTab tabs={[
            '전체',
            'A. 유지',
            'B. 점검필요',
            'C. 강점확인',
            'D. 교체검토'
          ]} />
          <SearchBar
            searchFilters={[
              { label: '상위 100개', options: [{ value: 'top100', label: '상위 100개' }] },
              { label: '지역', options: [{ value: '', label: '지역' }, { value: 'seoul', label: '서울' }, { value: 'busan', label: '부산' }] },
              { label: '규모', options: [{ value: '', label: '규모' }, { value: 'small', label: '200평 이하' }, { value: 'large', label: '200평 이상' }] },
              { label: '정렬', options: [{ value: 'sales', label: '정렬' }, { value: 'profit', label: '이익순' }] }
            ]}
            centerFilters={[
              { label: '대분류', options: [{ value: '', label: '대분류' }] },
              { label: '중분류', options: [{ value: '', label: '중분류' }] },
              { label: '소분류', options: [{ value: '', label: '소분류' }] },
              { label: '판매가 10% 이상 차이', options: [{ value: '', label: '판매가 10% 이상 차이' }] }
            ]}
            searchGroupLabel1="검색그룹명1"
            searchGroupLabel2="검색그룹명2"
          />
          <div className="min-h-100 -mx-6 border-y border-zinc-100 bg-black/1">
            <table className="table-fixed w-full border-collapse bg-white text-sm overflow-hidden">
              <colgroup>
                <col style={{ width: '40px' }} />
                <col style={{ width: '120px' }} />
                <col style={{ width: '200px' }} />
                <col style={{ width: '80px' }} />
                <col style={{ width: '80px' }} />
                <col style={{ width: '80px' }} />
                <col style={{ width: '80px' }} />
                <col style={{ width: '80px' }} />
                <col style={{ width: '80px' }} />
                <col style={{ width: '80px' }} />
                <col style={{ width: '80px' }} />
              </colgroup>
              <thead className="border-b border-zinc-200 text-white bg-[#4A5B6D]">
                <tr>
                  <th rowSpan="2" className="p-2 py-0.5 text-center font-normal">No.</th>
                  <th rowSpan="2" className="p-2 py-0.5 text-left font-normal">바코드</th>
                  <th rowSpan="2" className="p-2 py-0.5 text-left font-normal">상품명</th>
                  <th rowSpan="2" className="p-2 py-0.5 text-right font-normal">취급점</th>
                  <th colSpan="4" className="p-2 py-0.5 text-center font-normal">타매장 평균</th>
                  <th colSpan="4" className="p-2 py-0.5 text-center font-normal">우리 매장</th>
                  <th rowSpan="2" className="p-2 py-0.5 text-right font-normal">판매가비교</th>
                  <th rowSpan="2" className="p-2 pr-6 py-0.5 text-right font-normal">판매량비교</th>
                </tr>
                <tr>
                  <th className="p-2 py-0.5 text-right font-normal">매입가</th>
                  <th className="p-2 py-0.5 text-right font-normal">판매가</th>
                  <th className="p-2 py-0.5 text-right font-normal">이익율</th>
                  <th className="p-2 py-0.5 text-right font-normal">판매량</th>
                  <th className="p-2 py-0.5 text-right font-normal">매입가</th>
                  <th className="p-2 py-0.5 text-right font-normal">판매가</th>
                  <th className="p-2 py-0.5 text-right font-normal">이익율</th>
                  <th className="p-2 pr-6 py-0.5 text-right font-normal">판매량</th>
                </tr>
              </thead>
              <DataTableList rows={rows} rowKey="id" />
            </table>
          </div>
        </div>
      </div>
      <LayerPopup01 isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title="상품 가격비교" />
    </div>
  );
}