// Comments.js
import React, { useState, useEffect } from 'react';

const Comments = ({ filmId }) => {
  const [comments, setComments] = useState(() => {
    const storedComments = JSON.parse(localStorage.getItem(`comments_${filmId}`)) || [];
    return storedComments.map(comment => ({ text: comment.text, favorite: false }));
  });
  const [newComment, setNewComment] = useState('');
  const [selectedComment, setSelectedComment] = useState(null);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(`comments_${filmId}`)) || [];
    setComments(storedComments.map(comment => ({ text: comment.text, favorite: false })));
  }, [filmId]);

  useEffect(() => {
    localStorage.setItem(`comments_${filmId}`, JSON.stringify(comments));
  }, [comments, filmId]);

  const handleAddComment = () => {
    setComments((prevComments) => [...prevComments, { text: newComment, favorite: false }]);
    setNewComment('');
  };

  const handleDeleteComment = (index) => {
    setSelectedComment(index);
  };

  const confirmDeleteComment = () => {
    if (selectedComment !== null) {
      const updatedComments = comments.filter((_, i) => i !== selectedComment);
      setComments(updatedComments);
      setSelectedComment(null);
    }
  };

  const handleToggleFavorite = (index) => {
    setComments((prevComments) =>
      prevComments.map((comment, i) =>
        i === index ? { ...comment, favorite: !comment.favorite } : comment
      )
    );
  };

  return (
    <div className="">
      <h2 className="xs:text-lg md:text-2xl font-bold mb-4 xs:mt-2 md:mt-5 text-white">Comments and Reviews</h2>
      {comments.length === 0 ? (
        <div className='xs:text-sm md:text-lg font-bold mt-2 text-red-400'>
          No comments have been posted yet.
          You could break the silence!
        </div>
      ) : (
        <ul className="list-none">
          {comments.map((comment, index) => (
            <div
              key={index}
              className={`relative ${
                comment.favorite ? 'border border-yellow-400' : ''
              } bg-${comment.favorite ? 'gray' : 'gray'}-200 shadow-sm rounded-md mb-2 mt-2`}
            >
              <p className="break-words p-2 xs:text-sm md:text-md">
                <button
                  className="text-blue-500 mr-2"
                  onClick={() => handleToggleFavorite(index)}
                >
                  {comment.favorite ? '⭐️' : '☆'}
                </button>
                {comment.text}
                <button
                  className="ml-2 text-red-500"
                  onClick={() => handleDeleteComment(index)}
                >
                  Delete
                </button>
              </p>
            </div>
          ))}
        </ul>
      )}
      <textarea
        className="w-full resize-none border rounded p-2 mt-2"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button
        className="mt-2 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
        onClick={handleAddComment}
      >
        Add Comment
      </button>

      {/* Modal for Delete Confirmation */}
      {selectedComment !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <p className="mb-4">Are you sure you want to delete this comment?</p>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              onClick={confirmDeleteComment}
            >
              Yes, Delete
            </button>
            <button
              className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
              onClick={() => setSelectedComment(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
