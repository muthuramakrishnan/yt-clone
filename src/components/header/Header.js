import React, { useState } from 'react'
import './_header.scss';

import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';
import { useHistory } from 'react-router';

const Header = ( {handleToggleSidebar} ) => {

    const [input, setInput] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/${input}`);
    }

    return (
        <div className="border border-dark header">
            <FaBars className="header__menu" size = {26} onClick={handleToggleSidebar}/>

            <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="ytlogo" className="header__logo"/>

            <form onSubmit = {handleSubmit}>
                <input type="text" placeholder="search" value={input} onChange={e => setInput(e.target.value)}/>
                <button type="submit">
                    <AiOutlineSearch size={22}/>
                </button>
            </form>

            <div className="header__icons">
                <MdNotifications size={28}/>
                <MdApps size={28}/>
                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg" alt="avatar"/>
            </div>
        </div>
    )
}

export default Header;
