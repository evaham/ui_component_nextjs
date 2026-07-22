'use client';

import React from 'react';

export default function DataTableList({ rows = [], renderRow, rowKey = 'id' }) {
  const hasRows = Array.isArray(rows) && rows.length > 0;

  const defaultRender = (row, idx) => (
    <tr key={row[rowKey] ?? idx} className="hover:bg-zinc-50 [&>td:last-child]:pr-6">
      {row.no!= null && row.no !== '' && (
        <td className="p-2 text-center">{row.no ?? idx + 1}</td>
      )}
      {row.바코드 != null && row.바코드 !== '' && (
        <td className="p-2 text-left text-zinc-400">{row.바코드}</td>
      )}
      {row.상품명 != null && row.상품명 !== '' && (
        <td className="p-2 text-left">{row.상품명}</td>
      )}
      {row.특매매장수 != null && row.특매매장수 !== '' && (
        <td className="p-2 text-right bg-blue-100/20">{row.특매매장수}</td>
      )}
      {row.특매미적용시 != null && row.특매미적용시 !== '' && (
        <td className="p-2 text-right bg-blue-100/20">{row.특매미적용시}</td>
      )}
      {row.특매적용시 != null && row.특매적용시 !== '' && (
        <td className="p-2 text-right bg-blue-100/20">{row.특매적용시}</td>
      )}
      {row.특매증가 != null && row.특매증가 !== '' && (
        <td className="p-2 text-right bg-blue-100/20">{row.특매증가}</td>
      )}
      {row.우리매장미적용시 != null && row.우리매장미적용시 !== '' && (
        <td className="p-2 text-right">{row.우리매장미적용시}</td>
      )}
      {row.우리매장예상 != null && row.우리매장예상 !== '' && (
        <td className="p-2 text-right">{row.우리매장예상}</td>
      )}
      {row.우리매장적용시 != null && row.우리매장적용시 !== '' && (
        <td className="p-2 text-right">{row.우리매장적용시}</td>
      )}
      {row.우리매장증가 != null && row.우리매장증가 !== '' && (
        <td className="p-2 text-right">{row.우리매장증가}</td>
      )}
      {row.취급매장 != null && row.취급매장 !== '' && (
        <td className="p-2 text-right">{row.취급매장}</td>
      )}
      {row.판매량 != null && row.판매량 !== '' && (
        <td className="p-2 text-right">{row.판매량}</td>
      )}
      {row.판매액 != null && row.판매액 !== '' && (
        <td className="p-2 text-right">{row.판매액}</td>
      )}
      {row.확산지역 != null && row.확산지역 !== '' && (
        <td className="p-2 text-right">{row.확산지역}</td>
      )}
      {row.품목포지션 != null && row.품목포지션 !== '' && (
        <td className="p-2 text-left">{row.품목포지션}</td>
      )}
      {row.평균매입가 != null && row.평균매입가 !== '' && (
        <td className="p-2 text-right">{row.평균매입가}</td>
      )}
      {row.우리매입량 != null && row.우리매입량 !== '' && (
        <td className="p-2 text-right">{row.우리매입량}</td>
      )}
      {row.우리매입가 != null && row.우리매입가 !== '' && (
        <td className="p-2 text-right">{row.우리매입가}</td>
      )}
      {row.차액율 != null && row.차액율 !== '' && (
        <td className="p-2 text-right">{row.차액율}</td>
      )}
      {row.취급점 != null && row.취급점 !== '' && (
        <td className="p-2 text-right">{row.취급점}</td>
      )}
      {row.최종매입 != null && row.최종매입 !== '' && (
        <td className="p-2 text-right">{row.최종매입}</td>
      )}

      {row.평균판매량 != null && row.평균판매량 !== '' && (
        <td className="p-2 text-right">{row.평균판매량}</td>
      )}
      {row.평균판매액 != null && row.평균판매액 !== '' && (
        <td className="p-2 text-right">{row.평균판매액}</td>
      )}

      {row.평균판매가 != null && row.평균판매가 !== '' && (
        <td className="p-2 text-right">{row.평균판매가}</td>
      )}
      {row.우리판매가 != null && row.우리판매가 !== '' && (
        <td className="p-2 text-right">{row.우리판매가}</td>
      )}
      {row.지역 != null && row.지역 !== '' && (
        <td className="p-2 text-left">{row.지역}</td>
      )}
      {row.규모 != null && row.규모 !== '' && (
        <td className="p-2 text-left">{row.규모}</td>
      )}
      {row.점포명 != null && row.점포명 !== '' && (
        <td className="p-2 text-left">{row.점포명}</td>
      )}
      {row.매장명 != null && row.매장명 !== '' && (
        <td className="p-2 text-left">{row.매장명}</td>
      )}
      {row.매출액 != null && row.매출액 !== '' && (
        <td className="p-2 text-right">{row.매출액}</td>
      )}
      {row.객수 != null && row.객수 !== '' && (
        <td className="p-2 text-right">{row.객수}</td>
      )}
      {row.객단가 != null && row.객단가 !== '' && (
        <td className="p-2 text-right">{row.객단가}</td>
      )}
      {row.회원매출액 != null && row.회원매출액 !== '' && (
        <td className="p-2 text-right">{row.회원매출액}</td>
      )}
      {row.회원객수 != null && row.회원객수 !== '' && (
        <td className="p-2 text-right">{row.회원객수}</td>
      )}
      {row.회원객단가 != null && row.회원객단가 !== '' && (
        <td className="p-2 text-right">{row.회원객단가}</td>
      )}
      {row.수집시각 != null && row.수집시각 !== '' && (
        <td className="p-2 text-right">{row.수집시각}</td>
      )}
      {row.타매장매입가 != null && row.타매장매입가 !== '' && (
        <td className="p-2 text-right">{row.타매장매입가}</td>
      )}
      {row.타매장판매가 != null && row.타매장판매가 !== '' && (
        <td className="p-2 text-right">{row.타매장판매가}</td>
      )}
      {row.타매장이익율 != null && row.타매장이익율 !== '' && (
        <td className="p-2 text-right">{row.타매장이익율}</td>
      )}
      {row.타매장판매량 != null && row.타매장판매량 !== '' && (
        <td className="p-2 text-right">{row.타매장판매량}</td>
      )}
      {row.우리매장매입가 != null && row.우리매장매입가 !== '' && (
        <td className="p-2 text-right bg-blue-100/20">{row.우리매장매입가}</td>
      )}
      {row.우리매장판매가 != null && row.우리매장판매가 !== '' && (
        <td className="p-2 text-right bg-blue-100/20">{row.우리매장판매가}</td>
      )}
      {row.우리매장이익율 != null && row.우리매장이익율 !== '' && (
        <td className="p-2 text-right bg-blue-100/20">{row.우리매장이익율}</td>
      )}
      {row.우리매장판매량 != null && row.우리매장판매량 !== '' && (
        <td className="p-2 text-right bg-blue-100/20">{row.우리매장판매량}</td>
      )}
      {row.판매가비교 != null && row.판매가비교 !== '' && (
        <td className="p-2 text-right">{row.판매가비교}</td>
      )}
      {row.판매량비교 != null && row.판매량비교 !== '' && (
        <td className="p-2 text-right">{row.판매량비교}</td>
      )}
      {row.상품판매가 != null && row.상품판매가 !== '' && (
        <td className="p-2 text-right">{row.상품판매가}</td>
      )}
      {row.상품이익율 != null && row.상품이익율 !== '' && (
        <td className="p-2 text-right">{row.상품이익율}</td>
      )}
      {row.등록일 != null && row.등록일 !== '' && (
        <td className="p-2 text-right">{row.등록일}</td>
      )}
      {row.판매가변경 != null && row.판매가변경 !== '' && (
        <td className="p-2 text-right">{row.판매가변경}</td>
      )}
    </tr>
  );

  return (
    <tbody className="divide-y divide-zinc-100">
      {!hasRows && (
        <tr className="hidden">
          <td colSpan="14" className="px-4 py-12 text-center text-zinc-400">데이터를 준비 중입니다.</td>
        </tr>
      )}
      {hasRows && rows.map((row, idx) => (
        renderRow ? renderRow(row, idx) : defaultRender(row, idx)
      ))}
    </tbody>
  );
}