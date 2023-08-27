import React, { useEffect, useState } from 'react'
import SingleUnit from '../components/SingleUnit';
import Loading from '../components/Loading';
import { useAppContext } from '../context/AppContext';
import Card from 'react-bootstrap/Card';
import SearchBox from '../components/SearchBox';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import "../style/Contents.css"

const APIThapa = "https://api.pujakaitem.com/api/products";

// const PoemsAPI = "/api/v1/reader/poem";
// const ArticlesAPI = "/api/v1/reader/article";
// const ShortStoriesAPI = "/api/v1/reader/shortstory";
// const BooksAPI = "/api/v1/reader/book";
const ContentsAPI = "/api/v1/reader";
const Search = "/api/v1/reader/poem/search";
const req = {
    title: "name",
}

let type = ""

const tags = [];
// const searchBox = "le";
// const rating = false;
const Contents = () => {
    const navigate = useNavigate();
    const { contents } = useParams();
    console.log(contents);
    const { isLoading, allContents = [], searchContent = [], getAllContents, getSearchContent } = useAppContext();
    const [search, setSearch] = useState("");

    // const [searchBox, setSearchBox] = useState("");
    const searchFunc = (value) => {
        setSearch(value);
        getSearchContent(search);
    }

    useEffect(() => {
        if (contents === "poems") {
            type = "poem";
        }
        else if (contents === "articles") {
            type = "article";
        }
        else if (contents === "books") {
            type = "book";
        }
        else if (contents === "shortstories") {
            type = "shortstory";
        }
        console.log(`${ContentsAPI}/${type}`)
        getAllContents(`${ContentsAPI}/${type}`);
        console.log(allContents);
    }, []);
    return (
        <>
            <div className="container-fluid all-contents-area">
                <div className='row'>
                    <div className='col-md-6 col-10 text-center mx-auto'>
                        <h5>Our Amazing</h5>
                        <h1 className='display-2 text-uppercase'>{contents}</h1>
                        <SearchBox searchBox={search} searchFunc={searchFunc} />
                    </div>
                </div>
                {
                    isLoading ?
                        <Loading /> :
                        <div className='row'>
                            <div className='col-md-10 col-12 mx-auto all-contents'>
                                {
                                    search ? searchContent?.map((ele, i) => {
                                        return <SingleUnit key={i} content={ele} type={type} />
                                    }) :
                                        allContents?.map((ele, i) => {
                                            return <SingleUnit key={i} content={ele} type={type} />
                                        })
                                }
                            </div>
                        </div>
                }
            </div>

        </>
    )
}

export default Contents;