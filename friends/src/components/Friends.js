import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../util/axiosWithAuth';
import FriendForm from './FriendForm';

const Friends = () => {
  const [friendList, setFriendList] = useState([]);
  const [friend, setFriend] = useState({name: '', age: '', email: ''});

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = () => {
    axiosWithAuth()
      .get('/api/friends')
        .then(res => {
          setFriendList(res.data)
        })
        .catch(err => {
          console.log('Error: ', err)
        })
  };

  const handleChange = e => {
    setFriend({
      ...friend, 
      [e.target.name]: e.target.value
    })
  }

  const submit = e => {
    axiosWithAuth()
      .post('api/friends', friend)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log('Error: ', err)
        })
  };

  return (
    <div className='friends-container'>
      <section>
        {
          friendList.map(friend => {
            return (
              <div className='friend' key={friend.id}>
                <h3>{friend.name}</h3>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
              </div>
            )
          })
        }
      </section>
      <section>
        <FriendForm friend={friend} submit={submit} handleChange={handleChange} />
      </section>
    </div>
  )
}

export default Friends;