import "./single.css";
import SideBar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/singlePost/SinglePost";

export default function single() {
	return (
		<div className="single">
			<SinglePost />
			<SideBar />
		</div>
	);
}
