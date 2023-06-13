import React from "react";

function Post({ post }) {
  return (
    <div className="mt-4 mb-2 text-sm">
      <p>{post.text}</p>
      {post?.url ? (
        <div className="flex flex-row mt-2">
          <p className="font-bold">URL: </p>
          <a href={post.url} className="ml-2 font-semibold text-blue-700">
            {post.url}
          </a>
        </div>
      ) : null}
      {post?.image ? (
        <img
          style={{ objectFit: "contain" }}
          src={post.image}
          class="w-full h-64 mt-2"
          alt="Post Upload"
        />
      ) : null}
    </div>
  );
}

export default Post;
