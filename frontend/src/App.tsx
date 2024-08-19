import {useState} from "react";
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState<number>(0)

    function Increment() {
        setCount((prevCount: number) => prevCount + 1)
    }

  return (
    <>
        <Button onClick={Increment} variant='outline'>Click me</Button>
        {count}
    </>
  )
}

export default App
