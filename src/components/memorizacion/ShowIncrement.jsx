import React, { memo } from 'react'
import { Button } from 'react-bootstrap'

const ShowIncrement = memo(({ increment }) => {
    console.log('Me volví a renderizar');
    return (
        <div>
            <Button onClick={() => increment(5)}>Incrementar</Button>
        </div>
    )
})

export default ShowIncrement