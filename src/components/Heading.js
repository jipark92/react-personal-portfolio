import React from 'react'
import { Link } from 'react-router-dom'

export default function Heading() {
    return (
        <header className="title-container">
            <nav>
                <ul>
                    <Link to='/'>
                        <li>ALL</li>
                    </Link>
                    <Link to='/htmlcss'>
                        <li>HTML/CSS</li>
                    </Link>
                    <Link to='/javascript'>
                        <li>Javascript</li>
                    </Link>
                    <Link to='/react'>
                        <li>React</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}
