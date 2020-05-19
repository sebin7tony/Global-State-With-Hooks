import React from 'react'
import { useStore } from '../store/useStore'

const UserInfo = () => {
    const {state} = useStore();
    return (
        state.userdata.loggedIn ? 
        <div className="col-md-8" style={userStyle}>
            <h1>Welcome {state.userdata.currentUser.name}</h1>
            <pre><code>
                {JSON.stringify(state.userdata,0,4)}
            </code></pre>
        </div> :
        <div className="col-md-8" style={userStyle}>
            <h2>Please login to see the magic</h2>
        </div>
    )
}

const userStyle = {
    marginTop : '10px',
    marginLeft : 'auto',
    marginRight : 'auto',
    marginBottom : '100px',
    align : 'center',
    padding : "30px"
}

export default UserInfo
