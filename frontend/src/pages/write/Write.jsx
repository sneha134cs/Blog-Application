import { useContext, useEffect, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import Select from "react-select";

export default function Write() {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [file, setFile] = useState(null);
	const [categories, setCategories] = useState([]);
	const [selectedCat, setSelectedCat] = useState([]);
	const { user } = useContext(Context);

	useEffect(() => {
		try {
			const getCategories = async () => {
				const res = await axios.get("/categories");
				setCategories(Array.from(res.data, (r) => r.name));
			};
			getCategories();
		} catch (err) {}
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPost = {
			username: user.username,
			title,
			desc,
			categories: selectedCat,
			review: [],
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			newPost.photo = filename;
			try {
				await axios.post("/upload", data);
			} catch (err) {}
		}
		try {
			const res = await axios.post("/posts", newPost);
			window.location.replace("/post/" + res.data._id);
		} catch (err) {}
	};

	return (
		<div className="write">
			{file && (
				<img
					src={URL.createObjectURL(file)}
					alt=""
					className="writeImg"
				/>
			)}
			<form className="writeForm" onSubmit={handleSubmit}>
				<div className="writeFormGroup">
					<div className="catInput">
						<label htmlFor="fileInput">
							<i class="writeIcon fa-solid fa-plus"></i>
						</label>

						<input
							type="file"
							id="fileInput"
							style={{ display: "none" }}
							onChange={(e) => setFile(e.target.files[0])}
						/>
						<Select
							className="react-select-container"
							classNamePrefix="react-select"
							options={categories.map((opt) => ({
								label: opt,
								value: opt,
							}))}
							isMulti
							onChange={(opt) =>
								setSelectedCat(
									Array.from(opt, (op) => op.label)
								)
							}
						/>
					</div>
					<input
						type="text"
						placeholder="Title"
						className="writeInput"
						autoFocus={true}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="writeFormGroup">
					<textarea
						placeholder="Write your story..."
						type="text"
						className="writeInput writeText"
						onChange={(e) => setDesc(e.target.value)}
					></textarea>
				</div>
				<button className="writeSubmit" type="submit">
					Publish
				</button>
			</form>
		</div>
	);
}
