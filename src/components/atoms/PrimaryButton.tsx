
const PrimaryButton = (props: {label: string, classes?: string}) => {
    return (
        <button className={`text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-xl ${props.classes}`}>
            {props.label}
        </button>
    )
}

export default PrimaryButton