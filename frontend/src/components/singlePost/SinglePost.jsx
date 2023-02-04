import "./singlePost.css"

export default function SinglePost(){
  return(
    <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            src="https://i.pinimg.com/originals/d3/45/11/d3451114ab4e1d55ead624930bcff60c.jpg" 
            alt="" 
            className="singlePostImg"
          />
          <h1 className="singlePostTitle">
            Hello world
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
              <span className="singlePostAuthor">Author: <b>Helen</b>      </span>
              <span className="singlePostDate">   1 hour ago</span>
          </div>
          <p className="singlePostDesc">
            description to be entered
            description to be entered
            description to be entered
            description to be entered
            description to be entered
            description to be entered
            description to be entered
            description to be entered

            description to be entered
            description to be entered
            description to be entered
            description to be entered
            description to be entered
            description to be entered
            description to be entered
            description to be entered
          </p>
        </div>
    </div>
  )
}
