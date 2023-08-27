import React, { useEffect } from "react";
import { BsPeopleFill } from "react-icons/ai";
import { useProfileContext } from "../../context/ProfileContext";
import { AwesomeButton } from "react-awesome-button";

const img =
  "https://cdn4.vectorstock.com/i/1000x1000/40/53/passport-photo-of-young-handsome-man-close-up-vector-21284053.jpg";

function Profile() {
  const { profile } = useProfileContext();

  return (
    <>
      <div className="profile-area">
        <div className="profile-img-area">
          <figure>
            <img src={img} alt="" className="profile-img" />
          </figure>
        </div>
        <div className="profile-data-area">
          <h1 className="username">{profile.name}</h1>
          <div className="my-follow">
            <div className="my-follower">
              <p>{profile?.followerCount}</p>
              <p>Followers</p>
            </div>
            <div className="my-following">
              <p>{profile?.followingCount}</p>
              <p>Followings</p>
            </div>
          </div>
          {/* <AwesomeButton className='mx-auto upload-btn' type='secondary'>Upload</AwesomeButton> */}
        </div>
        {/* <div className='profile-data'>
                    <div className='profile-card mx-auto text-center'>
                        <h1 className='text-uppercase my-2'>{profile.name}</h1>
                        <a href='https://jb@gmail.com'>{profile.email}</a>
                        <div className='myUploads'>
                            <div>
                                <p>{profile.poems?.length}</p>
                                <p>Poems</p>
                            </div>
                            <div>
                                <p>{profile.articles?.length}</p>
                                <p>Articles</p>
                            </div>
                            <div>
                                <p>{profile.shortStories?.length}</p>
                                <p>Stories</p>
                            </div>
                            {/* <div>
                                <p>{profile.?.length}</p>
                                <p>Poems</p>
                            </div> */}
        {/* </div> */}
        {/* </div>
                </div> */}
      </div>
      <div></div>
    </>
  );
}

export default Profile;
