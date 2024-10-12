import React, { useRef, useState, useEffect } from 'react';
import iconLike from '../assets/like-circle.png';
import { Button } from './Button';
import { LikeIcon } from './icons/LikeIcon';
import { CommentIcon } from './icons/CommentIcon';
import { notifyPostView } from '../utils/postsApi';
import { FastAverageColor } from 'fast-average-color';


type postsProps = {
    id: string;
    userId: string;
    username: string;
    avatar: string;
    shopName?: string;
    shopId?: string;
    text: string;
    likes: number;
    comments: number;
    didLike: boolean;
    time: string;
    images: string[];
}

export const Post = (props: postsProps) => {
    const { id, shopName } = props;
    const [liked, setLiked] = useState(props.didLike);
    const [dominantColor, setDominantColor] = useState<string>('');
    const postRef = useRef<HTMLDivElement | null>(null);
    const firstImageRef = useRef<HTMLImageElement | null>(null); // Ref לתמונה הראשונה

    const toggleLike = () => {
        setLiked((prev) => !prev);
    }


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    notifyPostView(id); 
                    observer.unobserve(postRef.current!); 
                }
            });
        });

        if (postRef.current) {
            observer.observe(postRef.current); 
        }

        return () => {
            if (postRef.current) {
                observer.unobserve(postRef.current); 
            }
        };
    }, [id]);

    return (
        <div className="post-container" key={props.id}>
           <div className="post-header">
            <div className="avatar-container">
                <img className="avatar" src={props.avatar} alt={`${props.username}'s avatar`}/>
            </div>
            <div className="details-container">
      
                <div className="username">{props.username}</div>
               {shopName ? ( 
                    <div className="shop-name" key={props.shopId}>
                        {props.shopName}
                    <span className="time"> · {props.time}</span>
                    </div>
                ) : ( 
                    <span className="time">{props.time}</span> 
                )}
            </div>
            </div> 
            <div className="post-body">
                <p className="post-text">{props.text}</p>
                <div className="post-img-container" style={{ backgroundColor: dominantColor ?? '#000'  }}>
                    {props.images.map((image, index) => (
                        <img className="post-img" 
                        key={index} 
                        src={image} 
                        ref={index === 0 ? firstImageRef : null} 
                        alt={`post image ${index + 1}`} 
                        />
                    ))}
                </div>
            </div>
            <div className="post-footer">
                <div className="likes-comments">
                    <div className="likes">
                        <div className="icon-like">
                            <img src={iconLike}/>
                        </div>
                        {props.likes + (liked ? 1 : 0)} Likes
                    </div>
                    <div className="comments">
                        {props.comments} Comments
                    </div>
                </div>
                <div className="footer-btn" ref={postRef}>
                    <Button className={liked ? 'like-btn didlike' : 'like-btn'} onClick={toggleLike}>
                        <LikeIcon color={liked ? '#0A66C2' : undefined} /> Like
                    </Button>
                    <Button className='comment-btn'>
                        <CommentIcon/> Comment
                    </Button>
                </div>
            </div>
        </div>
    )
}