import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="sticky top-0 flex items-center justify-between md:px-20 md:py-8 p-5 navbar">
            <Link className='text-xl font-bold primary-accent' href="/">
                🚀 Mak
            </Link>
            <Link className='flex font-bold text-xl secondary-accent' href="mailto:madhavi.m@northeastern.edu">
                📧 Contact me
            </Link>
        </nav>
    );
};

export default Navbar;