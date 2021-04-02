import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './reducers/auth.reducer';
import { channelDetailReducer } from './reducers/channel.reducer';
import { commentListReducer } from './reducers/comments.reducer';
import { channelVideosReducer, homeVideosReducer, relatedVideoReducer, searchVideoReducer, selectedVideoReducer, subscriptionsChannelReducer } from './reducers/videos.reducer';

const initialState = {}

const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelDetailReducer,
    commentList: commentListReducer,
    relatedVideo: relatedVideoReducer,
    searchVideo: searchVideoReducer,
    subscriptionsChannel: subscriptionsChannelReducer,
    channelVideos: channelVideosReducer
})
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;