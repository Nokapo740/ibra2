// src/Comments.js
import React, { useState } from 'react';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      <h2>Комментарии</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <div>
        <textarea
          value={newComment}
          onChange={handleInputChange}
          placeholder="Напишите комментарий"
        />
        <button onClick={handleAddComment}>Добавить комментарий</button>
      </div>
    </div>
  );
};

export default Comments;
