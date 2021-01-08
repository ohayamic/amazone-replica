import React from 'react'
import {withRouter } from 'react-router-dom'
import {auth} from '../firebase'

const SignOut = ({history}) => {
    auth.signOut()
    history.push('/')
    return (
        <div>
            <h5>Signed Out</h5>
        </div>
    )
}

export default withRouter(SignOut)
