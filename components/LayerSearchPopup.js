'use client';

const defaultSearchFilters = [
  { label: '검색옵션', options: [{ value: 'A', label: '상위 100개' }] },
  { label: '지역', options: [{ value: '', label: '지역' }] },
  { label: '규모', options: [{ value: '', label: '규모' }] },
  { label: 'order by', options: [{ value: '', label: 'order by' }] },
];

const defaultCenterFilters = [
  { label: '대분류', options: [{ value: '', label: '대분류' }] },
  { label: '중분류', options: [{ value: '', label: '중분류' }] },
  { label: '소분류', options: [{ value: '', label: '소분류' }] },
  { label: '판매가 10% 이상 차이', options: [{ value: '', label: '판매가 10% 이상 차이' }] },
];

const defaultLocationFilter = [
  { id: 'nationwide', label: '전국', value: 'nationwide' },
  { id: 'seoul', label: '서울', value: 'seoul' },
  { id: 'busan', label: '부산', value: 'busan' },
  { id: 'daegu', label: '대구', value: 'daegu' },
  { id: 'incheon', label: '인천', value: 'incheon' },
  { id: 'gwangju', label: '광주', value: 'gwangju' },
  { id: 'daejeon', label: '대전', value: 'daejeon' },
  { id: 'ulsan', label: '울산', value: 'ulsan' },
  { id: 'sejong', label: '세종', value: 'sejong' },
  { id: 'gyeonggi', label: '경기', value: 'gyeonggi' },
  { id: 'gangwon', label: '강원', value: 'gangwon' },
  { id: 'chungbuk', label: '충북', value: 'chungbuk' },
  { id: 'chungnam', label: '충남', value: 'chungnam' },
  { id: 'jeonbuk', label: '전북', value: 'jeonbuk' },
  { id: 'jeonnam', label: '전남', value: 'jeonnam' },
  { id: 'gyeongbuk', label: '경북', value: 'gyeongbuk' },
  { id: 'gyeongnam', label: '경남', value: 'gyeongnam' },
  { id: 'jeju', label: '제주', value: 'jeju' },
];

export default function LayerSearchPopup({

  isOpen, onClose, title, children,
  searchFilters = defaultSearchFilters,
  centerFilters = defaultCenterFilters,
  locationFilter = defaultLocationFilter,

  placeholder = '바코드, 상품명',
  buttonLabel = '조회',
  searchGroupLabel1 = '검색그룹명1',
  searchGroupLabel2 = '검색그룹명2',
}) {
  if (!isOpen) return null;

  const renderSelect = (filter, idx) => {
    if (!filter || !Array.isArray(filter.options) || filter.options.length === 0) {
      return null;
    }

    return (
      <select
        key={`${filter.label}-${idx}`}
        className="min-w-30 px-2 py-1 border rounded border-zinc-300 bg-white"
      >
        {filter.options.map((option, optionIdx) => (
          <option key={`${filter.label}-${optionIdx}`} value={option.value ?? ''}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose}></div>
      <div className="relative overflow-hidden flex flex-col bg-white rounded-xl shadow-2xl transform transition-all">
        <div className="flex items-center justify-between pl-4 pr-2 py-2 md:px-6 md:py-3 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-900">
            상세검색
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="닫기">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-4 overflow-y-auto max-h-[70vh]">
          <div className="text-gray-700">
            <div className="flex flex-col gap-1 border-zinc-200 text-sm text-medium">
              {searchFilters.length > 0 && (
                <div className="flex flex-wrap gap-1 items-center">
                  <div>{searchGroupLabel1}</div>
                  {searchFilters.map(renderSelect)}
                  <input
                    type="text"
                    placeholder={placeholder}
                    className="min-w-30 px-2 py-1 border rounded border-zinc-300 bg-white"
                  />
                  <button className="px-4 py-1 bg-[#26499d] text-white rounded hover:bg-[#26499d] transition-colors cursor-pointer">
                    {buttonLabel}
                  </button>
                </div>
              )}

              {centerFilters.length > 0 && (
                <div className="flex flex-wrap gap-1 items-center">
                  <div>{searchGroupLabel2}</div>
                  {centerFilters.map(renderSelect)}
                </div>
              )}

              {locationFilter.length > 0 && (
                <div className="flex mt-2 gap-x-3">
                  <div className="">지역선택</div>
                  <div className="flex flex-wrap gap-x-2 max-w-130">
                    {locationFilter.map((location) => (
                      <div key={location.id} className="flex items-center mr-2">
                        <input
                          type="checkbox"
                          id={location.id}
                          name="locationFilter"
                          value={location.value}
                          className="cursor-pointer"
                        />
                        <label htmlFor={location.id} className="ml-1 cursor-pointer">
                          {location.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3">
          <button 
             onClick={onClose}
             className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            취소
          </button>
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm transition-colors"
          >
            확인
          </button>
        </div> */}
      </div>
    </div>










  );
}
