import React from 'react';

type IconProps = {
    color?: string;
}

export const MessageIcon = ({ color = '#737877' }: IconProps) => {
    return (
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='navbar-icon'>
        <path d="M14.75 7.62502C14.7526 8.61492 14.5213 9.59144 14.075 10.475C13.5458 11.5338 12.7323 12.4244 11.7256 13.047C10.7189 13.6696 9.55868 13.9996 8.375 14C7.3851 14.0026 6.40859 13.7713 5.525 13.325L1.25 14.75L2.675 10.475C2.2287 9.59144 1.99742 8.61492 2 7.62502C2.00046 6.44134 2.33046 5.28116 2.95304 4.27443C3.57562 3.26771 4.46619 2.4542 5.525 1.92502C6.40859 1.47872 7.3851 1.24744 8.375 1.25002H8.75C10.3133 1.33627 11.7898 1.99609 12.8969 3.10317C14.0039 4.21024 14.6638 5.68676 14.75 7.25002V7.62502Z" 
            stroke={color} 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
        </svg>
    )
}