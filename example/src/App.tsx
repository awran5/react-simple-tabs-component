import React, { useState } from 'react'
import { Tabs } from 'react-simple-tabs-component'
import 'react-simple-tabs-component/dist/index.css'

import TabOne from './Components/TabOne'
import TabTwo from './Components/TabTwo'
import TabThree from './Components/TabThree'

type TabsType = {
  label: string
  index: number
  Component: React.FC<{}>
}[]

const tabs: TabsType = [
  {
    label: 'Tab One',
    index: 1,
    Component: TabOne
  },
  {
    label: 'Tab Two',
    index: 2,
    Component: TabTwo
  },
  {
    label: 'Tab Three',
    index: 3,
    Component: TabThree
  }
]

const App = () => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index)
  return (
    <div className='App'>
      <Tabs selectedTab={selectedTab} tabs={tabs} onClick={setSelectedTab} />
    </div>
  )
}

export default App
