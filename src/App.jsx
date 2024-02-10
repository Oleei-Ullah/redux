import { useState } from 'react'
import Counter from './components/Counter'
import Count from './components/Count';

const initialState = [
  {
    id: 1,
    count: 0
  },
  {
    id: 2,
    count: 0
  }
];

function App() {

  const [state, setState] = useState(initialState);

  const totalCount = state.reduce((total, el) => total + el.count, 0)

  const increment = (id) => {
    const updatedState = state.map(el => {
      if (el.id === id) {
        return {
          ...el,
          count: el.count + 1
        }
      } else {
        return {
          ...el
        }
      }
    })
    setState(updatedState)
  }

  const decrement = (id) => {
    const updatedState = state.map(el => {
      if (el.id === id) {
        return {
          ...el,
          count: el.count - 1
        }
      } else {
        return {
          ...el
        }
      }
    })
    setState(updatedState)
  }

  return (
    <div className='max-w-lg max-h-screen  mx-auto flex items-center justify-center shadow-lg p-2 gap-4'>
      <div>
        {state.map(({ id, count }) => {
          return <Counter
            key={id}
            id={id}
            count={count}
            increment={increment}
            decrement={decrement}
          />
        })}

        <Count total={totalCount} />

      </div>
    </div>
  )
}

export default App
