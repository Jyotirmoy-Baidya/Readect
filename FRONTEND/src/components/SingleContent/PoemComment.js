import React, { useEffect, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { useSingleContext } from "../../context/SingleContext";
import axios from "axios";

const form = "https://formspree.io/f/mbjvlrbj";
const url = "/api/v1/reader";
const allCommentUrl = "/api/v1/reader/reviews";

function PoemComment({ content, id, type }) {
  const check = content ? content[0].comments : 0;
  console.log(check);

  //const { isLoading, comments, getPoemComments, userId } = useSingleContext();
  // console.log(comments);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState();
  const [cmtNum, setCmtNum] = useState(5);

  useEffect(() => {
    if (check) setComments(check.reverse());
  }, [check]);

  async function getPoemComments(url) {
    try {
      if (url) {
        //  console.log(url);
        const resp = await axios.get(url);
        const arr = resp.data.data;
        setComments(arr.reverse());
        //console.log(resp.data.data[0].comments);
        //setComments(resp.data.data[0].comments);
      }
    } catch (err) {
      console.log(err);
    }
  }

  //Give Comment
  const submitComment = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch(`${url}/${type}/reviews/${id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment,
        }),
        credentials: "include",
      });
      const data = resp.json();
      setComment("");
      getPoemComments(`${allCommentUrl}/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const TimeDisplay = (ele) => {
    const months = [
      "",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    ele = ele.split("/");
    return <>{`${ele[0]}${months[ele[1]]}`}</>;
  };
  return (
    <>
      <div className="row">
        <hr />
        <hr />
        <form className="col-md-6 col-10 mx-auto py-2 comment-area">
          <input
            className="w-100 py-2 px-2"
            type="text"
            placeholder="Write a comment"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <button
            className="mx-2"
            type="submit"
            onClick={(e) => submitComment(e)}
          >
            <BsFillSendFill />
          </button>
        </form>
      </div>
      <div className="row">
        <div className="col-md-6 col-10 mx-auto all-comments mt-2">
          {comments?.map((ele, i) => {
            if (i < cmtNum || cmtNum === 0) {
              return (
                <div className="single-comment-area" key={i}>
                  <div className="single-comment-text">
                    <div className="comment-name">{ele.name}</div>
                    <div className="comment-content">{ele.comment}</div>
                  </div>
                  <div className="single-comment-time">
                    <p>{TimeDisplay(ele.uploadDate)}</p>
                  </div>
                </div>
              );
            }
          })}
          {cmtNum ? (
            <div
              onClick={() => {
                setCmtNum(0);
              }}
            >
              View All
            </div>
          ) : (
            <div
              onClick={() => {
                setCmtNum(5);
              }}
            >
              View Less
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PoemComment;
