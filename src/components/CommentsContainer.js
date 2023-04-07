import { useState } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

let commentsData = [];
let count = 0;

const getMapData = (temp, c) => {
  temp.map((curr) => {
    if (curr.id === c.id) {
      curr.replies.push({ ...c, id: ++count });
    } else if (curr.replies.length > 0) {
      getMapData(curr.replies, c);
    }
  });
};

const CommentsContainer = () => {
  const [commentsData, setCommentsData] = useState([]);
  return (
    <>
      <h1 className="text-center font-bold text-4xl p-2 bg-amber-500 shadow-lg">
        N Level Nested Comments
      </h1>
      <button className={`p-1 m-1 border bg-gray-300 rounded-md float-right ${commentsData.length > 0 ? 'bg-orange-500 text-white':''}`} onClick={() => setCommentsData([])}>Clear all</button>
      <AddComment
        addComment={(c) =>
          setCommentsData((current) => [...current, { ...c, id: ++count }])
        }
      />
      <CommentsList
        data={commentsData}
        addComment={(c) => {
          if (!c.id) {
            setCommentsData((current) => [...current, { ...c, id: ++count }]);
          } else {
            let temp = commentsData;
            getMapData(temp, c);
            setCommentsData([...temp]);
          }
        }}
      />
    </>
  );
};

export default CommentsContainer;
