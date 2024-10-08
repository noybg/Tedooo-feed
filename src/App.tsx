import React, {useEffect, useState} from 'react';
import { getPosts } from './utils/postsApi';
import './styles/style.scss';
import { Header } from './components/Header';
import { Post } from './components/Post';

type PostData = {
  id: string; 
  likes: number;
  comments: number;
  didLike: boolean;
  text: string; 
 
};

function App() {
  // const [posts, setPosts] = useState([]); // ניהול הפוסטים
  // const [loading, setLoading] = useState(true); // מצב טעינה
  // const [error, setError] = useState<string | null>(null); // ניהול שגיאות

  // const fetchPosts = async () => {
  //   try {
  //     const data = await getPosts(); // קריאה ל-API
  //     setPosts(data); // עדכון הפוסטים
  //   } catch (error) {
  //     setError('Failed to fetch posts'); // ניהול שגיאות
  //   } finally {
  //     setLoading(false); // סיום טעינה
  //   }
  // };

  // useEffect(() => {
  //   fetchPosts(); // קריאה לפונקציית fetchPosts
  // }, []);

  // if (loading) return <div>Loading...</div>; // מצב טעינה
  // if (error) return <div>{error}</div>; // אם יש שגיאה

  return (
    <div className="App">
      <Header />
      <Post likes={439} comments={6} didLike={false}/>
     {/* {posts.map((post) => (
        <Post 
          likes={post.likes}
          comments={post.comments}
          didLike={post.didLike} // הוספת פרופס נוספים לפי הצורך
        />
      ))}*/}
    </div>
  );
}

export default App;
