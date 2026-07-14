"use client";
import SearchBar from "@/components/SearchBar";
import SearchTab from "@/components/SearchTab";
import DateTableList from '@/components/DateTableList';

export default function Menu01Page() {
  const rows = [
    { id: 'r1', no: 1, 바코드: '8809591316526', 상품명: <a href="#" className="text-indigo-700 overflow-hidden text-ellipsis">신라면 블랙</a>, 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
    { id: 'r2', no: 1, 바코드: '8809591316526', 상품명: <a href="#" className="text-indigo-700 overflow-hidden text-ellipsis">신라면 블랙</a>, 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
    { id: 'r3', no: 1, 바코드: '8809591316526', 상품명: <a href="#" className="text-indigo-700 overflow-hidden text-ellipsis">신라면 블랙</a>, 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
    { id: 'r4', no: 1, 바코드: '8809591316526', 상품명: <a href="#" className="text-indigo-700 overflow-hidden text-ellipsis">신라면 블랙</a>, 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
    { id: 'r5', no: 1, 바코드: '8809591316526', 상품명: <a href="#" className="text-indigo-700 overflow-hidden text-ellipsis">신라면 블랙</a>, 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
    { id: 'r6', no: 1, 바코드: '8809591316526', 상품명: <a href="#" className="text-indigo-700 overflow-hidden text-ellipsis">신라면 블랙</a>, 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},
    { id: 'r7', no: 1, 바코드: '8809591316526', 상품명: <a href="#" className="text-indigo-700 overflow-hidden text-ellipsis">신라면 블랙</a>, 취급점: '1,511', 타매장매입가: '4,480', 타매장판매가: '5,600', 타매장이익율: '20%', 타매장판매량: '150', 우리매장매입가: '5,152', 우리매장판매가: '6,440', 우리매장이익율: '20%', 우리매장판매량: '109', 판매가비교: '15.0%', 판매량비교: '27.3%'},

  ];


  return (
    <div className="flex flex-col flex-1 max-w-7xl justify-center">
      <main className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white shadow-xs">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#26499d] rounded-full"></div>
            <span className="font-bold text-zinc-900 tracking-tight">우리매장 상품 상황</span>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-1 p-6 border border-zinc-200 rounded-2xl">
              <div className="mr-auto px-3 py-1 rounded-full bg-green-200 text-sm">A. 유지</div>
              <div>
                <span className="text-6xl font-bold">187</span>개
              </div>
              <div className="text-sm">
                <span className="font-bold">전국 평균 유지</span><br />
                <span className="text-zinc-500 tracking-tight">판매량이 전국 평균과 비슷한 상품입니다. 판매 전략을 유지하세요.</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1 p-6 border border-zinc-200 rounded-2xl">
              <div className="mr-auto px-3 py-1 rounded-full bg-red-200 text-sm">B. 점검필요</div>
              <div>
                <span className="text-6xl font-bold">32</span>개
              </div>
              <div className="text-sm">
                <span className="font-bold">우리매장만 판매 저조</span><br />
                <span className="text-zinc-500 tracking-tight">전국 평균 대비 판매량이 낮은 상품입니다. 가격을 조정이 필요합니다.</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1 py-6 px-4 border border-zinc-200 rounded-2xl">
              <div className="mr-auto px-3 py-1 rounded-full bg-blue-200 text-sm">C. 강점확인</div>
              <div>
                <span className="text-6xl font-bold">13</span>개
              </div>
              <div className="text-sm"><span className="font-bold">우리매장 잘 팔림</span><br />
                <span className="text-zinc-500 tracking-tight">전국 평균 대비 판매량이 높은 상품입니다. 판매 전략을 강화하세요.</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1 p-6 border border-zinc-200 rounded-2xl">
              <div className="mr-auto px-3 py-1 rounded-full bg-zinc-200 text-sm">D. 교체검토</div>
              <div>
                <span className="text-6xl font-bold">3</span>개
              </div>
              <div className="text-sm">
                <span className="font-bold">전국 판매 저조</span>
                <br /><span className="text-zinc-500 tracking-tight">전국 평균 대비 판매량이 낮은 상품입니다. 상품교체를 추천합니다.</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 justify-center p-6 bg-zinc-50 rounded-xl text-sm">
              <div className="">
                <span className="font-bold">전월</span> 전국매장 평균 대비 <br />
                우리 매장 판매량 비교
              </div>
              <a href="#" className="text-blue-500 underline">기준 자세히 보기</a>
              <div className="text-sm">2026.5.1 ~ 2026.5.31</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 overflow-x-auto p-6 rounded-xl bg-white shadow-xs transition-all">
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
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th rowSpan="2" className="p-2 py-1 text-center font-medium text-zinc-800 bg-blue-50">No.</th>
                  <th rowSpan="2" className="p-2 py-1 text-left font-medium text-zinc-800 bg-blue-50">바코드</th>
                  <th rowSpan="2" className="p-2 py-1 text-left font-medium text-zinc-800 bg-blue-50">상품명</th>
                  <th rowSpan="2" className="p-2 py-1 text-right font-medium text-zinc-800 bg-blue-50">취급점</th>
                  <th colSpan="4" className="p-2 py-1 text-center font-medium text-zinc-800 bg-blue-50 underline-offset-4 decoration-2">타매장 평균</th>
                  <th colSpan="4" className="p-2 py-1 text-center font-medium text-zinc-800 bg-blue-100">우리 매장</th>
                  <th rowSpan="2" className="p-2 py-1 text-right font-medium text-zinc-800 bg-blue-50">판매가비교</th>
                  <th rowSpan="2" className="p-2 pr-6 py-1 text-right font-medium text-zinc-800 bg-blue-50">판매량비교</th>
                </tr>
                <tr>
                  <th className="p-2 py-1 text-right font-medium text-zinc-800 bg-blue-50">매입가</th>
                  <th className="p-2 py-1 text-right font-medium text-zinc-800 bg-blue-50">판매가</th>
                  <th className="p-2 py-1 text-right font-medium text-zinc-800 bg-blue-50">이익율</th>
                  <th className="p-2 py-1 text-right font-medium text-zinc-800 bg-blue-50">판매량</th>
                  <th className="p-2 py-1 text-right font-medium text-zinc-800 bg-blue-100">매입가</th>
                  <th className="p-2 py-1 text-right font-medium text-zinc-800 bg-blue-100">판매가</th>
                  <th className="p-2 py-1 text-right font-medium text-zinc-800 bg-blue-100">이익율</th>
                  <th className="p-2 pr-6 py-1 text-right font-medium text-zinc-800 bg-blue-100">판매량</th>
                </tr>
              </thead>
              <DateTableList rows={rows} rowKey="id" />
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}