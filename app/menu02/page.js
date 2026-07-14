import DateTableList from "@/components/DateTableList";
import SearchBar from "@/components/SearchBar";


export default function Menu02Page() {
  const rows = [
    { id: 'r1', no: 1, 바코드: '8809591316526', 상품명: '신라면 블랙', 품목포지션: <span className="text-red-500">B. 점검필요</span>, 평균판매가: '4,480', 우리판매가: '5,600', 판매가비교: '20%'},
    { id: 'r2', no: 2, 바코드: '8809591316526', 상품명: '신라면 블랙', 품목포지션: <span className="text-green-600">A. 유지</span>, 평균판매가: '4,480', 우리판매가: '5,600', 판매가비교: '20%'},
    { id: 'r3', no: 3, 바코드: '8809591316526', 상품명: '신라면 블랙', 품목포지션: <span className="text-red-500">B. 점검필요</span>, 평균판매가: '4,480', 우리판매가: '5,600', 판매가비교: '20%'},
    { id: 'r4', no: 4, 바코드: '8809591316526', 상품명: '신라면 블랙', 품목포지션: <span className="text-red-500">B. 점검필요</span>, 평균판매가: '4,480', 우리판매가: '5,600', 판매가비교: '20%'},
    { id: 'r5', no: 5, 바코드: '8809591316526', 상품명: '신라면 블랙', 품목포지션: <span className="text-red-500">B. 점검필요</span>, 평균판매가: '4,480', 우리판매가: '5,600', 판매가비교: '20%'},
    { id: 'r6', no: 6, 바코드: '8809591316526', 상품명: '신라면 블랙', 품목포지션: <span className="text-red-500">B. 점검필요</span>, 평균판매가: '4,480', 우리판매가: '5,600', 판매가비교: '20%'},
    { id: 'r7', no: 7, 바코드: '8809591316526', 상품명: '신라면 블랙', 품목포지션: <span className="text-red-500">B. 점검필요</span>, 평균판매가: '4,480', 우리판매가: '5,600', 판매가비교: '20%'},
    { id: 'r8', no: 8, 바코드: '8809591316526', 상품명: '신라면 블랙', 품목포지션: <span className="text-red-500">B. 점검필요</span>, 평균판매가: '4,480', 우리판매가: '5,600', 판매가비교: '20%'},
    { id: 'r9', no: 9, 바코드: '8809591316526', 상품명: '신라면 블랙', 품목포지션: <span className="text-zinc-700">D. 교체검토</span>, 평균판매가: '4,480', 우리판매가: '5,600', 판매가비교: '20%'},
    { id: 'r10', no: 10, 바코드: '8809591316526', 상품명: '신라면 블랙', 품목포지션: <span className="text-red-500">B. 점검필요</span>, 평균판매가: '4,480', 우리판매가: '5,600', 판매가비교: '20%'},
    { id: 'r11', no: 11, 바코드: '8809591316526', 상품명: '신라면 블랙', 품목포지션: <span className="text-red-500">B. 점검필요</span>, 평균판매가: '4,480', 우리판매가: '5,600', 판매가비교: '20%'},
    { id: 'r12', no: 12, 바코드: '8809591316526', 상품명: '신라면 블랙', 품목포지션: <span className="text-blue-600">C. 강점확인</span>, 평균판매가: '4,480', 우리판매가: '5,600', 판매가비교: '20%'},
    { id: 'r13', no: 13, 바코드: '8809591316526', 상품명: '신라면 블랙', 품목포지션: <span className="text-red-500">B. 점검필요</span>, 평균판매가: '4,480', 우리판매가: '5,600', 판매가비교: '20%'},
    { id: 'r14', no: 14, 바코드: '8809591316526', 상품명: '신라면 블랙', 품목포지션: <span className="text-zinc-700">D. 교체검토</span>, 평균판매가: '4,480', 우리판매가: '5,600', 판매가비교: '20%'},
    { id: 'r15', no: 15, 바코드: '8809591316526', 상품명: '신라면 블랙', 품목포지션: <span className="text-zinc-700">D. 교체검토</span>, 평균판매가: '4,480', 우리판매가: '5,600', 판매가비교: '20%'},
    { id: 'r16', no: 16, 바코드: '8809591316526', 상품명: '신라면 블랙', 품목포지션: <span className="text-red-500">B. 점검필요</span>, 평균판매가: '4,480', 우리판매가: '5,600', 판매가비교: '20%'},
    { id: 'r17', no: 17, 바코드: '8809591316526', 상품명: '신라면 블랙', 품목포지션: <span className="text-red-500">B. 점검필요</span>, 평균판매가: '4,480', 우리판매가: '5,600', 판매가비교: '20%'},
  ];

  return (
    <div className="flex flex-col flex-1 max-w-7xl justify-center">
      <main className="flex items-start gap-6">
        <div className="flex-1 flex flex-col gap-4 p-6 rounded-2xl bg-white shadow-xs transition-all">
          <SearchBar
            searchFilters={[
              { label: '품목', options: [{ value: '', label: '품목포지션' }] },
              { label: '판매가차액', options: [{ value: '', label: '판매가 차액10% up' }, { value: 'seoul', label: '서울' }, { value: 'busan', label: '부산' }] },
            ]}
            centerFilters={[
              { label: '대분류', options: [{ value: '', label: '대분류' }] },
              { label: '중분류', options: [{ value: '', label: '중분류' }] },
              { label: '소분류', options: [{ value: '', label: '소분류' }] },
            ]}
            placeholder="바코드, 상품명"
            buttonLabel="검색"
          />
          <div className="-mx-6 border-y border-zinc-100">
            <table className="table-fixed w-full border-collapse bg-white text-sm">
              <colgroup>
                <col style={{ width: '40px' }} />
                <col style={{ width: '130px' }} />
                <col style={{ width: '200px' }} />
              </colgroup>
              <thead className="border-b border-zinc-200 sticky top-0 z-10">
                <tr>
                  <th className="p-2 text-center font-medium text-zinc-800 bg-blue-50">No.</th>
                  <th className="p-2 text-left font-medium text-zinc-800 bg-blue-50">바코드</th>
                  <th className="p-2 text-left font-medium text-zinc-800 bg-blue-50">상품명</th>
                  <th className="p-2 text-left font-medium text-zinc-800 bg-blue-50">품목포지션</th>
                  <th className="p-2 text-right font-medium text-zinc-800 bg-blue-50">평균 판매가</th>
                  <th className="p-2 text-right font-medium text-zinc-800 bg-blue-50">우리 판매가</th>
                  <th className="p-2 pr-6 text-right font-medium text-zinc-800 bg-blue-50">판매가 비교</th>
                </tr>
              </thead>
              <DateTableList rows={rows} rowKey="id" />
            </table>
          </div>
        </div>
        {/* 선택상품 정보 */}
        <div className="flex flex-col gap-4 w-70 p-6 rounded-2xl bg-white shadow-xs transition-all">
          <div className="">상품명이 들어가는 영역</div>
          <hr className="border-zinc-200" />
          <div className="flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1 border border-zinc-200 rounded-xl p-4">
              <div className="text-sm">현 단가 유지</div>
              <div>
                <span className="text-3xl font-bold">2,800</span>원
              </div>
              <div className="text-sm">
                <dl className="flex gap-1 justify-between">
                  <dt>이익율</dt>
                  <dd>28 %</dd>
                </dl>
                <dl className="flex gap-1 justify-between">
                  <dt>예상 판매량</dt>
                  <dd>18 개</dd>
                </dl>
                <dl className="flex gap-1 justify-between">
                  <dt>월 실현이익</dt>
                  <dd>12,100 원</dd>
                </dl>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1 border border-blue-600 rounded-xl p-4">
              <div className="text-sm">추천</div>
              <div>
                <span className="text-3xl font-bold">2,500</span>원
              </div>
              <div className="text-sm">
                <dl className="flex gap-1 justify-between">
                  <dt>이익율</dt>
                  <dd>28 %</dd>
                </dl>
                <dl className="flex gap-1 justify-between">
                  <dt>예상 판매량</dt>
                  <dd>18 개</dd>
                </dl>
                <dl className="flex gap-1 justify-between">
                  <dt>월 실현이익</dt>
                  <dd>12,100 원</dd>
                </dl>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1 border border-zinc-200 rounded-xl p-4">
              <div className="text-sm">비효율</div>
              <div>
                <span className="text-3xl font-bold">3,000</span>원
              </div>
              <div className="text-sm">
                <dl className="flex gap-1 justify-between">
                  <dt>이익율</dt>
                  <dd>28 %</dd>
                </dl>
                <dl className="flex gap-1 justify-between">
                  <dt>예상 판매량</dt>
                  <dd>18 개</dd>
                </dl>
                <dl className="flex gap-1 justify-between">
                  <dt>월 실현이익</dt>
                  <dd>12,100 원</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}