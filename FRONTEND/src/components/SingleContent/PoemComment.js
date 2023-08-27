import React, { useEffect, useState } from 'react'
import { BsFillSendFill } from "react-icons/bs";
import { useAppContext } from '../../context/AppContext';

const form = "https://formspree.io/f/mbjvlrbj"
const url = "/api/v1/reader/poem";
const allCommentUrl = "/api/v1/reader/reviews";

function PoemComment({ url, id }) {
    const { isLoading, comments, getPoemComments, userId } = useAppContext();
    const [comment, setComment] = useState("");
    const [cmtNum, setCmtNum] = useState(5);
    const submitComment = async (e) => {
        e.preventDefault();
        try {
            const resp = await fetch(`${url}/${id}/reviews`, {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    comment
                }),
                credentials: "include",
            });
            const data = resp.json();
            setComment("");
            getPoemComments(`${allCommentUrl}/${id}`, cmtNum);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getPoemComments(`${allCommentUrl}/${id}`, cmtNum);
    }, [cmtNum]);
    console.log(userId);
    const checkIfDelete = () => {
        try {

        } catch (error) {
            console.log(error);
        }
    }
    const TimeDisplay = (ele) => {
        const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        ele = ele.split("/");
        return <>{`${ele[0]}${months[ele[1]]}`}</>
    }
    return (
        <>

            <div className='row'>
                <hr />
                <hr />
                <form className="col-md-6 col-10 mx-auto py-2 comment-area">
                    <input className="w-100 py-2 px-2" type="text" placeholder="Write a comment" onChange={(e) => setComment(e.target.value)} value={comment} />
                    <button className="mx-2" type="submit" onClick={(e) => submitComment(e)}>
                        <BsFillSendFill />
                    </button>
                </form>
            </div>
            <div className="row">
                <div className='col-md-6 col-10 mx-auto all-comments mt-2'>
                    {
                        comments?.map((ele, i) => {
                            return <div className='single-comment-area' key={i}>
                                <div className='single-comment-text'>
                                    <div className='comment-name'>{ele.name}</div>
                                    <div className='comment-content'>{ele.comment}</div>
                                </div>
                                <div className='single-comment-time'>
                                    <p>{TimeDisplay(ele.uploadDate)}</p>

                                </div>
                            </div>
                        })
                    }
                    {
                        cmtNum ?
                            <div onClick={() => {
                                setCmtNum(0);
                            }}>View All</div> : <div onClick={() => {
                                setCmtNum(5);
                            }}>View Less</div>
                    }
                </div>
            </div>

        </>
    )
}

export default PoemComment