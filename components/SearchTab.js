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
    <div className="tab-menu flex -mb-px -mx-6 px-6 border-b border-zinc-300">
      <div className="flex bg-zinc-100 rounded rounded-b-none">
        {tabLabels.map((label, idx) => {
          const isActive = idx === activeIndex;
          const isFirst = idx === 0;
          const isLast = idx === tabLabels.length - 1;
          const baseClass = '-mb-px px-3 py-1.5 rounded-tr rounded-tl font-medium text-sm cursor-pointer';
          const activeClass = isActive
            ? 'bg-white text-blue-700 border-t border-l border-r border-zinc-300'
            : 'border-transparent text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 hover:shadow-xs';
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



    // <div className="flex items-center">
    //   <div className="flex p-0.5 gap-1 bg-zinc-100 rounded border border-zinc-200">
    //     {tabLabels.map((label, idx) => {
    //       const isActive = idx === activeIndex;
    //       const isFirst = idx === 0;
    //       const isLast = idx === tabLabels.length - 1;
    //       const baseClass = 'px-3 py-1.5 rounded font-medium text-sm cursor-pointer';
    //       const activeClass = isActive
    //         ? 'bg-[#26499d] text-white hover:bg-[#26499d] hover:text-white'
    //         : 'border-transparent text-zinc-700 hover:bg-white hover:text-zinc-900 hover:shadow-xs';
    //       return (
    //         <button
    //           key={`${label}-${idx}`}
    //           type="button"
    //           onClick={() => setActiveIndex(idx)}
    //           className={`${baseClass} ${activeClass}`}
    //         >
    //           {label}
    //         </button>
    //       );
    //     })}
    //   </div>
    // </div>





  );
}