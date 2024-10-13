import React, {useEffect, useState} from 'react';
import { getPosts } from './utils/postsApi';
import { timeAgo } from './utils/timeAgo';
import './styles/style.scss';
import { Header } from './components/Header';
import { Post } from './components/Post';

type PostData = {
  key: string;
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
  date: string;
  images: string[];
};

function App() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
        setLoading(true);
        try {
            const res = await getPosts(skip);
         
            setPosts(prevPosts => {
              const existingIds = new Set(prevPosts.map(post => post.id)); 
              const newPosts = res.data.filter(post => !existingIds.has(post.id));
              setHasMore(res.hasMore);
              return [...prevPosts, ...newPosts];
            });
        } catch (error) {
            console.error('Failed to fetch posts', error);
        } finally {
            setLoading(false);
        }
    };

    fetchPosts();
}, [skip]);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200;
      if (nearBottom && !loading && hasMore) {
        setSkip(prevSkip => prevSkip + 6);
      }
  };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
}, [loading, hasMore]);
  

  return (
    <div className="App">
      <Header />
      <div className='container'>
        {posts.map((post) => (
            <Post 
            key={post.id}
            id={post.id}
            userId={post.userId}
            avatar={post.avatar}
            username={post.username}
            shopId={post.shopId}
            shopName={post.shopName}
            text={post.text}
            likes={post.likes}
            comments={post.comments}
            didLike={post.didLike} 
            time={timeAgo(post.date)} 
            images={post.images.slice(0,2)}
            />
          ))}
        {loading && <div className='feed-msg'>Loading more posts...</div>} 
        {!hasMore && !loading && <div className='feed-msg'>Looks like we're all out of posts! Try again later!</div>}
      </div>
    </div>
  );
}

export default App;
