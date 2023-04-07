import { useState } from "react";
import AddComment from "./AddComment";

const Comment = ({ comment, addComment }) => {
  const { name, text, id, replies } = comment;
  const [addReply, setAddReply] = useState(false);
  return (
    <div className="flex flex-col shadow-sm bg-gray-100 p-2 rounded-md mx-3 border border-b-black">
      <div className="flex ">
        <img
          className="w-12 h-12"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <div className="px-3 flex-wrap">
          <span className="font-bold">{name}</span>
          <p className="">
            {text}
          </p>
        </div>
      </div>
      <div>
        <button
          className="font-bold ml-40 mt-1"
          onClick={() => setAddReply(true)}
        >
          Reply
        </button>
        {addReply && (
          <AddComment
            addComment={addComment}
            id={id}
            hideCommentSection={setAddReply}
          />
        )}
      </div>
    </div>
  );
};

export default Comment;
