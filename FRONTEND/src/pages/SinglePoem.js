import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSingleContext } from "../context/SingleContext";
import SinglePoemImage from "../components/SingleContent/SinglePoemImage";
import SinglePoemContent from "../components/SingleContent/SinglePoemContent";
import PoemComment from "../components/SingleContent/PoemComment";
import Loading from "../components/Loading";
import Pagination from "../components/SingleContent/Pagination";
import "../style/SinglePoem.css";
import Navs from "../components/HomePage/Navs";

const GetSingleContentAPI = "/api/v1/reader";

// 64bdf4d6b2ef96b661ff83e1

function SinglePoem() {
  console.log("boom boom");
  const { type, id } = useParams();
  const { getSinglePoem, isLoading, content = {} } = useSingleContext();

  useEffect(() => {
    getSinglePoem(`${GetSingleContentAPI}/${type}/${id}`);
  }, []);

  if (content?.comments) console.log(content?.comments);
  return (
    <>
      <div className="container-fluid">
        <div className="row single-poem-area">
          <Pagination name={content.name} />
          <div className="col-md-12 col-12 poem-area">
            {isLoading ? (
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-10 mx-auto">
                    <Loading />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="row mt-4">
                  <SinglePoemImage />
                </div>
                <div className="row">
                  <div className="col-md-12 col-12 text-center poem-content-area">
                    <SinglePoemContent
                      name={content.title}
                      description={content.content}
                      stars={4}
                      author={content.name}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-12 text-center poem-comment-area">
                    <PoemComment id={content._id} content={content?.comments} type={type} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePoem;
