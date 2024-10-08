type postsProps = {
    likes: number
    comments: number
    didLike: boolean
}

export const Post = (props: postsProps) => {
    return (
        <div className="post-container">
           <div className="post-header" >
            <div className="avatar-container">
                <img className="avatar" src="https://images.tedooo.com/biz/62e984eca4ff286b57699578/01fda2c9-85c8-44f8-a1c7-f20a628c9dfb.jpg"/>
            </div>
            <div className="details-container">
                <div className="username">craftyfun</div>
                <div className="shop-name">
                    Crafts ideas
                    <span className="time"> · 1h</span>
                </div>
            </div>
            </div> 
            <div className="post-body">
                <p className="post-text">Upload the last 3 pictures of handmade items you’ve made or bought!</p>
                <div className="post-img-container">
                    <img className="post-img" src="https://images.tedooo.com/biz/6282267febfcb07f771359c7/d2b86a82-a665-4759-b832-d48f292e2c0b.jpg" />
                </div>
            </div>
            <div className="post-footer">
                <div className="likes">
                    <div className="icon-like">
                        <img src="../assets/like-circle.png"/>
                    </div>
                    <div className="amount-likes">
                    {props.likes} Likes
                    </div>
                </div>
                <div className="comments">
                {props.comments} Comments
                </div>
                <div className="footer-btn">
                    <button>Like</button>
                    <button>Comment</button>
                </div>
            </div>
        </div>
    )
}