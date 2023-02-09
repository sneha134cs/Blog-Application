import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import "./starRating.css";

export default function StarRating({ post }) {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	const [rate, setRate] = useState(0);

	const { user } = useContext(Context);

	useEffect(() => {
		const newReview = {
			username: post.username,
			rating: rating,
		};
		if (post.reviews)
			post.reviews = post.reviews.filter(
				(p) => p.username !== post.username
			);
		if (post.reviews) post.reviews.push(newReview);
		console.log(post.reviews);
		const updatePost = async () => {
			try {
				const res = await axios.put("/posts/" + post._id, {
					username: post.username,
					reviews: post.reviews,
				});
				console.log(res.data);
			} catch (err) {}
		};
		updatePost();
		let total = rate;
		if (post.reviews) {
			total =
				post.reviews.reduce((sum, review) => sum + review.rating, 0) /
				post.reviews.length;
		}
		setRate(total);
		console.log(post.reviews);
	}, [rating, post]);

	return (
		<div className="star-rating">
			{[...Array(5)].map((star, index) => {
				index += 1;
				return (
					<button
						type="button"
						key={index}
						className={index <= (hover || rating) ? "on" : "off"}
						onClick={() => setRating(index)}
						onMouseEnter={() => setHover(index)}
						onMouseLeave={() => setHover(rating)}
					>
						<i className="star fa-solid fa-star"></i>
					</button>
				);
			})}
			<span className="rating">{rate}</span>
		</div>
	);
}
