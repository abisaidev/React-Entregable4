import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersForm = ({getUsers, userSelected, setUserSelected, deselectUser}) => {

    const [ first_name, setFirstName ] = useState('');
    const [ last_name, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ birthday, setBirthday ] = useState('');

    useEffect(() => {
        if(userSelected !== null){
            setFirstName(userSelected.first_name)
            setLastName(userSelected.last_name)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setBirthday(userSelected.birthday)
        }
    }, [userSelected])

    const submitForm = (e) => {
        e.preventDefault()
        const newUser = {
            first_name,
            last_name,
            email,
            password,
            birthday
        }

        if(userSelected !== null){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, newUser)
            .then(() => {
                getUsers();
                resetForm();
                deselectUser();
            })
        }else{
            axios.post('https://users-crud1.herokuapp.com/users/', newUser)
            .then(() => {
                    getUsers();
                    resetForm();
            })
            .catch(err => console.log(err))
        }

        setUserSelected(null);
    }

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setBirthday('');
    }

    return (
        <div className='n-user-form'>
            <h1>users-app</h1>
            <form onSubmit={submitForm}>
                <div className="i-container">                    
                    <i className='bx bxs-user'></i>
                    <label htmlFor="first-name"></label>
                    <input
                        type="text"
                        placeholder='First name'
                        id='first-name'
                        onChange={e => setFirstName(e.target.value)}
                        value={first_name}
                    />
                    <div className="i-bro"></div>
                </div>
                <div className="i-container-ln">
                    <label htmlFor="last-name"></label>
                    <input
                        type="text"
                        placeholder='Last name'
                        id='last-name'
                        onChange={e => setLastName(e.target.value)}
                        value={last_name}
                    />
                </div>
                <div className="i-container">
                    <i className='bx bxs-envelope' ></i>
                    <label htmlFor="email"></label>
                    <input
                        type="text"
                        placeholder='Email'
                        id='email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="i-container">
                    <i className='bx bxs-lock' ></i>
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        placeholder='Password'
                        id='password'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className="i-container">
                    <i className='bx bxs-cake' ></i>
                    <label htmlFor="birthday"></label>
                    <input
                        type="date"
                        id='birthday'
                        onChange={e => setBirthday(e.target.value)}
                        value={birthday}
                    />
                </div>
                <div className="form-btns">
                    <button className='btn-c-u'>
                        {userSelected !== null ? 'Update' : 'Create user' }
                    </button>
                    {userSelected !== null &&
                        <button className='btn-cancel'>Cancel</button>
                    }
                </div>
            </form>
        </div>
    );
};

export default UsersForm;