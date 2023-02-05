import Post from "../post/Post";
import "./posts.css";

import React from "react";

export default function Posts({ posts }) {
	return (
		<div className="posts">
			{posts.map((post) => (
				<Post post={post} />
			))}
		</div>
	);
}
