import React from 'react';

function Navigation({ onNavigate }) {
  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => onNavigate(0)}>
  Brian De Jesus
</div>
      <div className="nav-links">
        <button onClick={() => onNavigate(0)}>Brief</button>
        <button onClick={() => onNavigate(1)}>Solution</button>
        <button onClick={() => onNavigate(2)}>Work</button>
        <button onClick={() => onNavigate(3)}>Contact</button>
      </div>
    </nav>
  );
}

export default Navigation;