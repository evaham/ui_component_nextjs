'use client';

export default function DashboardCard4({ type, className }) {
  return (
    <div className={`card-pannel ${className || ""}`}>
      {type === "sales" ? (
        <div className="card-header">
          <div className="card-title">
            매출속보 / 랭킹
          </div>
          <button className="card-more-button">
            더보기
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3e3e3e"><path d="M540-480 356-664l20-20 204 204-204 204-20-20 184-184Z"/></svg>
          </button>
        </div>
      ) : type === "today" ? (
        <div className="card-header">
          <div className="card-title">
            오늘 우리매장 매출은? (매출액/객수/객단가)
          </div>
          <button className="card-more-button">
            더보기
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3e3e3e"><path d="M540-480 356-664l20-20 204 204-204 204-20-20 184-184Z"/></svg>
          </button>
        </div>
      ) : type === "yesterday" ? (
        <div className="card-header">
          <div className="card-title">
            어제 (7/30) 매출
          </div>
          <button className="card-more-button">
            더보기
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3e3e3e"><path d="M540-480 356-664l20-20 204 204-204 204-20-20 184-184Z"/></svg>
          </button>
        </div>
      ) : (
        <div className="card-header">
          <div className="">오늘 매출내역이 수집된 <span className="text-red-500 font-bold">4,534</span>개 매장을 대상으로 합니다.</div>
          <div className="ml-auto text-sm">우리매장 수집시각 : <span>14:30</span></div>
        </div>
      )}
      
      {type === "sales" ? (
      <div className="cards-container">
        {/* 우리매장 */}
        <div className="store-data-container">
          <div className="store-data-label mt-auto">
            우리 매출액
          </div>
          <div className="store-data-emphasis text-blue-700">
            <div className="text-3xl tracking-tight">23,450,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="store-card-stats">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>
        {/* 전국 200평 이하 */}
        <div className="store-data-container">
          <div className="store-data-badge">
            <span>우리 순위</span>
            <span className="text-blue-600 font-bold">158</span>
            <span className="text-black/20">/</span>
            <span>1200</span>
          </div>
          <div className="store-data-label">전국 200평 이하 평균</div>
          <div className="flex items-baseline gap-1">
            <div className="text-3xl font-bold tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="store-card-stats">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>

        {/* 인천 200평 이하 */}
        <div className="store-data-container">
          <div className="store-data-badge">
            <span>우리 순위</span>
            <span className="text-blue-600 font-bold">158</span>
            <span className="text-black/20">/</span>
            <span>1200</span>
          </div>
          <div className="store-data-label">인천 200평 이하 평균</div>
          <div className="flex items-baseline gap-1">
            <div className="text-3xl font-bold tracking-tight">18,400,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="store-card-stats">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-[#26499d]/50">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>

        {/* 전국평균 */}
        <div className="store-data-container">
          <div className="store-data-badge">
            <span>우리 순위</span>
            <span className="text-blue-600 font-bold">158</span>
            <span className="text-black/20">/</span>
            <span>1200</span>
          </div>
          <div className="store-data-label">전국 평균</div>
          <div className="flex items-baseline gap-1 font-bold">
            <div className="text-3xl tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="store-card-stats">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>
      </div>

      ) : type === "today" ? (

      <div className="cards-container">
        {/* 우리매장 */}
        <div className="store-data-container">
          <div className="store-data-label">
            우리 매출액
          </div>
          <div className="store-data-emphasis text-blue-700">
            <div className="text-3xl tracking-tight">23,450,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="store-card-stats">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>
        {/* 전국 200평 이하 */}
        <div className="store-data-container">
          <div className="store-data-label">전국 200평 이하 평균</div>
          <div className="store-data-emphasis">
            <div className="text-3xl tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="store-card-stats">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>

        {/* 인천 200평 이하 */}
        <div className="store-data-container">
          <div className="store-data-label">인천 200평 이하 평균</div>
          <div className="store-data-emphasis">
            <div className="text-3xl tracking-tight">18,400,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="store-card-stats">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-[#26499d]/50">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>

        {/* 전국평균 */}
        <div className="store-data-container">
          <div className="store-data-label">전국 평균</div>
          <div className="store-data-emphasis">
            <div className="text-3xl tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="store-card-stats">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>
      </div>



      ) : type === "yesterday" ? (
      <div className="cards-container">
        {/* 우리매장 */}
        <div className="store-data-container">
          <div className="store-data-label">
            우리 매출액
          </div>
          <div className="store-data-badge absolute top-4 right-4">
            <span>이전일</span>
            <span className="font-bold text-red-500">- 5.3</span>
            <span className="font-bold">%</span>
          </div>
          <div className="flex items-baseline gap-1 font-bold text-blue-700">
            <div className="text-3xl tracking-tight">23,450,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="store-card-stats">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>

        {/* 전국 200평 이하 */}
        <div className="store-data-container">
          <div className="store-data-label">
            전국 200평 이하
          </div>
          <div className="store-data-badge absolute top-4 right-4">
            <span>이전일</span>
            <span className="font-bold text-blue-600">+ 8.3</span>
            <span className="font-bold">%</span>
          </div>
          <div className="flex items-baseline gap-1 font-bold">
            <div className="text-3xl tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="store-card-stats">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>

        </div>

        {/* 인천 200평 이하 */}
        <div className="store-data-container">
          <div className="store-data-label">
            인천 200평 이하
          </div>
          <div className="store-data-badge absolute top-4 right-4">
            <span>이전일</span>
            <span className="font-bold text-blue-700">+ 8.3</span>
            <span className="font-bold">%</span>
          </div>
          <div className="flex items-baseline gap-1 font-bold">
            <div className="text-3xl tracking-tight">18,400,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="store-card-stats">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>
        {/* 전국평균 */}
        <div className="store-data-container">
          <div className="store-data-label">
            전국 평균
          </div>
          <div className="store-data-badge absolute top-4 right-4">
            <span>이전일</span>
            <span className="font-bold text-blue-600">+ 8.3</span>
            <span className="font-bold">%</span>
          </div>
          <div className="store-data-emphasis">
            <div className="text-3xl tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="store-card-stats">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>
      </div>
      ) : (

      <div className="cards-container">
        {/* 우리매장 */}
        <div className="store-data-container">
          <div className="store-data-label">
            우리 매출액
          </div>
          <div className="store-data-emphasis text-blue-700">
            <div className="text-3xl tracking-tight">23,450,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="store-card-stats">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>
        {/* 전국 200평 이하 */}
        <div className="store-data-container">
          <div className="store-data-label">
            전국 200평 이하 평균
          </div>
          <div className="store-data-emphasis">
            <div className="text-3xl tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="store-card-stats">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>

        {/* 인천 200평 이하 */}
        <div className="store-data-container">
          <div className="store-data-label">
            인천 200평 이하 평균
          </div>
          <div className="store-data-emphasis">
            <div className="text-3xl tracking-tight">18,400,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="store-card-stats">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-[#26499d]/50">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>

        {/* 전국평균 */}
        <div className="store-data-container">
          <div className="store-data-label">
            전국 평균
          </div>
          <div className="store-data-emphasis">
            <div className="text-3xl tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="store-card-stats">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
