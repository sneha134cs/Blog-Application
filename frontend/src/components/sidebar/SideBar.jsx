import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SideBar() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const getCategories = async () => {
			const res = await axios.get("/categories");
			setCategories(res.data);
		};
		getCategories();
	}, []);

	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img
					src="https://images.pexels.com/photos/14339129/pexels-photo-14339129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Iusto in perferendis accusantium blanditiis sint dicta.
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					{categories.map((categories) => (
						<Link
							className="link"
							to={`/?category=${categories.name}`}
						>
							<li className="sidebarListItem">
								{categories.name}
							</li>
						</Link>
					))}
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebatTitle">FOLLOW US</span>
				<div className="sidebarSocial">
					<i className="sidebarIcon fa-brands fa-square-facebook"></i>
					<i className="sidebarIcon fa-brands fa-square-twitter"></i>
					<i className="sidebarIcon fa-brands fa-square-pinterest"></i>
					<i className="sidebarIcon fa-brands fa-square-instagram"></i>
				</div>
			</div>
		</div>
	);
}
