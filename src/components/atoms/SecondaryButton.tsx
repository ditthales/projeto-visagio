

const SecondaryButton = (props: {label: string, classes?: string}) => {
    return (
        <div>
            <button className={`bg-transparent hover:text-white py-2 px-4 rounded-lg hover:shadow-lg ${props.classes}`}>
                {props.label}
            </button>
        </div>
    )
}

export default SecondaryButton