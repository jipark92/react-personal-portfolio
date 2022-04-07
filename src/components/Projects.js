import React from 'react'

export default function Projects(props) {
    return (
        <div className="projects">
            <div className="image-container">
                <img src={props.img} />
            </div>
            <div className="info-container">
                <p><b>Project:</b> {props.name}</p>
                <p><b>Detail:</b> {props.description}</p>
            </div>
            <div className="links-container">
                <a href={props.live}>Live</a>
                <a href={props.repo} target="_blank">Repo</a>
            </div>
        </div>
    )
}
