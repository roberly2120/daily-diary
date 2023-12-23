import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Journal from "./Journal";

export default function Posts (props) {
    const {posts} = props;
    const [selectedPost, setSelectedPost] = useState({})
    const navigate = useNavigate();
    
    return (
        <div className="posts-div">
            <div className="post-list">
                <button id="create-post-button" onClick={() => navigate('/journal')}>Create New Post</button>
                <ul>
                {posts.map((post, index) => {
                    return (
                            <li className="post-item" onClick={() => setSelectedPost(post)}>{post.title} | {post.date}</li>
                    )
                })}
                </ul>
            </div>
            <div className="current-post">
                {selectedPost.id ?
                <div className="selected-post-container"> 
                <h4>{selectedPost.title}</h4>
                <p>{selectedPost.text}</p>
                </div> 
                : 'Select a Post'}
            </div>
        </div>
    )
}