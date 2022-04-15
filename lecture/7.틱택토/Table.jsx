import React from 'react'
import Tr from './Tr'

const Table = ({ tableData, dispatch }) => {
  return (
    <table>
      <thead></thead>
      <tbody>
        {Array(tableData.length)
          .fill()
          .map((tr, i) => (
            <Tr
              key={i}
              dispatch={dispatch}
              rowIndex={i}
              rowData={tableData[i]}
            />
          ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  )
}

export default Table
