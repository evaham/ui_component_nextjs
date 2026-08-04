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
    <div className="layer-popup-wrapper">
      <div className="layer-popup-backdrop" onClick={onClose}></div>
      <div className="layer-popup-card">
        <div className="layer-popup-header">
          <h3 className="layer-popup-title">
            상품 가격비교
          </h3>
          <button onClick={onClose} className="layer-popup-close" aria-label="닫기">
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="layer-popup-body">
          {/* 레이어팝업 */}
          <div className="w-6xl space-y-4">
            <div>
              <table className="table-base">
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
                    <th>바코드</th>
                    <td>88088088080080</td>
                    <th>우리 매입가</th>
                    <td className="text-right">1,800</td>
                    <th rowSpan={3}>상품설명</th>
                    <td rowSpan={3}>
                      가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사
                    </td>
                  </tr>
                  <tr>
                    <th>상품명</th>
                    <td>맥스웰오리지널믹스</td>
                    <th>우리 판매가</th>
                    <td className="text-right">2,500</td>
                  </tr>
                  <tr>
                    <th>규격</th>
                    <td className="text-right">1,000g</td>
                    <th>우리 이익율</th>
                    <td className="text-right">14%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <SearchTab tabs={[
              '점포별',
              '지역별',
              '규모별'
            ]} />
            <div className="flex items-center gap-1 mt-2">
              <select className="select-item">
                <option value="sales">판매가</option>
                <option value="profit">이익순</option>
              </select>
              <select className="select-item">
                <option value="sales">판매량</option>
                <option value="profit">이익순</option>
              </select>
              <button className="primary-button">다시조회</button>
            </div>
            <div className="relative flex *:flex-1 gap-4 p-6 border border-zinc-300 bg-white transition-all">
              <p className="absolute top-2 left-2">샘플영역</p>
              <LineGraph />
              <LineGraph />
              <LineGraph />
            </div>
            <div className="table-data-container">
              <table className="table-data">
                <colgroup>

                </colgroup>
                <thead>
                  <tr>
                    <th className="text-center">No.</th>
                    <th className="text-left">지역</th>
                    <th className="text-left">규모</th>
                    <th className="text-left">점포명</th>
                    <th className="text-right">상품판매가</th>
                    <th className="text-right">상품이익율</th>
                    <th className="text-right">등록일</th>
                    <th className="pr-6! text-right">판매가변경</th>
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
