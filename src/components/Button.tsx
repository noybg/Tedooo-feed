import React from 'react';

type ButtonProps = {
    className: string;
    onClick?: () => void;
    color?: string;
    children: React.ReactNode;
}

export const Button = ({ children, onClick, className }: ButtonProps) => {
    return (
       <>
       <button className={className} onClick={onClick}>{children}</button>
       </>
    )
}