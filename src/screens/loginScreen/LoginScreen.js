import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './_loginScreen.scss';

import { login } from '../../redux/actions/auth.action'
import { useHistory } from 'react-router';

const LoginScreen = () => {

    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.auth.accessToken);
    const history = useHistory();

    const handleLogin = () => {
        dispatch(login());
    }

    useEffect(()=>{
        if(accessToken){
            history.push('/')
        }
    },[accessToken, history]);
    
    return (
        <div className="login">
            <div className="login__container">
                Youtube Clone
                <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="ytlogo"/>
                <button onClick={handleLogin}>Login with Google</button>
                <p>This Project is made using Yoututbe Data API, React and Redux</p>
            </div>
        </div>
    )
}

export default LoginScreen
