import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getCommentsById } from '../../redux/actions/comments.action';
import Comment from '../comment/Comment';
import './_comments.scss';

const Comments = ({videoId, totalComments}) => {

    const dispatch = useDispatch();
    const comments = useSelector(state => state.commentList.comments);

    const _comments = comments?.map((comment) => comment.snippet.topLevelComment.snippet);

    const [text, setText] = useState('');

    useEffect(() => {
        dispatch(getCommentsById(videoId))
    }, [dispatch, videoId])

    const handleComment = (e) => {
        e.preventDefault();

        if(text.length===0) return;
        dispatch(addComment(videoId, text));
        setText('');
    }
    return (
        <div className="comments">
            <p>{totalComments} comments</p>

            {/* form to submit comments */}
            <div className="comments__form d-flex w-100 my-2">
                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg" alt="" className="rounded-circle mr-3"/>
                <form onSubmit={handleComment} className="d-flex flex-grow-1">
                    <input type="text" className="flex-grow-1" placeholder="Write a comment..." value={text} onChange={e=>setText(e.target.value)}/>
                    <button className="border-0 p-2">Comment</button>
                </form>
            </div>

            {/* comment list */}
            <div className="comments__list">
                {
                    _comments?.map((comment, index)=>(
                        <Comment comment = {comment} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Comments
