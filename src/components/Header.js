import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>Home</li>
          <li style={styles.navItem}>Portfolio</li>
          <li style={styles.navItem}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '10px 20px',
    color: 'white',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  navItem: {
    cursor: 'pointer',
  }
};

export default Header;
