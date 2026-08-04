import DataTableList from "@/components/DataTableList";
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
    <div className="contents-group">
      <div className="contents-row">
        <div className="card-panel">
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
          <div className="table-data-container">
            <table className="table-data">
              <colgroup>
                <col style={{ width: '40px' }} />
                <col style={{ width: '130px' }} />
                <col style={{ width: '200px' }} />
              </colgroup>
              <thead>
                <tr>
                  <th className="text-center">No.</th>
                  <th className="text-left">바코드</th>
                  <th className="text-left">상품명</th>
                  <th className="text-left">품목포지션</th>
                  <th className="text-right">평균 판매가</th>
                  <th className="text-right">우리 판매가</th>
                  <th className="pr-6! text-right">판매가 비교</th>
                </tr>
              </thead>
              <DataTableList rows={rows} rowKey="id" />
            </table>
          </div>
        </div>
        {/* 선택상품 정보 */}
        <div className="side-card-panel">
          <div className="side-card-header">
            <div className="side-card-title text-blue-800">신라면 블랙</div>
          </div>
          <hr className="side-card-hr" />
          <div className="side-card-container">
            <div className="inner-card-panel">
              <div className="inner-card-title">현 단가 유지</div>
              <div>
                <span className="text-3xl font-bold">2,800</span>원
              </div>
              <div className="inner-card-container">
                <dl>
                  <dt>이익율</dt>
                  <dd>28 %</dd>
                </dl>
                <dl>
                  <dt>예상 판매량</dt>
                  <dd>18 개</dd>
                </dl>
                <dl>
                  <dt>월 실현이익</dt>
                  <dd>12,100 원</dd>
                </dl>
              </div>
            </div>
            <div className="inner-card-panel-active">
              <div className="text-sm">추천</div>
              <div>
                <span className="text-3xl text-blue-700 font-bold">2,500</span>원
              </div>
              <div className="inner-card-container">
                <dl>
                  <dt>이익율</dt>
                  <dd><span className="text-blue-700 font-bold">28</span> %</dd>
                </dl>
                <dl>
                  <dt>예상 판매량</dt>
                  <dd><span className="text-blue-700 font-bold">18</span> 개</dd>
                </dl>
                <dl>
                  <dt>월 실현이익</dt>
                  <dd><span className="text-blue-700 font-bold">12,100</span> 원</dd>
                </dl>
              </div>
            </div>
            <div className="inner-card-panel">
              <div className="inner-card-title">비효율</div>
              <div>
                <span className="text-3xl font-bold">3,000</span>원
              </div>
              <div className="inner-card-container">
                <dl>
                  <dt>이익율</dt>
                  <dd>28 %</dd>
                </dl>
                <dl>
                  <dt>예상 판매량</dt>
                  <dd>18 개</dd>
                </dl>
                <dl>
                  <dt>월 실현이익</dt>
                  <dd>12,100 원</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}