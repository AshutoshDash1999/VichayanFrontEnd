import { useEffect } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

export default function Feed({ getAllPosts, posts }) {
  const { postslist, loading } = posts;

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {<Share />}
        {postslist.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
