
const PrimaryButton = (props: {label: string, classes?: string, onAction: () => void}) => {

    const handleAction = () => {
        props.onAction();
    }

    return (
        <button className={`text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-xl ${props.classes}`} onClick={handleAction}>
            {props.label}
        </button>
    )
}

export default PrimaryButton