import React,{useState} from 'react'
import { useStore } from '../store/useStore'

const Login = () => {
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const {state,dispatch} = useStore();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type : "login",payload : {name,password}});
        setName("")
        setPassword("")
    }

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch({type : "logout"});
    }

    return (
        state.userdata.loggedIn ? 
        <div className="col-md-3" style={loginStyle}>
            <button onClick={handleLogout} className="btn btn-primary">Logout</button>
        </div> :
        <div className="col-md-3" style={loginStyle}>
            <p></p>
            <form onSubmit={handleSubmit}>
                <input  
                    className="form-control form-control-lg"
                    style={formStyle}
                    type="text"
                    value={name}
                    placeholder="Enter your name.."
                    onChange={(e) => { setName(e.target.value) }}
                />
                <input  
                    className="form-control form-control-lg"
                    style={formStyle}
                    type="text"
                    value={password}
                    placeholder="Enter password.."
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

const loginStyle = {
    marginTop : '50px',
    marginLeft : 'auto',
    marginRight : 'auto',
    marginBottom : '100px',
    align : 'center',
    backgroundColor : "#f2f2f2",
    padding : "30px",
    height : "500px"
}

const formStyle = {
    marginBottom : '50px',
}

export default Login;
