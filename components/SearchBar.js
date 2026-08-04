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

export default function SearchBar({
  searchFilters = defaultSearchFilters,
  centerFilters = defaultCenterFilters,
  locationFilter = defaultLocationFilter,

  placeholder = '바코드, 상품명',
  buttonLabel = '조회',
  searchGroupLabel1 = '검색그룹명1',
  searchGroupLabel2 = '검색그룹명2',
}) {
  const renderSelect = (filter, idx) => {
    if (!filter || !Array.isArray(filter.options) || filter.options.length === 0) {
      return null;
    }

    return (
      <select key={`${filter.label}-${idx}`} className="select-item">
        {filter.options.map((option, optionIdx) => (
          <option key={`${filter.label}-${optionIdx}`} value={option.value ?? ''}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div className="search-container">
      {searchFilters.length > 0 && (
        <div className="search-group">
          <div className="search-group-label">{searchGroupLabel1}</div>
          <div className="items-group">
            {searchFilters.map(renderSelect)}
            <input type="text" placeholder={placeholder} className="input-text" />
            <button className="primary-button">
              {buttonLabel}
            </button>
          </div>
        </div>
      )}

      {centerFilters.length > 0 && (
        <div className="search-group">
          <div className="search-group-label">{searchGroupLabel2}</div>
          <div className="items-group">
            {centerFilters.map(renderSelect)}
          </div>
        </div>
      )}
      {/* 지역선택 */}
      {locationFilter.length > 0 && (
        <div className="search-group">
          <div className="search-group-label mb-auto">지역선택</div>
          <div className="items-group max-w-160">
            {locationFilter.map((location) => (
              <div key={location.id} className="checkbox-item">
                <input
                  type="checkbox"
                  id={location.id}
                  name="locationFilter"
                  value={location.value}
                />
                <label htmlFor={location.id}>
                  {location.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}