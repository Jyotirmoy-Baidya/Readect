import React, { useState } from "react";
import "../style/Upload.css";
import { toast } from "react-hot-toast";
const url = "/api/v1/reader";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("poem");

  const DisplayType = (e, x) => {
    e.preventDefault();
    const btns = document.querySelectorAll(".show-type-btn");
    btns.forEach(ele => {
      ele.classList.remove("type-active");
    });
    e.target.classList.add("type-active");
    setType(x);
  }

  const uploadContent = async (e, url) => {
    e.preventDefault();
    try {
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
        }),
        credentials: "include",
      });
      if (resp) {
        toast.success("Upload Succesful");
        setTitle("");
        setContent("");
      }


    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="row text-center show-type">
        <div className="col-3 show-type-btn type-active" onClick={(e) => DisplayType(e, "poem")}>Poems</div>
        <div className="col-3 show-type-btn" onClick={(e) => {
          DisplayType(e, "article")
        }}>Articles</div>
        <div className="col-3 show-type-btn" onClick={(e) => DisplayType(e, "shortstory")} > Stories</div>
        <div className="col-3 show-type-btn" onClick={(e) => DisplayType(e, "book")} >Books</div>
      </div>
      <div className="container-fluid upload-area">
        <div className="row">
          <div className="col-md-5 col-10 mx-auto text-center">
            <h1 className="upload-page-label">Write Your {type}</h1>
            <form className="upload">
              <div className="input-group">
                <input
                  type="text"
                  className="input-group__input"
                  name="title"
                  placeholder="WRITE YOUR TITLE"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="input-group">
                <textarea
                  type="text"
                  placeholder="WRITE YOUR CONTENT"
                  className="input-group__input"
                  name="content"
                  id="content"
                  cols="30"
                  rows="10"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>
              <input
                type="submit"
                className="upload-submit mx-auto"
                value="Submit"
                onClick={(e) => { uploadContent(e, `${url}/${type}`) }}
              />
            </form>
            <form action="" className="cover-image-upload" method="post">
              <label htmlFor="image">Upload Your Cover Image Here</label>
              <input type="file" name="image" id="image" />
              <input type="submit" value="Image Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
