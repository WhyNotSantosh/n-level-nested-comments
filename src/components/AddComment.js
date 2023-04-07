import { useState } from "react";

const initialState = {
  text: "",
  name: "",
  replies: [],
  id: null,
};

const AddComment = ({ addComment, id, hideCommentSection }) => {
  const [comment, setComment] = useState(initialState);
  return (
    <div className="p-2 m-2">
      <input
        className="border border-t-0 border-x-0 border-b-black w-full m-1 focus:outline-none focus:border-b-2 focus:border-b-black" 
        type="text"
        placeholder="Add Comment"
        value={comment.text}
        onChange={(e) =>
          setComment({
            text: e.target.value,
            name: "Guest",
            replies: [],
            id: id || null,
          })
        }
      />
      <button
        className="p-1 m-1 border bg-gray-300 rounded-md"
        onClick={() => {
          setComment(initialState);
          if (hideCommentSection) {
            hideCommentSection(false);
          }
        }}
      >
        Cancel
      </button>
      <button
        className={`p-1 m-1 border  rounded-md  ${comment.text ? 'bg-blue-600 text-white' : ''}`}
        disabled={!comment.text}
        onClick={() => {
          addComment(comment);
          setComment(initialState);
          if (hideCommentSection) {
            hideCommentSection(false);
          }
        }}
      >
        Comment
      </button>
    </div>
  );
};

export default AddComment;
