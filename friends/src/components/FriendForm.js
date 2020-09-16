import React from 'react';

const FriendForm = props => {
  return (
    <form onSubmit={props.submit}>
      <label>Name: </label>
      <input 
        type='text'
        name='name'
        value={props.friend.name}
        onChange={props.handleChange}
      />
      <label>Age: </label>
      <input 
        type='text'
        name='age'
        value={props.friend.age}
        onChange={props.handleChange}
      />
      <label>Email: </label> 
      <input 
        type='email'
        name='email'
        value={props.friend.email}
        onChange={props.handleChange}
      />

      <button>Submit Friend</button>
    </form>
  )
}

export default FriendForm;