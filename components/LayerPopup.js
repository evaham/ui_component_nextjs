'use client';
import LineGraph from './LineGraph';

export default function LayerPopup({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl shadow-2xl transform transition-all overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">
            {title || '알림'}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="닫기">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6 overflow-y-auto max-h-[70vh]">
          <div className="text-gray-700">
            {children || (
              <p className="text-sm">
                팝업 내용이 여기에 표시됩니다. 상세한 정보를 입력하거나 작업을 수행할 수 있습니다.
              </p>
            )}
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
