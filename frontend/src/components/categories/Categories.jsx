import "./categories.css";
import { useState } from "react";
import Category from "../category/Category";

export default function Categories({ post, mode }) {
	return (
		<div className="categories">
			{post.categories &&
				post.categories.map((category) => (
					<Category category={category} mode={mode} />
				))}
		</div>
	);
}
