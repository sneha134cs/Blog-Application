import { Link } from "react-router-dom";
import StarRating from "../starRating/StarRating";
import "./post.css";

export default function Post({ post }) {
	const PF = "http://localhost:5000/images/";

	return (
		<div className="post">
			{post.photo && (
				<Link className="link" to={`/post/${post._id}`}>
					<img className="postImg" src={PF + post.photo} alt="" />
				</Link>
			)}
			<div className="postInfo">
				<div className="postCats">
					{post.categories.map((category) => (
						<Link className="link" to={`/?category=${category}`}>
							<span className="postCat">{category}</span>
						</Link>
					))}
				</div>
				<Link className="link" to={`/post/${post._id}`}>
					<span className="postTitle">{post.title}</span>
				</Link>

				<span className="postDate">
					{new Date(post.createdAt).toDateString()}
				</span>
				<StarRating post={post} />

				<Link className="link" to={`/?user=${post.username}`}>
					<span className="postUser">{post.username}</span>
				</Link>
			</div>
			<p className="postDesc">{post.desc}</p>
		</div>
	);
}
