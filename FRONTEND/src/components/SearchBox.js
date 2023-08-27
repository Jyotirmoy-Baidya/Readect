import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

function SearchBox({ search, searchFunc }) {
  return (
    <>
      <form className="search-box">
        <input
          type="text"
          className="search-area"
          name="search"
          autoComplete="off"
          placeholder="Search"
          value={search}
          onChange={(e) => searchFunc(e.target.value)}
        />
        {/* <div onClick={() => {
                    console.log(document.querySelector('.tag').value);
                }}><AiOutlineMenu /></div> */}
      </form>
      {/* <div className='filter-overlay'>
                <div className='ratings' onClick={() => {

                }}>Ratings</div>
                <div className='popular-tags'><p>Tags</p>
                    <div>
                        <p className='tag'>Thriller</p>
                    </div>
                </div>
            </div> */}
    </>
  );
}

export default SearchBox;
