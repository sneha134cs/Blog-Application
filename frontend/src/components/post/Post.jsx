import "./post.css";

export default function Post() {
	return (
		<div className="post">
			<img
				className="postImg"
				src="https://images.pexels.com/photos/1083515/pexels-photo-1083515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt=""
			/>
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Music</span>
					<span className="postCat">Life</span>
				</div>
				<span className="postTitle">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Provident, suscipit eaque cumque adipisci ducimus eos saepe
				eveniet molestiae vero nulla nobis. Corrupti praesentium quas
				numquam! Voluptatem molestias nam omnis obcaecati. Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Provident, suscipit
				eaque cumque adipisci ducimus eos saepe eveniet molestiae vero
				nulla nobis. Corrupti praesentium quas numquam! Voluptatem
				molestias nam omnis obcaecati. Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Provident, suscipit eaque cumque
				adipisci ducimus eos saepe eveniet molestiae vero nulla nobis.
				Corrupti praesentium quas numquam! Voluptatem molestias nam
				omnis obcaecati. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Provident, suscipit eaque cumque adipisci
				ducimus eos saepe eveniet molestiae vero nulla nobis. Corrupti
				praesentium quas numquam! Voluptatem molestias nam omnis
				obcaecati.
			</p>
		</div>
	);
}
