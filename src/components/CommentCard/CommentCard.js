import React, {useState, useEffect} from 'react';
import {Media} from 'react-bootstrap';

const CommentCard = (props) => {

    return (
        <Media>
            <img
                width={64}
                height={64}
                className="mr-3"
                src="https://i.picsum.photos/id/948/200/200.jpg?hmac=h64Z3zl6jLB_DtaWe83fhSQY-r_Sum7pndIJrZZ9rtQ"
                alt="Generic placeholder"
            />
            <Media.Body>
                <h5>{props.com.name}</h5>
                <p>
                {props.com.body}
                </p>
            </Media.Body>
        </Media>
    );
};

export default CommentCard;