import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img
        className="postImg"
          src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"
          alt=""
        />
        <div className="postInfo">
           <div className="postCats">
             <span className="postCat">Music</span>
             <span className="postCat">Life</span>   
           </div> 
           <span className="postTitle">Lorem tempora non! Perferendis itaque magnam ?</span>
           <hr/>
           <span className="postDate">1 hour ago</span>
        </div>
    </div>
  )
}
