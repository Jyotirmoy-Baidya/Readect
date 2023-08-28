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
      </form>
    </>
  );
}

export default SearchBox;
