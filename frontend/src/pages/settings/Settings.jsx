import SideBar from "../../components/sidebar/SideBar";
import "./settings.css";

export default function Settings() {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">
						Update Your Account
					</span>
					<span className="settingsDeleteTitle">Delete Account</span>
				</div>
				<form className="settingsForm">
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
							src="https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg"
							alt=""
						/>
						<label htmlFor="fileInput">
							<i className="settingsPPIcon fa-regular fa-circle-user"></i>
						</label>
						<input
							type="file"
							id="fileInput"
							style={{ display: "none" }}
						/>
					</div>
					<label>Username</label>
					<input type="text" placeholder="Enter username..." />
					<label>Email</label>
					<input type="text" placeholder="xyz@domain.com" />
					<label>Password</label>
					<input type="password" />
					<button className="settingsSubmit">Update</button>
				</form>
			</div>
			<SideBar />
		</div>
	);
}
