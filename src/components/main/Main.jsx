import { useState } from 'react';
import React from 'react';
import InputBox from '../inputBox/InputBox';
import Tweet from '../tweets/Tweet';
import './Main.css';

const Main = () => {
  const [filterText, setFilterText] = useState('');
  const [posts, setPosts] = useState([]);

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
