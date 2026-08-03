'use client';

import SearchBar from "@/components/SearchBar";
import DataTableList from '@/components/DataTableList';
import LayerPopup02 from '@/components/LayerPopup02';
import { useState } from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Scatter } from 'recharts';


export default function Menu10Page() {
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
    { id: 'r1', no: 1, 지역: '대구', 규모: '200평 이하', 점포명: renderProductLink('대백마트'), 매출액: '94,477,960', 객수: '5,600', 객단가: '22,629', 회원매출액: '79,477,960', 회원객수: '4,800', 회원객단가: '16,566'   },
    { id: 'r2', no: 2, 지역: '인천', 규모: '200평 이하', 점포명: renderProductLink('아울렛마트'), 매출액: '83,478,8100', 객수: '2,320', 객단가: '11,334', 회원매출액: '44,137,220', 회원객수: '1,320', 회원객단가: '44,436'   },
    { id: 'r3', no: 3, 지역: '서울', 규모: '200평 이하', 점포명: renderProductLink('1q23마트'), 매출액: '74,477,960', 객수: '1,600', 객단가: '46,629', 회원매출액: '69,477,960', 회원객수: '1,400', 회원객단가: '49,566'   },
    { id: 'r4', no: 4, 지역: '부산', 규모: '200평 이하', 점포명: renderProductLink('도연이네'), 매출액: '64,477,960', 객수: '1,200', 객단가: '53,629', 회원매출액: '59,477,960', 회원객수: '1,000', 회원객단가: '59,566'   },
    { id: 'r5', no: 5, 지역: '대전', 규모: '200평 이하', 점포명: renderProductLink('동네사랑마트'), 매출액: '54,477,960', 객수: '1,000', 객단가: '54,629', 회원매출액: '49,477,960', 회원객수: '800', 회원객단가: '61,566'   },
    { id: 'r6', no: 6, 지역: '광주', 규모: '200평 이하', 점포명: renderProductLink('마스트코 마트'), 매출액: '44,477,960', 객수: '800', 객단가: '55,629', 회원매출액: '39,477,960', 회원객수: '600', 회원객단가: '65,566'   },
    { id: 'r7', no: 7, 지역: '울산', 규모: '200평 이하', 점포명: renderProductLink('에이플러스마트'), 매출액: '34,477,960', 객수: '600', 객단가: '57,629', 회원매출액: '29,477,960', 회원객수: '400', 회원객단가: '73,566'   },
    { id: 'r8', no: 8, 지역: '세종', 규모: '200평 이하', 점포명: renderProductLink('장바구니담기마트'), 매출액: '24,477,960', 객수: '400', 객단가: '61,629', 회원매출액: '19,477,960', 회원객수: '200', 회원객단가: '97,566'   },
    { id: 'r9', no: 9, 지역: '강원', 규모: '200평 이하', 점포명: renderProductLink('유한회사 투플러스유통'), 매출액: '14,477,960', 객수: '200', 객단가: '72,629', 회원매출액: '9,477,960', 회원객수: '100', 회원객단가: '94,566'   },
    { id: 'r10', no: 10, 지역: '경기', 규모: '200평 이하', 점포명: renderProductLink('케이식자재마트'), 매출액: '4,477,960', 객수: '100', 객단가: '44,629', 회원매출액: '3,477,960', 회원객수: '50', 회원객단가: '69,566'   },
    { id: 'r11', no: 11, 지역: '충북', 규모: '200평 이하', 점포명: renderProductLink('주식회사 오케이웰빙유통'), 매출액: '2,477,960', 객수: '50', 객단가: '49,629', 회원매출액: '1,477,960', 회원객수: '25', 회원객단가: '59,566'   },
    { id: 'r12', no: 12, 지역: '충남', 규모: '200평 이하', 점포명: renderProductLink('큐브파트너스 주식회사'), 매출액: '1,477,960', 객수: '25', 객단가: '59,629', 회원매출액: '777,960', 회원객수: '10', 회원객단가: '77,566'   },
    { id: 'r13', no: 13, 지역: '전북', 규모: '200평 이하', 점포명: renderProductLink('부산농축산유통센터'), 매출액: '777,960', 객수: '10', 객단가: '77,629', 회원매출액: '377,960', 회원객수: '5', 회원객단가: '75,566'   },
    { id: 'r14', no: 14, 지역: '전남', 규모: '200평 이하', 점포명: renderProductLink('유한회사 슈퍼와'), 매출액: '377,960', 객수: '5', 객단가: '75,629', 회원매출액: '177,960', 회원객수: '2', 회원객단가: '88,566'   },
    { id: 'r15', no: 15, 지역: '경북', 규모: '200평 이하', 점포명: renderProductLink('주식회사 피앤디화성'), 매출액: '177,960', 객수: '2', 객단가: '88,629', 회원매출액: '77,960', 회원객수: '1', 회원객단가: '77,566'   },
  ];
  const data2 = [
    { id:'r1', no: 1, 날짜: '2026-06-11 (목)', 매출액: 4000, 매출증감: '1000 up', 객수: '443', 객수증감: '30 up', },
    { id:'r2', no: 2, 날짜: '2026-06-12 (금)', 매출액: 3000, 매출증감: '500 up', 객수: '400', 객수증감: '20 up', },
    { id:'r3', no: 3, 날짜: '2026-06-13 (목)', 매출액: 2000, 매출증감: '300 down', 객수: '350', 객수증감: '10 down', },
    { id:'r4', no: 4, 날짜: '2026-06-14 (일)', 매출액: 2780, 매출증감: '200 up', 객수: '360', 객수증감: '15 up', },
  ];


  return (
    <div className="contents-group">
      <div className="flex items-start gap-4">
        <div className="flex-1 flex flex-col gap-4 p-6 rounded-2xl bg-white">
          <SearchBar />
          <div className="flex -mx-3">
            <table className="table-fixed w-full border-collapse rounded-lg bg-slate-100 text-sm">
              <colgroup>
                <col style={{ width: '5%' }} />
                <col style={{ width: '5%' }} />
                <col style={{ width: '8%' }} />
                <col style={{ width: '22%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
              </colgroup>
              <tbody>
                <tr className="text-blue-800 border-b border-zinc-200">
                  <td colSpan={4} className="p-2 font-bold">우리매장 매출(6/15)</td>
                  <td className="py-2 text-right font-bold">83,478,810</td>
                  <td className="py-2 text-right font-bold">2,485</td>
                  <td className="py-2 text-right font-bold">33,593</td>
                  <td className="py-2 text-right font-bold">3,450</td>
                  <td className="py-2 text-right font-bold">13,321</td>
                  <td className="p-2 text-right font-bold">123,123,123</td>
                </tr>
                <tr className="text-blue-800">
                  <td colSpan={2} className="p-2 text-left font-bold">전체</td>
                  <td className="py-2 text-left font-bold">200평이하</td>
                  <td className="py-2 text-left font-bold">평균(00개 매장)</td>
                  <td className="py-2 text-right font-bold">65,805,200</td>
                  <td className="py-2 text-right font-bold">2,895</td>
                  <td className="py-2 text-right font-bold">22,731</td>
                  <td className="py-2 text-right font-bold">60,580,200</td>
                  <td className="py-2 text-right font-bold">2,689</td>
                  <td className="p-2 text-right font-bold">22,529</td>
                </tr> 
              </tbody>
            </table>
          </div>
          <div className="table-container">
            <table className="table-data">
              <colgroup>
                <col style={{ width: '5%' }} />
                <col style={{ width: '5%' }} />
                <col style={{ width: '8%' }} />
                <col style={{ width: '22%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
              </colgroup>
              <thead>
                <tr>
                  <th className="p-2 text-center font-normal">No.</th>
                  <th className="p-2 text-left font-normal">지역</th>
                  <th className="p-2 text-left font-normal">규모</th>
                  <th className="p-2 text-left font-normal">점포명</th>
                  <th className="p-2 text-right font-normal">매출액</th>
                  <th className="p-2 text-right font-normal">객수</th>
                  <th className="p-2 text-right font-normal">객단가</th>
                  <th className="p-2 text-right font-normal">회원 매출액</th>
                  <th className="p-2 text-right font-normal">회원 객수</th>
                  <th className="p-2 pr-6 text-right font-normal">회원 객단가</th>
                </tr>
              </thead>
              <DataTableList rows={rows} rowKey="id" />
              <tfoot className="sum">
                <tr>
                  <td className="p-2 text-center font-bold"></td>
                  <td className="p-2 text-left font-bold">전체</td>
                  <td className="p-2 text-left font-bold">200평이하</td>
                  <td className="p-2 text-left font-bold">평균(00개 매장)</td>
                  <td className="p-2 text-right font-bold">65,805,200</td>
                  <td className="p-2 text-right font-bold">2,895</td>
                  <td className="p-2 text-right font-bold">22,731</td>
                  <td className="p-2 text-right font-bold">60,580,200</td>
                  <td className="p-2 text-right font-bold">2,689</td>
                  <td className="p-2 pr-6 text-right font-bold">22,529</td>
                </tr> 
              </tfoot>
            </table>
          </div>
        </div>
        {/* 그래프 정보 */}
        {/* <div className="sticky top-0 min-h-64 p-6 rounded-2xl bg-white transition-all">
          <div className="flex flex-col justify-center font-semibold -mt-2 mb-2">
            <span>대백마트</span>
            <span className="text-sm font-medium text-gray-500">일별매출 내역</span>
          </div>
          <div className="w-80 flex flex-col gap-4 items-center justify-center text-xs text-gray-400">
            <ComposedChart
              responsive
              className="w-full h-50"
              data={data2}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" />
              <YAxis width="auto" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="취급매장" fill="#3b82f6" stroke="#93c5fd" />
              <Bar dataKey="평균매출액" barSize={20} fill="#3b82f6" />
            </ComposedChart>
          </div>
          <table className="w-full mt-2 border-collapse border border-gray-400 bg-white text-sm">
            <thead>
              <tr>
                <th className="border border-gray-300 px-1 py-0.5 text-center font-normal bg-zinc-100">No</th>
                <th className="border border-gray-300 px-1 py-0.5 text-center font-normal bg-zinc-100">날짜</th>
                <th className="border border-gray-300 px-1 py-0.5 text-center font-normal bg-zinc-100">매출액</th>
                <th className="border border-gray-300 px-1 py-0.5 text-center font-normal bg-zinc-100">증감</th>
                <th className="border border-gray-300 px-1 py-0.5 text-center font-normal bg-zinc-100">객수</th>
                <th className="border border-gray-300 px-1 py-0.5 text-center font-normal bg-zinc-100">증감</th>
              </tr>
            </thead>
            <tbody>
              {data2.map((row, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-300 px-1 py-0.5 text-center">{row.no}</td>
                  <td className="border border-gray-300 px-1 py-0.5 text-center">{row.날짜}</td>
                  <td className="border border-gray-300 px-1 py-0.5 text-right">{row.매출액}</td>
                  <td className="border border-gray-300 px-1 py-0.5 text-right">{row.매출증감}</td>
                  <td className="border border-gray-300 px-1 py-0.5 text-right">{row.객수}</td>
                  <td className="border border-gray-300 px-1 py-0.5 text-right">{row.객수증감}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
      <LayerPopup02 isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  )
}