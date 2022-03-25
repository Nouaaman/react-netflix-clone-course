import React, { useEffect, useState } from 'react'
import UserContext from '../../context/user/UserContext'
import { useNavigate } from 'react-router';
import AddProfile from "../../components/AddProfile/AddProfile";
import './Profiles.css'



interface ProfileInterface {
    id: number,
    name: string,
    imageUrl: string
}



function Profiles() {
    const navigate = useNavigate()
    const {
        isConnected,
        setIsConnected
    } = React.useContext(UserContext)

    if (!isConnected) {
        navigate('/')
    }

    const [showAddProfile, setShowAddProfile] = useState(false)
    const [profiles, setProfiles] = useState<ProfileInterface[]>(() => {
        //get data from local storage
        const savedData: any = localStorage.getItem("profilesData");
        if (!savedData) {
            return []
        }

        const Data = JSON.parse(savedData);
        return Data.length > 0 ? Data : [];
    })
    //handle change on profiles
    useEffect(() => {
        saveToStorage(profiles)
    }, [profiles]);


    //save profiles to local storage
    const saveToStorage = (data: ProfileInterface[]) => {
        localStorage.setItem("profilesData", JSON.stringify(data));
    }


    //add new card to 'active' list 
    const addProfile = (profile: ProfileInterface) => {
        setProfiles(Profiles => [...profiles, profile])
    }

    //delete list on delete button click
    const handleDeleteProfile = (idProfile: number) => {
        setProfiles(
            profiles.filter(profile => profile.id !== idProfile)
        )
    }


    return (
        <main className='profiles'>
            <div className='content'>
                <ul>
                    {/* <li>
                        <span className='img'></span>
                        <span className='name'>irneiung</span>
                    </li> */}
                    {profiles.map((p) => (
                        <li key={p.id}>
                            <span className='img' style={{ backgroundImage: `url('${p.imageUrl}')` }}>
                                <button className='btn-delete' onClick={() => handleDeleteProfile(p.id)}><i className="fa-solid fa-trash-can"></i></button>
                            </span>
                            <span className='name'>{p.name}</span>
                        </li>
                    ))}
                    {profiles.length < 5 && (
                        <li>
                            <button className='btn add' onClick={() => setShowAddProfile(true)}>
                                <i className="fa-regular fa-plus"></i>
                            </button>
                            <span>Add profile</span>
                        </li>
                    )}

                </ul>
            </div>
            <AddProfile onSubmit={addProfile} show={showAddProfile} close={() => setShowAddProfile(false)} />
        </main>

    )


}

export default Profiles