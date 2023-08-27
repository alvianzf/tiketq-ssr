"use client";

import React from 'react'
import Image from 'next'
import Logo from '../assets/Original Logo B.png'

export const Navbar = () => {
  return (
    <>
    <div className='container is-fluid'>
        <nav className="navbar level">
            <div className='level-right'>
                <div className='brand'>
                    <a href="/">
                        <img src={Logo.src}  className="nav-logo" alt="logo-brand" />
                    </a>
                </div>
            </div>
        </nav>
    </div>
    </>
  )
}
