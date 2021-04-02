import React, { Fragment, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Video from '../../components/video/Video';
import { getVideosByChannel } from '../../redux/actions/video.action';

const ChannelScreen = () => {

    const dispatch = useDispatch();
    const { channelId } = useParams();

    useEffect(() => {
        dispatch(getVideosByChannel(channelId));
    }, [dispatch, channelId]);
    
    const { videos, loading } = useSelector(state => state.channelVideos);
    return (
        <Fragment>
            <Container>
                <Row className="mt-2">
                    {
                        !loading ? videos?.map(video => <Col md={4} lg={3}>
                            <Video video={video} channelScreen>

                            </Video>
                        </Col>): null
                    }
                </Row>
            </Container>
        </Fragment>
    )
}

export default ChannelScreen
