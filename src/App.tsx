import { Scene } from "./Scene"
import { SampleView } from "./views/SampleView"


function App() {
  return (
    <div className="h-screen w-screen">
      <SampleView />
      <Scene children={undefined} />
    </div>
  )
}

export default App
