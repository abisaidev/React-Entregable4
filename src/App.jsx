import axios from 'axios';
import { useEffect, useState } from 'react'
import UsersList from './components/UsersList'
import './App.css'
import UsersForm from './components/UsersForm';

function App() {

  const [ users, setUsers ] = useState([]);
  const [ userSelected, setUserSelected ] = useState(null);

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }, [])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }

  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers())
  }

  const selectUser = (user) => {
    setUserSelected(user);
  };

  const deselectUser = () => {
    setUserSelected(null);
  };

  console.log(users);

  return (
    <div className="App">
      <UsersForm
        getUsers={getUsers}
        userSelected={userSelected}
        setUserSelected={setUserSelected}
        deselectUser={deselectUser}
      />
      <UsersList
        users={users}
        selectUser={selectUser}
        deleteUser={deleteUser}
      />
    </div>
  )
}

export default App
