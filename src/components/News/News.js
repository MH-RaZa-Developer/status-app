import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const News = () => {

    const [news, setNews] = useState([]);
    const news1 = news.slice(0, 50);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setNews(data))
    }, [])

    return (
        <div>
            {
                news1.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default News;