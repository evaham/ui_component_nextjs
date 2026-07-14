'use client';

import { useState, useEffect } from 'react';

// 상품 데이터 (12개 아이템)
const productData = [
  { id: 1, tag: '전국확산중', title: '신라면 블랙 큰사발', desc1: '서울 65% 매장 취급 / 시흥시 12% 매장 취급', desc2: '취급매장 수 + 6%p, 매출 6주 연속 상승중' },
  { id: 2, tag: '전국확산중', title: 'OO 탄산음료 350ml', desc1: '경기 50% 매장 취급 / 시흥시 50% 매장 취급', desc2: '취급매장 수 + 10%p, 매출 5주 연속 상승중' },
  { id: 3, tag: '행사추천', title: '팔도비빔면 매운맛', desc1: '지난주 전국 1,895개 매장에서 특매 진행', desc2: '판매량 104% 급상승~' },
  { id: 4, tag: '뜨는 핫템', title: 'OO 즉석컵밥 150g', desc1: '서울 65% 매장 취급 / 시흥시 50% 매장 취급', desc2: '취급매장 수 + 10%p, 매출 6주 연속 상승중' },
  { id: 5, tag: '신상품', title: '화이트 큰사발', desc1: '2024년 7월 신규 출시 상품', desc2: '초기 입점 프로모션 이벤트 진행 예정' },
  { id: 6, tag: '인기급상승', title: '블랙커피 캔 240ml', desc1: '오피스 상권 매출 25% 증가', desc2: '야근 시즌 필수 아이템으로 등극' },
  { id: 7, tag: '시즌특수', title: '아이스크림 콘 모음', desc1: '최근 기온 상승에 따른 판매 폭증', desc2: '냉동고 전면 진열 및 재고 확보 권장' },
  { id: 8, tag: 'SNS화제', title: '치즈 볶음면 한정판', desc1: '유명 유튜버 리뷰 후 MZ세대 구매 급증', desc2: '2+1 행사 검토 중인 트렌드 상품' },
  { id: 9, tag: '지역특화', title: '제주 감귤 주스', desc1: '관광지 및 교통 요충지 매출 상위권', desc2: '신선 원료 강조 시 시너지 효과 기대' },
  { id: 10, tag: '스테디셀러', title: '초코 과자 80g', desc1: '전 연령대 꾸준한 선호도 유지', desc2: '패키지 리뉴얼 후 가시성 개선 효과' },
  { id: 11, tag: '건강기능', title: '멀티 비타민 음료', desc1: '오전 시간대 직장인 구매 비중 높음', desc2: '번들 상품 구성 시 매출 증대 가능성' },
  { id: 12, tag: '한정판', title: '딸기맛 시즌 스낵', desc1: '봄 시즌 한정 수량 운영 상품', desc2: '재고 소진 임박, 추가 발주 확인 필요' },
];

export default function RollingBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const displayCount = 5;
  const itemHeight = 72; // 각 아이템의 고정 높이
  const gap = 16;       // Tailwind gap-4 (16px)

  // handleNext를 useEffect 상단으로 이동하거나 내부에서 정의
  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 10000); // 10초 주기

    return () => clearInterval(timer);
  }, []);

  // 마지막 아이템 세트에 도달하면 정적 점프를 통해 무한 루프 구현
  useEffect(() => {
    if (currentIndex === productData.length) {
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700); // 애니메이션 지속 시간 이후 리셋

      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  // 무한 롤링을 위해 첫 5개 아이템을 배열 끝에 복사
  const extendedData = [...productData, ...productData.slice(0, 5)];

  return (
    <div className="rounded-xl bg-white shadow-xs p-5 overflow-hidden">
      {/* 타이틀 헤더 */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-[#26499d]" />
        <h2 className="font-bold tracking-tight">주목 상품정보</h2>
      </div>

      {/* 롤링 컨테이너 (5개 높이 고정) */}
      <div 
        className="relative overflow-hidden"
        style={{ height: `${(itemHeight * displayCount) + (gap * (displayCount - 1))}px` }}
      >
        <ul 
          className={`flex flex-col gap-4 ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
          style={{ transform: `translateY(-${currentIndex * (itemHeight + gap)}px)` }}
        >
          {extendedData.map((item, index) => (
            <li 
              key={`${item.id}-${index}`} 
              style={{ height: `${itemHeight}px` }}
              className="flex flex-col justify-center"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="px-1 py-0.5 rounded text-xs font-bold bg-blue-50 text-blue-700 whitespace-nowrap">
                  {item.tag}
                </div>
                <span className="font-bold text-zinc-900 truncate">{item.title}</span>
              </div>
              <div className="text-sm text-zinc-500 leading-tight">
                <div className="truncate">{item.desc1}</div>
                <div className="truncate">{item.desc2}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}