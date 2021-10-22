import { memo } from 'react'

function Item({ number, index, increase }) {
  console.log('RENDER')
  return (
    <li>
      {number}
      <button onClick={() => increase(index)}>Увеличить</button>
    </li>
  )
}

function areEqual(prevProps, newProps) {
  if (prevProps.index === newProps.index && prevProps.number === newProps.number) return true
  return false
}

export default memo(Item, areEqual);
