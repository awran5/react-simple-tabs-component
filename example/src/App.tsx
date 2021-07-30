import { Tabs } from 'react-simple-tabs-component'
import 'react-simple-tabs-component/dist/index.css'

import TabOne from './Components/TabOne'
import TabTwo from './Components/TabTwo'
import TabThree from './Components/TabThree'

const tabs = [
  {
    label: 'Tab One',
    Component: TabOne
  },
  {
    label: 'Tab Two',
    Component: TabTwo
  },
  {
    label: 'Tab Three',
    Component: TabThree
  }
]

const App = () => {
  return (
    <div className='App'>
      <Tabs tabs={tabs} type='pills' />
    </div>
  )
}

export default App
