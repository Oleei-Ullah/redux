import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="text-center border-2 p-2">
            <h1 className="font-bold text-2xl text-green-500 mb-3">{count}</h1>
            <div className="flex items-center gap-4">
                <button onClick={() => setCount(count + 1)} className="bg-blue-600 px-2 py-1 text-white font-bold text-md rounded-md">increment</button>

                <button onClick={() => setCount(count - 1)} className="bg-blue-600 px-2 py-1 text-white font-bold text-md">decrement</button>
            </div>
        </div>
    )
}

export default Counter