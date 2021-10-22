import { useState } from 'react';
import Item from './Item';

export default function List() {
  const [items, setItems] = useState([10, 22, 13, 20])

  // const increase = useCallback((changingIndex) => {
  //   setItems(prev => prev.map((item, index) => index === changingIndex ? item + 1 : item))
  // }, [])

  const increase = (changingIndex) => {
    setItems(prev => prev.map((item, index) => index === changingIndex ? item + 1 : item))
  }

  return items.map((num, index) => <Item key={index} increase={increase} number={num} index={index} />)
}
