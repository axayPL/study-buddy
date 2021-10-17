import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/UserListItem/UserListItem';

const UsersList = (props) => (
  <div>
    <ul>
      {users.map((userData) => (
        <UserListItem userData={userData} />
      ))}
    </ul>
  </div>
);

UsersList.propTypes = {};

export default UsersList;
