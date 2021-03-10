import React from 'react'
import { withRouter } from 'react-router'

const SmartTextSwatch =({match}:any) =>{

    return(
        <div>
            <h2>{match.params.text}</h2>
            <h3>{match.path}</h3>
        </div>
    )
}

export default withRouter(SmartTextSwatch)