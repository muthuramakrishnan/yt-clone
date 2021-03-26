import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import './_watchScreen.scss';
import VideoMetaData from '../../components/videoMetaData/VideoMetaData';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';
import Comments from '../../components/comments/Comments';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoById, getRelatedVideos } from '../../redux/actions/video.action';

const WatchScreen = () => {

    const { id } = useParams();

    const dispatch = useDispatch();
    const { video, loading } = useSelector(state => state.selectedVideo);
    const { videos, loading: relatedVideosLoading } = useSelector(state => state.relatedVideo);
    
    useEffect(() => {
        dispatch(getVideoById(id));
        dispatch(getRelatedVideos(id));
    }, [dispatch,id]);

    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen__player">
                    <iframe src={`https://www.youtube.com/embed/${id}` }frameBorder="0" title={video?.snippet?.title} allowFullScreen width='100%' height='100%'></iframe>
                </div>

                {/* has description title, channel name, likes etc */}
                {
                    !loading? <VideoMetaData video={video} videoId={id}/> :null
                }
                <Comments videoId = {id} totalComments = {video?.statistics?.commentCount}/>
            </Col>
            <Col lg={4}>
                {
                    !loading && videos?.filter(video=>video.snippet).map((video)=>(
                        <VideoHorizontal video={video} key={video.id.videoId} />
                    ))
                }
            </Col>
        </Row>
    )
}

export default WatchScreen
