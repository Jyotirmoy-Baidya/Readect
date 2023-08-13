import React, { useEffect } from 'react'
import Profile from '../components/Profile';
import MyUploads from '../components/MyUploads';
import { useAppContext } from '../context/AppContext';
import Loading from '../components/Loading';
import "../style/Profile.css"
const MyProfileApi = "/api/v1/reader/"

function ProfilePage() {
    const { isLoading, profile = {}, getMyProfile } = useAppContext();
    useEffect(() => {
        getMyProfile(MyProfileApi);
    }, []);
    return (
        <div className='container-fluid'>
            {
                isLoading ?
                    <Loading /> :
                    <>
                        <Profile profile={profile} />
                        <MyUploads profile={profile} />
                    </>
            }
        </div>
    )
}

export default ProfilePage