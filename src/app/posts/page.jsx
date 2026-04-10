import Posts from "@/components/Posts";
import React, { Suspense } from "react";
const PostsPage = () => {
  const postPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json(),
  );
  return (
    <div>
      <Suspense fallback={<h3 className="text-3xl">Loading posts...</h3>}>
        <Posts postPromise={postPromise} />
      </Suspense>
    </div>
  );
};

export default PostsPage;
