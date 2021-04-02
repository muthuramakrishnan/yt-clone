import React, { useEffect, useState } from 'react';
import { AiFillEye } from 'react-icons/ai'
import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {useHistory} from 'react-router-dom';

import request from '../../api';
import './_video.scss'



const Video = ({video, channelScreen}) => {

    const { id, snippet: {channelId, channelTitle, title: videoTitle, publishedAt, thumbnails: {medium}}, contentDetails } = video;
    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);

    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format("mm:ss");

    const history = useHistory();

    const _videoId = id ?.videoId || contentDetails?.videoId || id;
    /* since we don't get the view count / duration properly in the inital api call, we make one more api call*/
    useEffect(() => {
        const get_video_details = async () => {
            const {data: {items}} = await request('/videos',{
                params: {
                    part: 'contentDetails,statistics',
                    id: _videoId
                }
            })
            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount);
        }
        get_video_details();
    }, [_videoId]);

    useEffect(()=> {
        const get_channel_icon = async () => {
            const {data: {items}} = await request('/channels',{
                params: {
                    part: 'snippet',
                    id: channelId
                }
            })
            setChannelIcon(items[0].snippet.thumbnails.default) 
        }
        get_channel_icon()
    }, [channelId]);

    const handleVideoClick = () => {
        history.push(`/watch/${_videoId}`);
    }

    return (
        <div className="video" onClick={handleVideoClick}>

            {/* video thumbnail */}
            <div className="video__top">
                {/* <img src={medium.url} alt=""/> */}
                <LazyLoadImage src={medium.url} effect="blur"/>
                <span className="video__top__duration">{_duration}</span>
                
            </div>

            {/* title displays below the thumbnail */}
            <div className="video__title">
                {videoTitle}
            </div>

            {/* video details */}
            <div className="video__details">
                <span>
                    <AiFillEye/> {numeral(views).format("0.a")} views •
                    <span>{moment(publishedAt).fromNow()}</span>
                </span>
            </div>

            {/* channel details */}
            { !channelScreen &&
                (
                    <div className="video__channel">
                        {/* <img src={channelIcon?.url} alt=""/> */}
                        <LazyLoadImage src={channelIcon?.url} effect="blur"/>
                        <p>{channelTitle}</p>
                    </div>
                )
            }

        </div>
    )
}

export default Video
