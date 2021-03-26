import firebase from 'firebase/app';
import auth from '../../firebase';
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../actionType';

export const login = () => async dispatch => {
    try{

        dispatch({type: LOGIN_REQUEST});

        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');
        
        const res = await auth.signInWithPopup(provider);

        const accessToken = res.credential.accessToken;
        const profile ={
            name: res.additionalUserInfo.profile.given_name,
            photoURL: res.additionalUserInfo.profile.picture
        }
        
        sessionStorage.setItem('ytc-access-token', accessToken);
        sessionStorage.setItem('ytc-user', JSON.stringify(profile));

        dispatch({type: LOGIN_SUCCESS, payload: accessToken});
        dispatch({type: LOAD_PROFILE, payload: profile});

    }
    catch(error){
        console.error(error.message);
        dispatch({type: LOGIN_FAIL, payload: error.message})
    }
}

export const logout = () => async dispatch => {
    await auth.signOut();
    dispatch({type: LOGOUT});

    sessionStorage.removeItem('ytc-access-token');
    sessionStorage.removeItem('ytc-user');
}