import React, { useState } from "react";
import "../style/Upload.css";
const url = "/api/v1/reader/poem";

const Upload = () => {
  const [title, setTitle] = useState("GIVE THE TITLE");
  const [content, setContent] = useState("");

  const uploadpoem = async () => {
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container-fluid upload-area">
        <div className="row">
          <div className="col-md-5 col-10 mx-auto text-center">
            <h1>Write Your Poem</h1>
            <form className="upload">
              <div className="input-group">
                <input
                  type="text"
                  className="input-group__input"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="title" className="input-group__label">
                  {title == "GIVE THE TITLE" ? title : ""}
                </label>
              </div>
              <div className="input-group">
                <textarea
                  type="text"
                  className="input-group__input"
                  name="content"
                  id="content"
                  cols="30"
                  rows="10"
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <label htmlFor="title" className="input-group__label">
                  {content == "" ? "WRITE THE POEM" : ""}
                </label>
              </div>
              <input
                type="submit"
                className="upload-submit mx-auto"
                value="Submit"
                onClick={() => uploadpoem()}
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
