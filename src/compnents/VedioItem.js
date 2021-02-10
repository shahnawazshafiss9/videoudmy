import './vidioitem.css'
import React from 'react'


const VedioItem = ({ vedio, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(vedio)} className="video-item item">
            <img className="ui image" src={vedio.snippet.thumbnails.medium.url} alt={vedio.snippet.title} />
            <div className="content">
                <div className="header">{vedio.snippet.title}</div>
            </div>
        </div>
    )
}

export default VedioItem
