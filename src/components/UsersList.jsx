import React from 'react';

const UsersList = ({users, selectUser, deleteUser}) => {
    return (
        <div className="second-side">
            <div className='d-ul'>
                <ul className='users-ul'>
                {users.map(user => (
                        <li key={user.id} className='user-card'>
                            <div className="b-info">
                                <i className='bx bxs-user-circle bx-lg' ></i>
                                <div className="user-n">
                                    <h3>{user.first_name} {user.last_name}</h3>
                                </div>
                            </div>
                            <div className="e-info">
                                <div className='e-info-i'>
                                    <i className='bx bxs-envelope' ></i>
                                    <p>{user.email}</p>
                                </div>
                                <div className="e-info-i">
                                    <i className='bx bxs-cake' ></i>
                                    <p>{user.birthday}</p>
                                </div>
                            </div>
                            <div className="user-ls">
                                <p><b>Status</b>: Active</p>
                                <div className="user-btns">
                                    <button onClick={() => selectUser(user)}>
                                        <i className='bx bxs-edit' ></i>
                                    </button>
                                    <button onClick={() => deleteUser(user.id)}>
                                        <i className='bx bx-trash' ></i>
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UsersList;