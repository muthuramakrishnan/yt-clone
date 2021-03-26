import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import CategoriesBar from '../../components/categoriesBar/CategoriesBar';
import Video from '../../components/video/Video';
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/video.action';

const HomeScreen = () => {

    const dispatch = useDispatch();
    const {videos, activeCategory} = useSelector(state => state.homeVideos)

    useEffect(() => {
        dispatch(getPopularVideos());
    }, [dispatch]);

    //this function will get the next data -> paginate
    const fetchData = () => {
        if(activeCategory === 'All')
        dispatch(getPopularVideos());
        else dispatch(getVideosByCategory(activeCategory));
    }

    return (
        <Container>
            <CategoriesBar/>
            
                <InfiniteScroll
                    dataLength={videos.length}
                    next = {fetchData}
                    hasMore = {true}
                    loader = {
                        <div className="spinner-border text-danger d-block mx-auto"></div>
                    }
                    className="row">
                    {
                        videos.map((video)=>(
                            <Col lg={3} md={4} key={video.id?.videoId || video.id}>
                                <Video video={video}/>
                            </Col>
                        ))
                    }
                </InfiniteScroll>
           
        </Container>
    )
}

export default HomeScreen
