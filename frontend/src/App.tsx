import { useState } from "react";
import { Button } from "@/components/ui/button"

function App() {
    const [count, setCount] = useState<number>(0)

    function handleIncrement() {
        setCount((prevCount: number) => prevCount + 1)
    }

    return (
        <>
            <Button onClick={handleIncrement} variant='outline'>Click me</Button>
            {count}
        </>
    )
}

export default App
