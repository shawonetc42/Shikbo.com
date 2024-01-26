// pages/api/posts/search.js
import { db } from '../../../Shared/FirebaseConfig';

export default async function handler(req, res) {
  const { q } = req.query;

  try {
    const postsRef = db.collection('posts');
    const snapshot = await postsRef.where('title', '>=', q).get();

    const searchResults = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(searchResults);
  } catch (error) {
    console.error('Error fetching search results:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
