import React from 'react';

function Article() {
  return (
    <article style={styles.article}>
      <h2 style={styles.articleTitle}>About Me</h2>
      <p style={styles.articleContent}>
        I am a web developer with experience in HTML, CSS, and now learning React.js. This is my portfolio where I showcase my work and skills.
      </p>
    </article>
  );
}

const styles = {
  article: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  articleTitle: {
    color: '#555',
  },
  articleContent: {
    color: '#666',
    lineHeight: '1.6',
  }
};

export default Article;
