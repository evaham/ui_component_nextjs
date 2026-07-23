'use client';
import DataTableList from './DataTableList';
import LineGraph from './LineGraph';
import SearchTab from './SearchTab';

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
    { id: 'r1', no: 1, 지역: '서울', 규모:' 100평 이하', 점포명: 'S마트', 상품판매가: '4,480', 상품이익율: '25%', 등록일: '25-10-08', 판매가변경: '26-04-10'},
    { id: 'r2', no: 2, 지역: '인천', 규모:' 200평 이하', 점포명: '아울렛 마트', 상품판매가: '3,220', 상품이익율: '18%', 등록일: '20-10-11', 판매가변경: '26-04-20'},
    { id: 'r3', no: 3, 지역: '경기', 규모:' 300평 이하', 점포명: '롯데마트', 상품판매가: '4,480', 상품이익율: '25%', 등록일: '25-10-08', 판매가변경: '26-04-10'},
    { id: 'r4', no: 4, 지역: '서울', 규모:' 100평 이하', 점포명: 'S마트', 상품판매가: '4,480', 상품이익율: '25%', 등록일: '25-10-08', 판매가변경: '26-04-10'},
    { id: 'r5', no: 5, 지역: '인천', 규모:' 200평 이하', 점포명: '아울렛 마트', 상품판매가: '3,220', 상품이익율: '18%', 등록일: '20-10-11', 판매가변경: '26-04-20'},
    { id: 'r6', no: 6, 지역: '경기', 규모:' 300평 이하', 점포명: '롯데마트', 상품판매가: '4,480', 상품이익율: '25%', 등록일: '25-10-08', 판매가변경: '26-04-10'},
  ];



export default function LayerPopup01({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl shadow-2xl transform transition-all overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-900">
            상품 가격비교
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1 cursor-pointer" aria-label="닫기">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6 overflow-y-auto max-h-[70vh]">
          {/* 레이어팝업 */}
          <div className="w-6xl space-y-4">
            <div>
              <table className="w-full border-collapse border border-gray-400 bg-white text-sm">
                <colgroup>
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '20%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '20%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '30%' }} />
                </colgroup>
                <tbody>
                  <tr>
                    <td className="border  border-gray-300 px-4 py-2 text-center bg-zinc-100">바코드</td>
                    <td className="border  border-gray-300 px-4 py-2">88088088080080</td>
                    <td className="border  border-gray-300 px-4 py-2 text-center bg-zinc-100">우리 매입가</td>
                    <td className="border  border-gray-300 px-4 py-2 text-right">1,800</td>
                    <td rowSpan={3} className="border  border-gray-300 px-4 py-2 text-center bg-zinc-100">상품설명</td>
                    <td rowSpan={3} className="border  border-gray-300 px-4 py-2">
                      가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사
                    </td>
                  </tr>
                  <tr>
                    <td className="border  border-gray-300 px-4 py-2 text-center bg-zinc-100">상품명</td>
                    <td className="border  border-gray-300 px-4 py-2">맥스웰오리지널믹스</td>
                    <td className="border  border-gray-300 px-4 py-2 text-center bg-zinc-100">우리 판매가</td>
                    <td className="border  border-gray-300 px-4 py-2 text-right">2,500</td>
                  </tr>
                  <tr>
                    <td className="border  border-gray-300 px-4 py-2 text-center bg-zinc-100">규격</td>
                    <td className="border  border-gray-300 px-4 py-2 text-right">1,000g</td>
                    <td className="border  border-gray-300 px-4 py-2 text-center bg-zinc-100">우리 이익율</td>
                    <td className="border  border-gray-300 px-4 py-2 text-right">14%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="hidden">
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
            <div className="flex *:flex-1 gap-4 p-6 border border-zinc-300 bg-white transition-all">
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
                    <th className="p-2 text-right font-normal">상품판매가</th>
                    <th className="p-2 text-right font-normal">상품이익율</th>
                    <th className="p-2 text-right font-normal">등록일</th>
                    <th className="p-2 pr-6 text-right font-normal">판매가변경</th>
                  </tr>
                </thead>
                <DataTableList rows={rows} rowKey="id" />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
