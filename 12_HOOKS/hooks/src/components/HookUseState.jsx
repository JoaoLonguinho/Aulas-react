import { useState } from "react";

const HookUseState = () => {
    const [name, setName] = useState("");

    return (
        <div>
            {name && <h2>Olá, {name} tudo bem?</h2>}
            <div>
                {!name && <h2>Você ainda não possuí um nome, deseja colocar agora?</h2>}
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
        </div>
    )
}

export default HookUseState
