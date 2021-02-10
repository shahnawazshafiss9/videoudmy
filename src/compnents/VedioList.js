import React from 'react'
import VedioItem from './VedioItem'

const VedioList = ({vedios, onVideoSelect}) => {
    const renderList = vedios.map((vedio) => {
        return <VedioItem key={vedio.id.videoId} onVideoSelect={onVideoSelect} vedio={vedio} />
    });

    return <div className="ui relaxed divided list">{renderList}</div>
}

export default VedioList
