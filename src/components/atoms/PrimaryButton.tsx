
const PrimaryButton = (props: {label: string, classes?: string, onAction: () => void}) => {

    const handleAction = () => {
        props.onAction();
    }

    const shouldDisable = () => {
        if (props.classes == undefined) {
            return false
        } else {
            return props.classes.includes("disabled")
        }
    }

    return (
        <button className={`text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-xl ${props.classes}`} onClick={handleAction} disabled={shouldDisable()}>
            {props.label}
        </button>
    )
}

export default PrimaryButton