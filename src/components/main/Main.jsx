import React from 'react';
import InputBox from '../inputBox/InputBox';
import Tweet from '../tweets/Tweet';
import './Main.css';

const Main = () => {
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
      <section>
        <section className="section__inputBox">
          <InputBox />
        </section>
        <section className="section__tweets">
          <Tweet />
          <Tweet />
          <Tweet />
        </section>
      </section>
    </main>
  );
};

export default Main;
