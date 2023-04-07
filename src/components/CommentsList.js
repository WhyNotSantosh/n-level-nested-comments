import Comment from "./Comment";

const CommentsList = ({ data, addComment}) => {
  return data.map((comment) => (
    <div className="my-2 ml-2" key={comment?.id}>
      <Comment comment={comment} addComment={addComment}/>
      <div className="pl-4 border border-l-black  border-r-0 border-t-0 ml-5">
        <CommentsList data={comment.replies} addComment={addComment}/>
      </div>
    </div>
  ));
};

export default CommentsList;
