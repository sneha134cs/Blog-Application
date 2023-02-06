import "./categories.css";

export default function Categories({ categories }) {
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
