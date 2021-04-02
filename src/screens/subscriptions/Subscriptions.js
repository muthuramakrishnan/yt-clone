import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSubscribedChannel } from '../../redux/actions/video.action';
import { Container } from 'react-bootstrap';
import './_subscriptions.scss';

import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';

const Subscriptions = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSubscribedChannel());
    }, [dispatch]);

    const { loading, videos } = useSelector(state => state.subscriptionsChannel);

    return (
        <Container fluid>
            {
                !loading ? videos ?. map(video => <VideoHorizontal video={video} key={video.id} subScreen = {true} />): null
            }
        </Container>
    )
}

export default Subscriptions
