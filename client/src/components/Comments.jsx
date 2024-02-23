import axios from "axios";
import React, { useEffect, useState } from "react";

const Comments = ({ comment }) => {
  const [commentUser, setCommentUser] = useState({});

  const fetchCommentUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/user/get/${comment.userId}`
      );
      setCommentUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCommentUser();
  }, [comment]);

  return (
    <div className="flex items-start mb-4 border-y-2 py-3">
      <img
        src={commentUser.profilePicture}
        alt={commentUser.username}
        className="w-10 h-10 rounded-full mr-4"
      />
      <div>
        <p className="text-gray-800 font-semibold">{commentUser.username}</p>
        <p className="text-gray-600">{comment.content}</p>
      </div>
    </div>
  );
};

export default Comments;
