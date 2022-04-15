import React, { useCallback, memo } from 'react'
import { CLICK_CELL, CHANGE_TURN } from './TicTacToe'

const Td = memo(({ rowIndex, cellIndex, cellData, dispatch }) => {
  console.log('  Td rendered')

  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex, cellData)
    //이미 기존에 'O', 'X' 있으면 리턴 해서 못누르게함
    if (cellData) {
      return
    }
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex })
  }, [cellData])

  return <td onClick={onClickTd}>{cellData}</td>
})

export default Td
