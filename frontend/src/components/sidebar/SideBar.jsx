import { useContext, useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SideBar() {
	const [categories, setCategories] = useState([]);
	
	const {user} = useContext(Context)
	const PF = "http://localhost:5000/images/"

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
					src={PF + user.profilePic}
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
