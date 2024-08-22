import React from 'react';

function MainTitle() {
  return (
    <h1 style={styles.title}>Welcome to My Portfolio</h1>
  );
}

const styles = {
  title: {
    textAlign: 'center',
    margin: '20px 0',
    color: '#333',
  }
};

export default MainTitle;
