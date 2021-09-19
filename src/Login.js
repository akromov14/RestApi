import React, { useState } from 'react'
import axios from 'axios';
import { setUserSession } from './Utils/Common';

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setError(null);
        setLoading(true);
        // link "`https://{subdomain}.ox-sys.com/security/auth_check" ishlamadi shuning uchun vazifa oxirigacha yetmadi:( 
        axios.post(`https://subdomain.ox-sys.com/security/auth_check`, {
            username: username,
            password: password
        }).then(response => {
            setLoading(true);
            setUserSession(response.data.token, response.data.user)
            props.history.push('/dashboard')
            
        }).catch(error => {
            setLoading(true);
            if(error.response.status === 401 || error.response.status === 400){
                setError(error.response.data.message)
            }else{
                setError("Username yoki Parol notogri terildi")
            }
            
        })


      
    }

    return (
        <div>
            Login <br/><br/>
            <div>
                Username<br/>
                <input type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div>
                Password<br/>
                <input type="password"
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                />
            </div><br/>
            {error && <div className="error">{error}</div>}
            <input type="button" value={loading ? "Loading..." : "Login"} disabled={loading} onClick={handleLogin}/>
        </div>
    )
}

export default Login;
