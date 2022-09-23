import { useState, useEffect } from "react";

const Hooks = () => {
    let idade = 21;
    const [novaIdade, setNovaIdade] = useState(24);

    const changeAge = () => {
        idade = 22;
        console.log(idade);
    }

    const changeNewAge = () => {
        setNovaIdade(26);
    }

    useEffect(() => {
        console.log("Testando!");
    })

    return (
        <div>
            <p>Idade: {idade}</p>
            <button onClick={changeAge}>Mudar idade</button>
            <p>Idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar nova idade</button>
        </div>
    )
}

export default Hooks