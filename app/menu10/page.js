'use client';

import SearchBar from "@/components/SearchBar";
import DateTableList from '@/components/DateTableList';

export default function Menu10Page() {
  const rows = [
    { id: 'r1', no: 1, 지역: '대구', 규모: '200평 이하', 점포명: '대백마트', 매출액: '94,477,960', 객수: '5,600', 객단가: '22,629', 회원매출액: '79,477,960', 회원객수: '4,800', 회원객단가: '16,566'   },
    { id: 'r2', no: 2, 지역: '인천', 규모: '200평 이하', 점포명: '아울렛마트', 매출액: '83,478,8100', 객수: '2,320', 객단가: '11,334', 회원매출액: '44,137,220', 회원객수: '1,320', 회원객단가: '44,436'   },
    { id: 'r3', no: 3, 지역: '서울', 규모: '200평 이하', 점포명: '1q23마트', 매출액: '74,477,960', 객수: '1,600', 객단가: '46,629', 회원매출액: '69,477,960', 회원객수: '1,400', 회원객단가: '49,566'   },
    { id: 'r4', no: 4, 지역: '부산', 규모: '200평 이하', 점포명: '도연이네', 매출액: '64,477,960', 객수: '1,200', 객단가: '53,629', 회원매출액: '59,477,960', 회원객수: '1,000', 회원객단가: '59,566'   },
    { id: 'r5', no: 5, 지역: '대전', 규모: '200평 이하', 점포명: '동네사랑마트', 매출액: '54,477,960', 객수: '1,000', 객단가: '54,629', 회원매출액: '49,477,960', 회원객수: '800', 회원객단가: '61,566'   },
    { id: 'r6', no: 6, 지역: '광주', 규모: '200평 이하', 점포명: '마스트코 마트', 매출액: '44,477,960', 객수: '800', 객단가: '55,629', 회원매출액: '39,477,960', 회원객수: '600', 회원객단가: '65,566'   },
    { id: 'r7', no: 7, 지역: '울산', 규모: '200평 이하', 점포명: '에이플러스마트', 매출액: '34,477,960', 객수: '600', 객단가: '57,629', 회원매출액: '29,477,960', 회원객수: '400', 회원객단가: '73,566'   },
    { id: 'r8', no: 8, 지역: '세종', 규모: '200평 이하', 점포명: '장바구니담기마트', 매출액: '24,477,960', 객수: '400', 객단가: '61,629', 회원매출액: '19,477,960', 회원객수: '200', 회원객단가: '97,566'   },
    { id: 'r9', no: 9, 지역: '강원', 규모: '200평 이하', 점포명: '유한회사 투플러스유통', 매출액: '14,477,960', 객수: '200', 객단가: '72,629', 회원매출액: '9,477,960', 회원객수: '100', 회원객단가: '94,566'   },
    { id: 'r10', no: 10, 지역: '경기', 규모: '200평 이하', 점포명: '케이식자재마트', 매출액: '4,477,960', 객수: '100', 객단가: '44,629', 회원매출액: '3,477,960', 회원객수: '50', 회원객단가: '69,566'   },
    { id: 'r11', no: 11, 지역: '충북', 규모: '200평 이하', 점포명: '주식회사 오케이웰빙유통', 매출액: '2,477,960', 객수: '50', 객단가: '49,629', 회원매출액: '1,477,960', 회원객수: '25', 회원객단가: '59,566'   },
    { id: 'r12', no: 12, 지역: '충남', 규모: '200평 이하', 점포명: '큐브파트너스 주식회사', 매출액: '1,477,960', 객수: '25', 객단가: '59,629', 회원매출액: '777,960', 회원객수: '10', 회원객단가: '77,566'   },
    { id: 'r13', no: 13, 지역: '전북', 규모: '200평 이하', 점포명: '부산농축산유통센터', 매출액: '777,960', 객수: '10', 객단가: '77,629', 회원매출액: '377,960', 회원객수: '5', 회원객단가: '75,566'   },
    { id: 'r14', no: 14, 지역: '전남', 규모: '200평 이하', 점포명: '유한회사 슈퍼와', 매출액: '377,960', 객수: '5', 객단가: '75,629', 회원매출액: '177,960', 회원객수: '2', 회원객단가: '88,566'   },
    { id: 'r15', no: 15, 지역: '경북', 규모: '200평 이하', 점포명: '주식회사 피앤디화성', 매출액: '177,960', 객수: '2', 객단가: '88,629', 회원매출액: '77,960', 회원객수: '1', 회원객단가: '77,566'   },
  ];

  return (
    <div className="flex flex-col flex-1 max-w-7xl justify-center">
      <main className="flex items-start gap-6">
        <div className="flex-1 flex flex-col gap-4 p-6 rounded-xl bg-white">
          <SearchBar />
          <div className="min-h-150 -mx-6 border-y border-zinc-100">
            <table className="table-fixed w-full border-collapse bg-white text-sm">
              <colgroup>
                <col style={{ width: '40px' }} />
                <col style={{ width: '60px' }} />
                <col style={{ width: '100px' }} />
                <col style={{ width: '200px' }} />
              </colgroup>
              <thead className="sticky top-0 z-10 border-b border-zinc-200 text-white bg-[#4A5B6D]">
                <tr className="bg-[#26499D]">
                  <td className="p-2 text-center font-normal"></td>
                  <td className="p-2 text-left font-normal">전체</td>
                  <td className="p-2 text-left font-normal">200평이하</td>
                  <td className="p-2 text-left font-normal">평균(00개 매장)</td>
                  <td className="p-2 text-right font-normal">65,805,200</td>
                  <td className="p-2 text-right font-normal">2,895</td>
                  <td className="p-2 text-right font-normal">22,731</td>
                  <td className="p-2 text-right font-normal">60,580,200</td>
                  <td className="p-2 text-right font-normal">2,689</td>
                  <td className="p-2 pr-6 text-right font-normal">22,529</td>
                </tr> 
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
                <tr className="bg-blue-100 text-zinc-900">
                  <th className="p-2 text-center font-normal"></th>
                  <th colSpan={3} className="p-2 text-left font-normal">우리매장 매출(6/15)</th>
                  <th className="p-2 text-right font-normal">83,478,810</th>
                  <th className="p-2 text-right font-normal">2,485</th>
                  <th className="p-2 text-right font-normal">33,593</th>
                  <th className="p-2 text-right font-normal">3,450</th>
                  <th className="p-2 text-right font-normal">13,321</th>
                  <th className="p-2 pr-6 text-right font-normal">123,123,123</th>
                </tr>
              </thead>
              <DateTableList rows={rows} rowKey="id" />
              <tfoot className="sticky top-0 z-10 border-b border-zinc-200 text-white bg-[#26499D]">
                <tr>
                  <td className="p-2 text-center font-normal"></td>
                  <td className="p-2 text-left font-normal">전체</td>
                  <td className="p-2 text-left font-normal">200평이하</td>
                  <td className="p-2 text-left font-normal">평균(00개 매장)</td>
                  <td className="p-2 text-right font-normal">65,805,200</td>
                  <td className="p-2 text-right font-normal">2,895</td>
                  <td className="p-2 text-right font-normal">22,731</td>
                  <td className="p-2 text-right font-normal">60,580,200</td>
                  <td className="p-2 text-right font-normal">2,689</td>
                  <td className="p-2 pr-6 text-right font-normal">22,529</td>
                </tr> 
              </tfoot>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}