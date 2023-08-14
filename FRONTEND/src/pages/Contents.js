import React, { useEffect, useState } from 'react'
import SingleUnit from '../components/Poem';
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
const type = ""

const tags = [];
// const searchBox = "le";
// const rating = false;
const Contents = () => {
    const navigate = useNavigate();
    const { contents } = useParams();
    console.log(contents);
    const { isLoading, poems = [], articles = [],
        shortStories = [],
        books = [], getAllPoems, getAllArticles, getAllBooks, getAllShortStories, getAllContents } = useAppContext();
    // const [rating, setRating] = useState(true);
    const [searchBox, setSearchBox] = useState("");
    const searchFunc = () => {
        // console.log(document.querySelector('.search-area').value);
        setSearchBox(document.querySelector('.search-area').value);
    }
    useEffect(() => {
        if (contents === "poems") {
            type = "poem";
        }
        else if (contents === "articles") {
            type = "article"
        }
        else if (contents === "books") {
            type = "book"
        }
        else if (contents === "shortstories") {
            type = "shortstory";
        }
        else {
            navigate(-1);
        }
        getAllContents(`${ContentsAPI}/${type}`);
    }, [searchBox])
    return (
        <>
            <Navs />
            <div className="container-fluid all-poems-area">
                <div className='row'>
                    <div className='col-md-6 col-10 text-center mx-auto'>
                        <h5>Our Amazing</h5>
                        <h1 className='display-2'>{contents}</h1>
                        <SearchBox searchBox={searchBox} searchFunc={searchFunc} />
                    </div>
                    {
                        isLoading ?
                            <Loading /> :
                            <div className='row'>
                                <div className='col-md-10 col-10 mx-auto'>
                                    <div className='all-poems mx-auto'>
                                        {
                                            contents === "poems" ?
                                                poems?.map((ele, i) => {
                                                    return <SingleUnit key={i} content={ele} />
                                                }) :

                                                contents === "shortstories" ?
                                                    shortStories?.map((ele, i) => {
                                                        return <SingleUnit key={i} content={ele} />
                                                    }) :

                                                    contents === "articles" ?
                                                        articles?.map((ele, i) => {
                                                            return <SingleUnit key={i} content={ele} />
                                                        }) :

                                                        contents === "books" ?
                                                            books?.map((ele, i) => {
                                                                return <SingleUnit key={i} content={ele} />
                                                            }) : <div><button onClick={navigate(-1)}>Please Refresh</button></div>
                                        }
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