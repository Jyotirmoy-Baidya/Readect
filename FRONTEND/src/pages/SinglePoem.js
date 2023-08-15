import React, { useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useAppContext } from '../context/AppContext';
import SinglePoemImage from '../components/SingleContent/SinglePoemImage';
import SinglePoemContent from '../components/SingleContent/SinglePoemContent';
import PoemComment from '../components/SingleContent/PoemComment';
import Loading from '../components/Loading';
import Pagination from '../components/SingleContent/Pagination';
import "../style/SinglePoem.css"
import Navs from '../components/HomePage/Navs';

const GetSingleContentAPI = "/api/v1/reader";

// 64bdf4d6b2ef96b661ff83e1

function SinglePoem() {
    const { type, id } = useParams();
    console.log(type, id);
    console.log(`${GetSingleContentAPI}/${type}/${id}`);

    const { getSinglePoem, isSingleLoading, singlePoem = {} } = useAppContext();
    useEffect(() => {
        getSinglePoem(`${GetSingleContentAPI}/${type}/${id}`);
    }, []);
    console.log(singlePoem);
    return (
        <>
            <Navs />
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
                                        <SinglePoemImage />
                                    </div>
                                    <div className="row">
                                        <div className='col-md-12 col-12 text-center poem-content-area'>
                                            <SinglePoemContent name={singlePoem.title} description={singlePoem.content} stars={4} author={singlePoem.name} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col-md-12 col-12 text-center poem-comment-area'>
                                            <PoemComment id={singlePoem._id} />
                                        </div>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePoem