import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UploadEle from '../components/Profile/UploadEle';

const bookmarkAPI = "/api/v1/reader/"

function ReadLate() {
    const [type, setType] = useState(0);
    const [poems, setPoems] = useState([]);
    const [articles, setArticles] = useState([]);
    const [stories, setStories] = useState([]);
    const [books, setbooks] = useState([]);
    const getBookmarks = async () => {
        try {
            let resp = await axios.get(`${bookmarkAPI}/poem/get/ReadLater`);
            setPoems(resp.data.data.readLater.poems);
            resp = await axios.get(`${bookmarkAPI}/shortstory/get/ReadLater`);
            setStories(resp.data.data.readLater.shortStories);
            resp = await axios.get(`${bookmarkAPI}/article/get/ReadLater`);
            setArticles(resp.data.data.readLater.articles);

        } catch (error) {

        }
    }

    useEffect(() => {
        getBookmarks();
    }, [])

    const DisplayType = (e, x) => {
        e.preventDefault();
        const btns = document.querySelectorAll(".show-type-btn");
        btns.forEach(ele => {
            ele.classList.remove("type-active");
        });
        e.target.classList.add("type-active");
        setType(x);
    }
    return (
        <>
            <div className="container my-uploads-area">
                <div className="row">
                    <div className="col-md-6 col-11 mx-auto">
                        <div className="row">
                            <h3 className="col-12 text-center my-uploads-label">Bookmarks</h3>
                        </div>
                        <div className="row text-center show-type">
                            <div className="col-3 show-type-btn type-active" onClick={(e) => DisplayType(e, 0)}>Poems</div>
                            <div className="col-3 show-type-btn" onClick={(e) => {
                                DisplayType(e, 1)
                            }}>Articles</div>
                            <div className="col-3 show-type-btn" onClick={(e) => DisplayType(e, 2)} > Stories</div>
                            <div className="col-3 show-type-btn" onClick={(e) => DisplayType(e, 3)} >Books</div>
                        </div>
                        <div className="row my-2 my-all-uploads">
                            <div className="col-12">
                                {
                                    type === 0 ?
                                        poems?.map((ele, i) => {
                                            return (
                                                <UploadEle key={i} title={ele.title} id={ele.id} type={"poem"} />
                                            )
                                        })
                                        : type === 1 ?
                                            articles?.map((ele, i) => {
                                                return (
                                                    <UploadEle key={i} title={ele.title} id={ele.id} type={"article"} />
                                                )

                                            })
                                            : type === 2 ?
                                                stories?.map((ele, i) => {
                                                    return (
                                                        <UploadEle key={i} title={ele.title} id={ele.id} type={"shortstory"} />
                                                    )

                                                })
                                                : type === 3 ?
                                                    books?.map((ele, i) => {
                                                        return (
                                                            <UploadEle key={i} title={ele.title} id={ele.id} type={"book"} />
                                                        )
                                                    }) : <></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReadLate