import Button from "./Button"

/* eslint-disable react/prop-types */
const Counter = ({count, increment, decrement, id}) => {
    return (
        <div className="text-center border-2 p-2">
            <h1 className="font-bold text-2xl text-green-500 mb-3">{count}</h1>
            <div className="flex items-center gap-4">
                <Button todo={() => increment(id)}>Increment</Button>
                <Button todo={() => decrement(id)}>decrement</Button>
            </div>
        </div>
    )
}

export default Counter