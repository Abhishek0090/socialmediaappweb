import React from 'react'
import Post from '../post/Post'
import "./posts.scss"
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';


const Posts = () => {

    const { isLoading, error, data } = useQuery(['posts'], () =>

        makeRequest.get("/posts").then((res) => {
            return res.data;
        })
    );

    console.log(data);

    return (

        <div className='posts'>
        {/* <div>Multiple Ternary Operators</div> */}
            {error
                ? "Something Went Wrong"
                : isLoading 
                    ? "loading"
                    : data.map(post => (
                        <Post post={post} key={post.id} />
                    ))
            }
        </div>
    )
}

export default Posts