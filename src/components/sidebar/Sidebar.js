import React from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied
} from 'react-icons/md';

import { logout } from '../../redux/actions/auth.action';
import './_sidebar.scss';


const Sidebar = ( {sidebar, handleToggleSidebar} ) => {

    const dispatch = useDispatch();

    const logOutHandler = () => {
        dispatch(logout());
    }
    return (
        <nav className={sidebar ? `sidebar open`: `sidebar`} onClick = {() => handleToggleSidebar(false)}>
            <Link to="/">
            <li>
                <MdHome size = {23}/>
                <span>Home</span>
            </li>
            </Link>
            <li>
                <MdSubscriptions size = {23}/>
                <span>Subscriptions (dummy for now) </span>
            </li>
            <li>
                <MdThumbUp size = {23}/>
                <span>Liked Videos (dummy for now) </span>
            </li>
            <li>
                <MdLibraryBooks size = {23}/>
                <span>Library (dummy for now) </span>
            </li>
            <li>
                <MdHistory size = {23}/>
                <span>History (dummy for now) </span>
            </li>
            <li>
                <MdSentimentDissatisfied size = {23}/>
                <span>IDK (dummy for now) </span>
            </li>
            <hr/>

            <li onClick = {logOutHandler}>
                <MdExitToApp size = {23}/>
                <span>Log Out (works)</span>
            </li>

            <hr/>
        </nav>
    )
}

export default Sidebar
