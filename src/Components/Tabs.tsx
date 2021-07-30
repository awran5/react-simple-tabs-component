import React, { useReducer } from 'react'
import '../styles.css'

export declare type TabsProps = {
  tabs: {
    label: string
    Component: () => JSX.Element
  }[]
  orientation?: 'horizontal' | 'vertical'
  type?: 'tabs' | 'pills'
  className?: string
}

declare type State = {
  selected: number
}

type Action = { type: 'selected'; payload: number }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'selected':
      return {
        selected: action.payload
      }
    default:
      return state
  }
}

export const Tabs = ({
  tabs = [],
  className = 'bootstrap-tabs-component',
  type = 'tabs',
  orientation = 'horizontal'
}: TabsProps) => {
  const [{ selected }, dispatch] = useReducer(reducer, {
    selected: 0
  })
  const Panel = tabs && tabs.find((_, index) => index === selected)

  return (
    <div className={orientation === 'vertical' ? `d-flex align-items-start ${className}` : className}>
      <ul
        className={`nav nav-${type} ${orientation === 'vertical' ? 'flex-column me-3' : 'mb-3'}`}
        role='tablist'
        aria-orientation={orientation}
      >
        {tabs.map((tab, index) => (
          <li className='nav-item' role='presentation' key={tab.label}>
            <button
              id={`btn-${index}`}
              className={selected === index ? 'nav-link active' : 'nav-link'}
              type='button'
              role='tab'
              aria-selected={selected === index}
              aria-controls={`tabpanel-${index}`}
              tabIndex={selected === index ? 0 : -1}
              onClick={() => dispatch({ type: 'selected', payload: index })}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className='tab-content'>
        <div role='tabpanel' aria-labelledby={`btn-${selected}`} id={`tabpanel-${selected}`}>
          {Panel && <Panel.Component />}
        </div>
      </div>
    </div>
  )
}
