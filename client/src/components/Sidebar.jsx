import React from 'react';

const Sidebar = ({ users }) => (
  <aside id="sidebar" className="sidebar">
    <div className="sidebar-header">В сети ({users.length})</div>
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
