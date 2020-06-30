import React from 'react';
import './VideoItem.css';


const VideoItem = ({video, onVideoSelect}) => {

    return (
        <div onClick={() => onVideoSelect(video)} className="video-item ui item">
        <div className="ui image">
            <img src={video.snippet.thumbnails.medium.url} alt="pic"/>
        </div>
        <div className="content">
            <div className="header">{video.snippet.title}</div>
        </div>
        
        </div>
        );
}

export default VideoItem;