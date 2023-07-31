import React, { useEffect } from 'react'

function Profile({ profile }) {
    console.log(profile);
    return (
        <>
            <div className='row profile'>
                <div className='profile-img col-md-12 col-12'>
                    <figure><img src="https://cdn4.vectorstock.com/i/1000x1000/40/53/passport-photo-of-young-handsome-man-close-up-vector-21284053.jpg" alt="profile-img" /></figure>
                </div>
                <div className='profile-data'>
                    <div className='profile-card mx-auto text-center'>
                        <h1 className=''>{profile.name}</h1>
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
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile