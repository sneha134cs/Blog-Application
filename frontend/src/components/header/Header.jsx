import "./header.css";

export default function Header() {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSmall">React & Node</span>
				<span className="headerTitleLarge">Blog</span>
			</div>
			<img
				src="https://images.pexels.com/photos/112141/pexels-photo-112141.png"
				alt=""
				className="headerImg"
			/>
		</div>
	);
}
