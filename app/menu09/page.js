'use client';
import SearchBar from "@/components/SearchBar";
import DataTableList from '@/components/DataTableList';

export default function Menu09Page() {
  const rows = [
    { id: 'r1', no: 1, data01: '8809591316526', data02: '신라면 블랙', data03: '1,511', data04: '321,480', data05: '3,125,600', data06: '999,999',data07: '123,123,123',data08: '2023-06-02',  },
  ];

  return (
    <div className="contents-group">
      <div className="contents-col">
        <div className="card-panel">
          <SearchBar />
          <div className="table-data-container">
            <table className="table-data">
              <colgroup>
                <col style={{ width: '40px' }} />
                <col style={{ width: '120px' }} />
                <col style={{ width: '150px' }} />
              </colgroup>
              <thead>
                <tr>
                  <th className="text-center">No.</th>
                  <th className="text-left">바코드</th>
                  <th className="text-left">상품명</th>
                  <th className="text-right">취급점</th>
                  <th className="text-right">평균 매입가</th>
                  <th className="text-right">평균 판매가</th>
                  <th className="text-right">평균 판매량</th>
                  <th className="text-right">평균 판매액</th>
                  <th className="pr-6! text-right">등록일</th>
                </tr>
              </thead>
              <DataTableList rows={rows} rowKey="id" />
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}