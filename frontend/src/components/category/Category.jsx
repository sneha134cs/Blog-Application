import "./category.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Category({ category, mode }) {
	const location = useLocation();
	const path = location.pathname.split("/")[2];

	const [post, setPost] = useState({});

	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get("/posts/" + path);
			setPost(res.data);
		};
		getPost();
	}, []);

	const handleRemove = async () => {
		try {
			await axios.put(`/posts/${post._id}`, {
				username: post.username,
				categories: post.categories.filter(
					(arrayItem) => arrayItem !== category
				),
			});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="category">
			<span className="name">{category}</span>
			{mode && (
				<i
					class="categoryRemove fa-solid fa-xmark"
					onClick={handleRemove}
				></i>
			)}
		</div>
	);
}
