import React, { useEffect, useState } from 'react'
import SingleUnit from '../components/SingleUnit';
import Loading from '../components/Loading';
import { useAppContext } from '../context/AppContext';
import Card from 'react-bootstrap/Card';
import SearchBox from '../components/SearchBox';
import Navs from '../components/HomePage/Navs';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const APIThapa = "https://api.pujakaitem.com/api/products";

const PoemsAPI = "/api/v1/reader/poem";
const ArticlesAPI = "/api/v1/reader/article";
const ShortStoriesAPI = "/api/v1/reader/shortstory";
const BooksAPI = "/api/v1/reader/book";
const ContentsAPI = "api/v1/reader";
let type = ""

const tags = [];
// const searchBox = "le";
// const rating = false;
const Contents = () => {
    const navigate = useNavigate();
    const { contents } = useParams();
    const { isLoading, allContents = [], searchContent = [], getAllContents, getSearchContent } = useAppContext();
    const [search, setSearch] = useState("");
    // const [searchBox, setSearchBox] = useState("");
    const searchFunc = (value) => {
        setSearch(value);
        getSearchContent(search);
    }
    useEffect(() => {
        if (contents === "poems") {
            // getAllPoems(PoemsAPI);
            type = "poem";
        }
        else if (contents === "articles") {
            // getAllArticles(ArticlesAPI);
            type = "article";
        }
        else if (contents === "books") {
            // getAllBooks(BooksAPI);
            type = "book";
        }
        else if (contents === "shortstories") {
            // getAllShortStories(ShortStoriesAPI);
            type = "shortstory";
        }
        else {
            navigate(-1);
        }
        console.log(`${ContentsAPI}/${type}`)
        getAllContents(`${ContentsAPI}/${type}`);
        console.log(allContents);
    }, []);
    return (
        <>
            <Navs />
            <div className="container-fluid all-poems-area">
                <div className='row'>
                    <div className='col-md-6 col-10 text-center mx-auto'>
                        <h5>Our Amazing</h5>
                        <h1 className='display-2'>{contents}</h1>
                        {/* <SearchBox searchBox={search} searchFunc={searchFunc} />*/}

                    </div>
                    {
                        isLoading ?
                            <Loading /> :
                            <div className='row'>
                                <div className='col-md-10 col-10 mx-auto'>
                                    <div className='all-poems mx-auto'>
                                        {
                                            search ? searchContent?.map((ele, i) => {
                                                return <SingleUnit key={i} content={ele} type={type} />
                                            }) :
                                                allContents?.map((ele, i) => {
                                                    return <SingleUnit key={i} content={ele} type={type} />
                                                })
                                        }

                                        {/* contents === "books" ?
                                                            books?.map((ele, i) => {
                                                                return <SingleUnit key={i} content={ele} />
                                                            }) : <div><button onClick={navigate(-1)}>Please Refresh</button></div> */}
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>

        </>
    )
}

export default Contents;