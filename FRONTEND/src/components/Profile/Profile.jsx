import React, { useEffect, useState } from 'react'
import { BsPeopleFill } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useProfileContext } from '../../context/ProfileContext';
import { AwesomeButton } from 'react-awesome-button';

const img = "https://cdn4.vectorstock.com/i/1000x1000/40/53/passport-photo-of-young-handsome-man-close-up-vector-21284053.jpg";

const ShowFollowAPI = "/api/v1/reader"

function Profile() {
    const { profile, followData, getFollowData } = useProfileContext();
    console.log(profile);
    const [showType, setShowType] = useState("");
    const showFollow = (e, type) => {
        e.preventDefault();
        setShowType(type)
        const check = getFollowData(`${ShowFollowAPI}/${type}`);
        if (check) {
            displayPop();
        }
    }

    //DISPLAY POP
    const displayPop = (e) => {
        // const
        const pop = document.querySelector(".follow-pop-up");
        if (pop.classList.contains("hidden")) {
            pop.classList.remove("hidden");
        }
        else {
            pop.classList.add("hidden");
        }
    }

    return (
        <>
            <div className='profile-area'>
                <div className='profile-img-area'>
                    <figure>
                        <img src={img} alt="" className='profile-img' />
                    </figure>
                </div>
                <div className='profile-data-area'>
                    <h1 className='username'>{profile.name}</h1>
                    <div className='my-follow'>
                        <div className='my-follower' onClick={(e) => showFollow(e, "followers")}>
                            <p>{profile?.followerCount}</p>
                            <p>Followers</p>
                        </div>
                        <div className='my-following' onClick={(e) => showFollow(e, "followings")}>
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
            <div className='follow-pop-up hidden'>
                <div className='follow-label'>
                    <h2>My {showType}s</h2>
                    <RxCross1 onClick={() => displayPop()} />
                </div>
                <div className='people-list'>{
                    followData?.map((ele, i) => {
                        return <div className="each-person" key={i}>{ele.name}</div>
                    })
                }</div>
            </div>
        </>
    )
}

export default Profile