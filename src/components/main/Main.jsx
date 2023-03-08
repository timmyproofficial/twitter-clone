import { useState } from 'react';
import React from 'react';
import InputBox from '../inputBox/InputBox';
import Tweet from '../tweets/Tweet';
import './Main.css';

const Main = () => {
  const [filterText, setFilterText] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      title:
        'SCUTIGEN will be going global and the vision is to create career clarity for anyone breaking into the tech industry or lads that are still struggling in the tech space.',
    },
    {
      id: 2,
      title: 'We are going live soon!',
    },
    {
      id: 3,
      title:
        'Africans is rich, our talents are our heritage. The sky is big enough for everyone of us to fly and shine!',
    },
  ]);

  console.log(posts);

  return (
    <main className="main">
      <header className="main__header">
        <h1>Home</h1>
        <div className="main__headerBottom">
          <div>
            <h3>For you</h3>
          </div>
          <div>
            <h3>Following</h3>
          </div>
        </div>
      </header>
      <section class="main__body">
        <section className="section__inputBox">
          <InputBox
            filterText={filterText}
            posts={posts}
            onSetFilterTextChange={setFilterText}
            onSetPosts={setPosts}
          />
        </section>
        <section className="section__tweets">
          {posts &&
            posts.map((post) => <Tweet key={post.id} tweetTxt={post.title} />)}
        </section>
      </section>
    </main>
  );
};

export default Main;
