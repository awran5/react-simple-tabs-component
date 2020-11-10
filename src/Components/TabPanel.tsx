import React, { FC } from 'react'

type PanelProps = {
  tabs: {
    index: number
    Component: FC<{ index: number }>
  }[]
  selectedTab: number
}

const TabPanel: FC<PanelProps> = ({ tabs = [], selectedTab = 0 }) => {
  const Panel = tabs && tabs.find((tab) => tab.index === selectedTab)

  return (
    <div role='tabpanel' aria-labelledby={`btn-${selectedTab}`} id={`tabpanel-${selectedTab}`}>
      {Panel && <Panel.Component index={selectedTab} />}
    </div>
  )
}

export default TabPanel
