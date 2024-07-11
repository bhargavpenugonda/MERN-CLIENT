export default function Button({onClick,label}){
    return(
        <button onClick={onClick} className="btn">
            {label}
        </button>
    )
}
