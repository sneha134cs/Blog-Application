import "./categories.css";
import { useState } from "react";
import Category from "../category/Category";
import SelectCategory from "../selectCategory/SelectCategory";

export default function Categories({ post, mode }) {
	return (
		<div className="categories">
			{categories.map((category) => (
				<div className="category">
					<span className="name">{category}</span>
					<i class="categoryRemove fa-solid fa-xmark"></i>
				</div>
			))}
		</div>
	);
}
