
interface CloseCartButtonProps {
    onClose: () => void;
}

const CloseCartButton:React.FC<CloseCartButtonProps> = ({ onClose }) => {
    return (
        <button className="w-10 h-10" onClick={onClose}>
            <p>X</p>
        </button>
    )
}

export default CloseCartButton