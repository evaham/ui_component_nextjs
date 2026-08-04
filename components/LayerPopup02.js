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
    { id:'r1', no: 1, 날짜: '2026-06-11 (목)', 매장매출액: 4000, 매장매출증감: '1000 up', 매장객수: '443', 매장객수증감: '30 up', },
    { id:'r2', no: 2, 날짜: '2026-06-12 (금)', 매장매출액: 3000, 매장매출증감: '500 up', 매장객수: '400', 매장객수증감: '20 up', },
    { id:'r3', no: 3, 날짜: '2026-06-13 (목)', 매장매출액: 2000, 매장매출증감: '300 down', 매장객수: '350', 매장객수증감: '10 down', },
    { id:'r4', no: 4, 날짜: '2026-06-14 (일)', 매장매출액: 2780, 매장매출증감: '200 up', 매장객수: '360', 매장객수증감: '15 up', },
  ];



export default function LayerPopup02({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="layer-popup-wrapper">
      <div className="layer-popup-backdrop" onClick={onClose}></div>
      <div className="layer-popup-card">
        <div className="layer-popup-header">
          <h3 className="layer-popup-title">일별 매출 내역</h3>
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
            <div className="relative flex *:flex-1 gap-4 p-6 border border-zinc-200 bg-zinc-50 transition-all">
              <p className="absolute top-2 left-2">샘플영역</p>
              <LineGraph />
              <LineGraph />
              <LineGraph />
            </div>
            <div className="table-data-container">
              <table className="table-data">
                <colgroup>
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '20%' }} />
                  <col style={{ width: '15%' }} />
                  <col style={{ width: '15%' }} />
                  <col style={{ width: '15%' }} />
                  <col style={{ width: '15%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th className="text-center">No.</th>
                    <th className="text-left">날짜</th>
                    <th className="text-right">매출액</th>
                    <th className="text-right">증감</th>
                    <th className="text-right">객수</th>
                    <th className="pr-6! text-right">증감</th>
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
