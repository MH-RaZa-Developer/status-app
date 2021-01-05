import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Post = (props) => {

    //console.log(props);

    const {title, body, id} = props.post;

    return (
        <div className="container mt-5">
            <Jumbotron>
                <h3>{title}</h3>
                <p>
                    {body}
                </p>
                <p>
                    <Link to={`/post/${id}`}><Button variant="primary">Read more</Button></Link>
                </p>
            </Jumbotron>
        </div>
    );
};

export default Post;