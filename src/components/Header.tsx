import React, { useState, useRef } from 'react';
import logo from '../assets/tedooo-logo.png';
import { Button } from './Button';
import { HomeIcon } from './icons/HomeIcon';
import { MessageIcon } from './icons/MessageIcon';
import { BellIcon } from './icons/BellIcon';

export const Header = () => {
    const [activeButton, setActiveButton] = useState<string>('home'); 
    const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
    const searchInputRef = useRef<HTMLInputElement | null>(null); 

    const handleButtonClick = (button: string) => {
        setActiveButton(button); 
    };

    const handleFocus = () => {
        if (window.matchMedia("(max-width: 600px)").matches) {
            setIsSearchFocused(true);
        }
    };

    const handleBlur = () => {
        setIsSearchFocused(false); 
    };

    return (
        <div className="header">
            <div className="container header-container">
                <div className="navbar-left">
                    <img src={logo} />
                    <div className="search-container">
                        <input className="search" type="text" placeholder='Search'
                            ref={searchInputRef} 
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            />
                    </div>
                </div>
        
                <div className="navbar-right" style={{ display: isSearchFocused && window.matchMedia("(max-width: 600px)").matches ? 'none' : 'grid' }}>
                    <Button 
                        className={activeButton === 'home' ? 'navbar-btn active' : 'navbar-btn'} 
                        onClick={() => handleButtonClick('home')}>
                        <HomeIcon color={activeButton === 'home' ? '#2DB8A1' : undefined} /> 
                        <span className="txt-btn">Home</span>
                    </Button>
                    <Button 
                        className={activeButton === 'messaging' ? 'navbar-btn active' : 'navbar-btn'} 
                        onClick={() => handleButtonClick('messaging')}>
                        <MessageIcon color={activeButton === 'messaging' ? '#2DB8A1' : undefined} /> 
                        <span className="txt-btn">Messaging</span>
                    </Button>
                    <Button 
                        className={activeButton === 'notifications' ? 'navbar-btn active' : 'navbar-btn'} 
                        onClick={() => handleButtonClick('notifications')}>
                        <BellIcon color={activeButton === 'notifications' ? '#2DB8A1' : undefined} /> 
                        <span className="txt-btn">Notifications</span>
                    </Button>
                    <div className="avatar-container">
                        <img className="avatar" src="https://images.tedooo.com/biz/62e984eca4ff286b57699578/01fda2c9-85c8-44f8-a1c7-f20a628c9dfb.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
