import React, { FC } from 'react'

type ListProps = {
  tabs: {
    label: string
    index: number
  }[]
  selectedTab: number
  orientation?: 'horizontal' | 'vertical'
  onClick: (index: number) => void
}

const Tabs: FC<ListProps> = ({ tabs = [], selectedTab = 0, onClick, orientation = 'horizontal' }) => {
  return (
    <div role='tablist' aria-orientation={orientation}>
      {tabs.map((tab) => (
        <button
          className={selectedTab === tab.index ? 'active' : ''}
          onClick={() => onClick(tab.index)}
          key={tab.index}
          type='button'
          role='tab'
          aria-selected={selectedTab === tab.index}
          aria-controls={`tabpanel-${tab.index}`}
          tabIndex={selectedTab === tab.index ? 0 : -1}
          id={`btn-${tab.index}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default Tabs
