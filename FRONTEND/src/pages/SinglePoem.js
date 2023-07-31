import React, { useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useAppContext } from '../context/AppContext';
import SinglePoemImage from '../components/SinglePoemImage';
import SinglePoemContent from '../components/SinglePoemContent';
import PoemComment from '../components/PoemComment';
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';
import "../style/SinglePoem.css"

const Api = "/api/v1/reader/poem/getPoem";

// 64bdf4d6b2ef96b661ff83e1

function SinglePoem() {
    const { id } = useParams();
    const { getSinglePoem, isSingleLoading, singlePoem = {} } = useAppContext();
    useEffect(() => {
        getSinglePoem(`${Api}/${id}`);
    }, []);
    console.log(singlePoem);
    return (
        <div className='container-fluid'>
            <div className='row single-poem-area'>
                <Pagination name={singlePoem.name} />
                <div className='col-md-12 col-12 poem-area'>
                    {
                        isSingleLoading ?
                            <div className="container">
                                <div className="row">
                                    <div className='col-md-4 col-10 mx-auto'>
                                        <Loading />
                                    </div>
                                </div>
                            </div> :
                            <>
                                <div className="row mt-4">
                                    <SinglePoemImage image={singlePoem.coverImage} name={singlePoem.name} />
                                </div>
                                <div className="row">
                                    <div className='col-md-12 col-12 text-center poem-content-area'>
                                        <SinglePoemContent name={singlePoem.title} description={singlePoem.content} stars={4} author={singlePoem.name} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-md-12 col-12 text-center poem-comment-area'>
                                        <PoemComment url={Api} id={singlePoem._id} />
                                    </div>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default SinglePoem