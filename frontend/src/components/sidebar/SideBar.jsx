import "./sidebar.css";

export default function SideBar() {
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
					Iusto in perferendis accusantium blanditiis sint dicta,
					nobis architecto obcaecati veritatis consequatur a veniam
					hic libero vel inventore est cum corrupti nisi.
				</p>
			</div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Food</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Books</li>
                    <li className="sidebarListItem">Tech</li>
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
