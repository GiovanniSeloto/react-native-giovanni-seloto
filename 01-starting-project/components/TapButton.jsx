export default function TapButton({ label, isSelect, ...props }) {
    return (
         <li>        {/*Operador "Ternário", onde isSelect é condição, actve é ativado, se não nada é ativado*/}
            <button className= { isSelect ? 'active' : undefined} {...props}>
                {label}
            </button>
        </li>
    )
}