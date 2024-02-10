const Button = ({handler, children}) => {
    return (
        <button
        onClick={handler}
        className="bg-blue-600 px-2 py-1 text-white font-bold text-md rounded-md">
            {children}
        </button>
    )
}

export default Button