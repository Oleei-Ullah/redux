import Button from "./Button"

const Counter = ({count, increment, decrement, id}) => {
    return (
        <div className="text-center border-2 p-2">
            <h1 className="font-bold text-2xl text-green-500 mb-3">{count}</h1>
            <div className="flex items-center gap-4">
                <Button handler={() => increment(id)}>Increment</Button>
                <Button handler={() => decrement(id)}>decrement</Button>
            </div>
        </div>
    )
}

export default Counter