import axios from 'axios';
import {useEffect,useState} from 'react';
function LoginForm() {
    const[password, setPassword] = useState('');
    const[username, setUsername] = useState('');
    const apiGetError = (api) => {
        const {response:{data}} = api
        console.log(data);
    }
    async function handleSubmit(e){
        e.preventDefault();
       
       const api = await axios.post('api/login',{username,password});
       if(api.status = 200){
        const {data:{message}} = api;
        console.log(message);
       }else{
        console.log(api);
       }
    }
    async function isLogged(e){
        e.preventDefault();
        try{const {api} = await axios('api/user')
        //apiGetError(api);
    }catch(e){
        apiGetError(e)
    }
    }
    return (<form onSubmit={handleSubmit}>
        <input type='text' placeholder='username' name='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type='password' placeholder='password'name='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type='submit'>Log In</button>
        <button onClick={isLogged}>Logged in?</button>
    </form>);
}

export default LoginForm; 