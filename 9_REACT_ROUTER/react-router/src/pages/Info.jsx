import React from 'react'
import { useParams } from 'react-router-dom'

const Info = () => {
    const { id } = useParams();
    return (
        <div>
            <h3>Mais infos sobre o produto: {id}</h3>
        </div>
    )
}

export default Info
