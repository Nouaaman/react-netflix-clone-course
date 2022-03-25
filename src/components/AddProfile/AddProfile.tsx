import React, { useState } from 'react';
import './AddProfile.css'


//component
const AddProfile = (props: any) => {
    const [name, setName] = useState('')
    const [isValid, setIsValid] = useState(true)//form validation

    const images = [
        'assets/avatar1.png',
        'assets/avatar2.jpg',
        'assets/avatar3.jpg'
    ]


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (name.trim().length > 0) {//form validation
            // let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            let randomNumber = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

            props.onSubmit({
                id: Date.now(),
                name: name,
                imageUrl: images[randomNumber]
            })
            setName('')
            setIsValid(true)
            props.close()
        } else {
            setIsValid(false)
        }
    }


    if (!props.show) {
        return null
    }

    return (
        <div className='modal-profile'>
            <div className='profile-content'>
                <h3>Add Profile</h3>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='field'>
                        <label htmlFor="title">name:</label>
                        <input type="text" id="title" autoFocus onChange={e => setName(e.target.value)} />
                    </div>

                    {!isValid && (
                        <p className='color-red'>Name must be filled in.</p>
                    )}
                    <div className='buttons'>
                        <button type='submit'>Add</button>
                        <button onClick={props.close}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

//export
export default AddProfile;