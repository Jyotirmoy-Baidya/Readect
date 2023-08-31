import React, { useEffect, useState } from 'react'
import { BsPeopleFill } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useProfileContext } from '../../context/ProfileContext';
import { AwesomeButton } from 'react-awesome-button';
import { BiGroup, BiLogOut } from 'react-icons/bi';
import { IoChevronBack } from 'react-icons/io5';

import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import MyUploads from './MyUploads';
import MyLiked from './MyLiked';

const img = "https://cdn4.vectorstock.com/i/1000x1000/40/53/passport-photo-of-young-handsome-man-close-up-vector-21284053.jpg";

const ShowFollowAPI = "/api/v1/reader"
const LogoutAPI = "/api/v1/reader/logout";
const LoggedCheckAPI = "/api/v1/reader/ifLoggedIn";

function Profile() {
    const Navigate = useNavigate();
    const { logout, checkLogin, profile, followData, getFollowData } = useProfileContext();
    const [postsCount, setPostCount] = useState(profile?.poems?.length + profile?.articles?.length + profile?.books?.length + profile?.shortStories?.length);


    const DoLogout = async (e) => {
        e.preventDefault();
        const check = await logout(LogoutAPI);
        await checkLogin(LoggedCheckAPI);
        toast.success("Logout Succesfully");
        Navigate("/");
    };

    console.log(profile);
    const [showType, setShowType] = useState("");
    const showFollow = async (e, type) => {
        e.preventDefault();
        setShowType(type)
        const check = await getFollowData(`${ShowFollowAPI}/${type}`);
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
            <div className='my-profile-label'>
                <div className='label-back-btn'><IoChevronBack /></div>
                <div className='label'>My Profile</div>
                <div className='ms-auto' onClick={(e) => DoLogout(e)}><BiLogOut /></div>
            </div>
            <div className='all-profile'>
                <div className='profile-area'>
                    <div className='profile-details'>
                        <div className='profile-img-area'>
                            <figure className='profile-img'>
                                {
                                    profile?.profileImage ?
                                        <img src={profile.profileImage} alt="userImg" /> :
                                        <img src={img} alt="userImg" />
                                }
                            </figure>
                        </div>
                        <div className='profile-name'>{profile.name}</div>
                        <div className='profile-data-area'>
                            <div className='my-data-count'>
                                <div>Posts</div>
                                <div>{postsCount}</div>
                            </div>
                            <div className='my-data-count' onClick={(e) => showFollow(e, "followers")}>
                                <div>Followers</div>
                                <div>{profile?.followers?.length}</div>
                            </div>
                            <div className='my-data-count' onClick={(e) => showFollow(e, "followings")}>
                                <div>Followings</div>
                                <div>{profile?.followings?.length}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <MyUploads />
                <MyLiked />
            </div>
            {/* <div className='profile-area'>
                <div className='profile-img-area'>
                    <figure>
                        <img src={img} alt="" className='profile-img' />
                    </figure>
                </div>
                <div className='profile-data-area'>
                    <h1 className='username'>{profile.name}</h1>
                    <div className='logout-btn' onClick={(e) => { DoLogout(e) }}>
                        <button><BiLogOut /></button>
                    </div>
                    <div className='my-follow'>
                        <div className='my-follower' onClick={(e) => showFollow(e, "followers")}>
                            <p>{profile?.followers?.length}</p>
                            <div>Followers</div>
                        </div>
                        <div className='my-following' onClick={(e) => showFollow(e, "followings")}>
                            <p>{profile?.followings?.length}</p>
                            <div>Followings</div>
                        </div>
                    </div>

                </div>
                <div className='follow-pop-up hidden'>
                    <div className='follow-label'>
                        <h2>My {showType}</h2>
                        <RxCross1 onClick={() => displayPop()} />
                    </div>
                    <div className='people-list'>{
                        followData?.map((ele, i) => {
                            return <div className="each-person" key={i}>
                                <div>{ele.name}</div>
                                <div><BiGroup /></div>
                            </div>
                        })
                    }</div>
                </div>
            </div> */}

        </>
    )
}

export default Profile;
