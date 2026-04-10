'use client'
import { use } from "react";


const Posts = ({postPromise}) => {
    const posts = use(postPromise)
    console.log("posts in posts component", posts);
    return (
        <div>
            <h2 className="text-4xl">Posts: {posts.length}</h2>
        </div>
    );
};

export default Posts;