

const SecondaryButton = (props: {label: string, classes?: string, onAction: () => void}) => {
    return (
        <div>
            <button className={`bg-transparent hover:text-white py-2 px-4 rounded-lg hover:shadow-lg ${props.classes}`} onClick={props.onAction}>
                <div className="text-sm">{props.label}</div>
            </button>
        </div>
    )
}

export default SecondaryButton