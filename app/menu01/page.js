"use client";
import { useState } from 'react';
import SearchBar from "@/components/SearchBar";
import SearchTab from "@/components/SearchTab";
import DataTableList from '@/components/DataTableList';
import LayerPopup from '@/components/LayerPopup';
import LineGraph from '@/components/LineGraph';

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
      <main className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 p-6 bg-white rounded-2xl">
          <div className="flex -mx-6 divide-x divide-zinc-200">
            <div className="flex-1 flex flex-col gap-1 px-6">
              <div className="flex items-center gap-2">
                <div className="relative mr-auto px-2 py-0.5 rounded bg-green-100 text-sm text-green-700 font-bold">
                  A. 유지
                </div>
                <div>
                  <span className="text-3xl font-bold text-blue-800">3,187</span>개
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <span className="font-bold">전국 평균 유지</span>
                <span className="opacity-70">판매량이 전국 평균과 비슷한 상품입니다. 판매 전략을 유지하세요.</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-1 px-6">
              <div className="flex items-center gap-2">
                <div className="relative mr-auto px-2 py-0.5 rounded bg-red-100 text-sm text-red-700 font-bold">
                  B. 점검필요
                </div>
                <div>
                  <span className="text-4xl font-bold text-blue-800">32</span>개
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <span className="font-bold">우리매장만 판매 저조</span>
                <span className="opacity-80">전국 평균 대비 판매량이 낮은 상품입니다. 가격을 조정이 필요합니다.</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1 px-6">
              <div className="flex items-center gap-2">
                <div className="mr-auto px-2 py-0.5 rounded bg-blue-100 text-sm text-blue-700 font-bold">C. 강점확인</div>
                <div>
                  <span className="text-4xl font-bold text-blue-800">13</span>개
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <span className="font-bold">우리매장 잘 팔림</span>
                <span className="opacity-80 font-light tracking-tight">전국 평균 대비 판매량이 높은 상품입니다. 판매 전략을 강화하세요.</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1 px-6">
              <div className="flex items-center gap-2">
                <div className="mr-auto px-2 py-0.5 rounded bg-zinc-100 text-sm text-zinc-700 font-bold">D. 교체검토</div>
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
          <div className="-mx-6 border-y border-zinc-100">
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
      </main>
      {/* 레이어팝업 */}
      <LayerPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title="상품 가격비교">
        <div className="w-6xl space-y-4">
          <div>
            <table className="w-full border-collapse border border-gray-400 bg-white text-sm">
              <colgroup>
                <col style={{ width: '100px' }} />
                <col style={{ width: '' }} />
                <col style={{ width: '100px' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '100px' }} />
                <col style={{ width: '20%' }} />
              </colgroup>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-4 text-left text-gray-900">바코드</td>
                  <td className="border border-gray-300 p-4 text-left text-gray-900">88088088080080</td>
                  <td className="border border-gray-300 p-4 text-gray-500">우리 매입가</td>
                  <td className="border border-gray-300 p-4 text-gray-500">1,800</td>
                  <td rowSpan={3} className="border border-gray-300 p-4 text-gray-500">상품설명</td>
                  <td rowSpan={3} className="border border-gray-300 p-4 text-gray-500">
                    가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 text-gray-500">상품명</td>
                  <td className="border border-gray-300 p-4 text-gray-500">맥스웰오리지널믹스</td>
                  <td className="border border-gray-300 p-4 text-gray-500">우리 판매가</td>
                  <td className="border border-gray-300 p-4 text-gray-500">2,500</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 text-gray-500">규격</td>
                  <td className="border border-gray-300 p-4 text-gray-500">1,000g</td>
                  <td className="border border-gray-300 p-4 text-gray-500">우리 이익율</td>
                  <td className="border border-gray-300 p-4 text-gray-500">2,800</td>
                </tr>
              </tbody>
            </table>
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
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-500">상품명</span>
            <span className="font-bold">{selectedProduct}</span>
          </div>
          <div className="flex *:flex-1 gap-4 p-6 rounded-2xl border bg-white transition-all">
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
                  <th className="p-2 py-0.5 text-center font-normal">No.</th>
                  <th className="p-2 py-0.5 text-left font-normal">지역</th>
                  <th className="p-2 py-0.5 text-left font-normal">규모</th>
                  <th className="p-2 py-0.5 text-left font-normal">점포명</th>
                  <th className="p-2 py-0.5 text-right font-normal">판매가</th>
                  <th className="p-2 py-0.5 text-right font-normal">이익율</th>
                  <th className="p-2 py-0.5 text-right font-normal">등록일</th>
                  <th className="p-2 pr-6 py-0.5 text-right font-normal">판매가변경</th>
                </tr>
              </thead>
              <DataTableList rows={rows2} rowKey="id" />
            </table>
          </div>




        </div>
      </LayerPopup>
    </div>
  );
}