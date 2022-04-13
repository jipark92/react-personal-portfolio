import React from 'react'

export default function Projects(props) {
    return (
        <div className="projects">
            <div className="image-container">
                <img src={props.img} />
            </div>
            <div className="info-container">
                <div className='name-container'> 
                    <p><b>Project:</b> <u>{props.name}</u></p>
                </div>
                <div className="detail-container">
                    <p><b>Detail:</b> {props.description}</p>
                </div>
                <p><b>Category:</b> {props.type} </p>
                <div className="links-container">
                    <div className="live-container">
                        <a href={props.live} target="_blank">Live</a>
                        <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/344/external-live-radio-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" className="live-logo"/>
                    </div>
                    <div className="source-container">
                        <a href={props.repo} target="_blank">Source</a>
                        <img src="https://img.icons8.com/plasticine/344/github.png" className="github-logo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
