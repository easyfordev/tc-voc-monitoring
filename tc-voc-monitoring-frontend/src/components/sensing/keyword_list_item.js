import React from 'react';

const KeywordListItem = (props) => {
// const VideoListItem = ( {video, onVideoSelect} ) => {

    const video = props.video; 
    const onVideoSelect = props.onVideoSelect; // 위에서 명시했으므로 생략
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        // li 클릭할때마다 부모에게 props로 넘기기!
        <li onClick={ () => onVideoSelect(video) } className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} alt="thumbnail of video" />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>

        </li>
    );
  
}

export default KeywordListItem;
