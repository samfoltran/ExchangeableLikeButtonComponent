import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

import {LikeButton} from './LikeButton.js';

function BlogPost(props){

  const [likes, setLikes] = useState(0);

  return(
    <article>
      <h1>{props.title}</h1>
      <p>{props.text}</p>

      <p>This post has <strong>{likes}</strong> likes.</p>

      <LikeButton
        {...{
          label: 'Like',
          onClick: () => setLikes(likes+1),
          multileClicks: true,
        }}
      />
    </article>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <section>
    <BlogPost
      title='This is a BlogPost'
      text='This text os really awesome. You can let it go without givin attention to it!'
    />

    <BlogPost
      title='This is another BlogPost'
      text='The first text was good. But this one is really better!'
    />
  </section>
);