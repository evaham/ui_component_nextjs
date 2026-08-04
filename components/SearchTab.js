import { useState } from 'react';

const defaultTabs = [
  '전체',
  'A. 상태유지',
  'B. 점검필요',
  'C. 강점확인',
  'D. 교체검토'
];

export default function SearchTab({ tabs }) {
  const tabLabels = Array.isArray(tabs) && tabs.length > 0 ? tabs : defaultTabs;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="tab-menu">
      <div className="tab-group">
        {tabLabels.map((label, idx) => {
          const isActive = idx === activeIndex;
          const isFirst = idx === 0;
          const isLast = idx === tabLabels.length - 1;
          const baseClass = 'tab-item';
          const activeClass = isActive
            ? 'active'
            : '';
          return (
            <button
              key={`${label}-${idx}`}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`${baseClass} ${activeClass}`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}