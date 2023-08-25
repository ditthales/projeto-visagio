
interface CloseCartButtonProps {
    onClose: () => void;
}

const CloseCartButton:React.FC<CloseCartButtonProps> = ({ onClose }) => {
    return (
        <button className="w-6 h-6 rounded-full bg-red-600 text-white shadow-md hover:shadow-xl" onClick={onClose}>
            <p>X</p>
        </button>
    )
}

export default CloseCartButton