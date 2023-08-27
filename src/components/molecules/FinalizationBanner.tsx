import { PRIMARY_BUTTON } from "../../constants/constants"
import PrimaryButton from "../atoms/PrimaryButton"

const FinalizationBanner = (props:{isOpen:boolean, onClose: () => void}) => {

    const gerarCodigo = (tamanho: number, caracteres: string): string => {
        let result = '';
        const tamanhoCaracteres = caracteres.length;
    
        for (let i = 0; i < tamanho; i++) {
            const randomIndex = Math.floor(Math.random() * tamanhoCaracteres);
            result += caracteres.charAt(randomIndex);
        }
    
        return result;
    }

    const gerarPedido = () => {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const codigo = "#" + gerarCodigo(8, caracteres);
        return codigo;
    }

    const gerarCorreios = () => {
        const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numeros = '0123456789';

        const codigo = "BR" + gerarCodigo(9, numeros) + gerarCodigo(2, letras);

        return codigo;
    }

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center ${props.isOpen ? "" : "hidden"}`}>
            <div className=" px-10 flex flex-col justify-center items-center w-1/2 h-1/2 gap-4 sm:gap-8 bg-white rounded-3xl">
                <h3 className=" text-sm sm:text-2xl font-bold">Compra Finalizada com sucesso!</h3>
                <p className="text-xs sm:text-lg text-justify">{"Acompanhe seu pedido através do código: " + gerarPedido()}</p>
                <p className=" text-xs sm:text-lg text-justify">{"O código de rastreio é: " + gerarCorreios()}</p>
                <PrimaryButton label="Entendi" classes={PRIMARY_BUTTON["GREEN"]} onAction={props.onClose}></PrimaryButton>
            </div>
        </div>
    )
}

export default FinalizationBanner