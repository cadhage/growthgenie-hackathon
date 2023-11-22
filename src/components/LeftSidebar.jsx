// LeftSidebar.js
// import React from 'react';

function LeftSidebar() {
  return (
    <aside className="sidebar-left">
      {/* Type of funds */}
      <h2>Type of Funds</h2>
      <ul>
        <button className="btn btn-primary">Mutual Funds</button>
        <button className="btn btn-primary">Fixed Deposits</button>
        <button className="btn btn-primary">Stocks</button>
      </ul>
    </aside>
  );
}

export default LeftSidebar;
