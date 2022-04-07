import React from 'react'

export default function Projects(props) {
    return (
        <div className="projects">
                <img src={props.img} />
                <p>{props.name}</p>
                <p>{props.description}</p>
        </div>
    )
}
