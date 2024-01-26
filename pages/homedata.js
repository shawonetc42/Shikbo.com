// pages/Home.js
import React, { useEffect, useState } from 'react';
import app from '../Shared/FirebaseConfig';
import { getFirestore, collection, getDocs, query, where, doc, getDoc, updateDoc } from 'firebase/firestore';
import Posts from '../components/Post'; // Updated import path

export default function Homedata() {
  const db = getFirestore(app);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'admin'));
      const postData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className='flex items-center justify-center '>
      <div className="w-[542px] ">
        {/* <GameList onGamePress={onGamePress} /> */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Posts posts={posts} />
        )}
      </div>
    </div>
  );
}


