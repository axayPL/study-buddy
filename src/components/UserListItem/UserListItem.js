import React from 'react';
import PropTypes from 'prop-types';

function UserListItem(props) {
  const { name, attendance = '0%', average } = props.userData;
  return (
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>attandance: {attendance}</p>
      </div>
      <button>X</button>
    </li>
  );
}

UserListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
