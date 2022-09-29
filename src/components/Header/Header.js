import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h2 className='header-title'><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Nur Active club</h2>
        </div>
    );
};

export default Header;