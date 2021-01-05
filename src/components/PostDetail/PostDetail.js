import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Jumbotron} from 'react-bootstrap';
import CommentCard from '../CommentCard/CommentCard';

const PostDetail = () => {

    const {id} = useParams();

    const [post, setPost] = useState({});

    const [comment, setComment] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])


    return (
        <div className="container">
            <h1 className="text-center">Post No: {post.id}</h1>
            <Jumbotron>
                <h3><strong className="text-primary">Post Title: </strong>{post.title}</h3>
                <p>
                    {post.body}
                </p>
                <h3>Comment: </h3>
                {
                    comment?.map(com => <CommentCard com={com}></CommentCard>)
                }
            </Jumbotron>
        </div>
    );
};

export default PostDetail;