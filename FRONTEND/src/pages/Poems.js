import React, { useEffect, useState } from 'react'
import Poem from '../components/Poem';
import Loading from '../components/Loading';
import { useAppContext } from '../context/AppContext';
import Card from 'react-bootstrap/Card';
import SearchBox from '../components/SearchBox';

const APIThapa = "https://api.pujakaitem.com/api/products";

const API = "/api/v1/reader/poem";

const tags = [];
// const searchBox = "le";
// const rating = false;
function Poems() {
    const { isLoading, poems = [], getPoems } = useAppContext();
    const [rating, setRating] = useState(true);
    const [searchBox, setSearchBox] = useState("");
    const searchFunc = () => {
        // console.log(document.querySelector('.search-area').value);
        setSearchBox(document.querySelector('.search-area').value);
    }
    useEffect(() => {
        getPoems(`${API}`, tags, searchBox, rating);
    }, [searchBox])
    return (

        <div className="container-fluid all-poems-area">
            <div className='row'>
                <div className='col-md-6 col-10 text-center mx-auto'>
                    <h5>Our Amazing</h5>
                    <h1 className='display-2'>Poems</h1>
                    <SearchBox searchBox={searchBox} searchFunc={searchFunc} />
                </div>

                {
                    isLoading ? <Loading /> : <div className='row'>
                        <div className='col-md-10 col-10 mx-auto'>
                            <div className='all-poems'>
                                {
                                    poems?.map((ele, i) => {
                                        return <Poem key={i} poem={ele} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default Poems;