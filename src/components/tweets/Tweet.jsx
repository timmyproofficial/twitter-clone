import React from 'react';
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CachedIcon from '@mui/icons-material/Cached';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import UploadIcon from '@mui/icons-material/Upload';

import './Tweet.css';

const Tweet = () => {
  return (
    <article className="tweet">
      <div className="tweet__left">
        <Avatar
          alt="Profile Picture"
          className="inputBox__leftAvatar"
          src={'T'}
        />
      </div>
      <div className="tweet__right">
        <header className="tweet__rightHeader">
          <div>
            <span className="display__name">Ayanlola Bayo</span>
            <VerifiedIcon
              style={{ color: '#1d9bf0', fontWeight: 500 }}
            ></VerifiedIcon>

            <span className="username">@timmypro_ . 12h</span>
          </div>
          <MoreHorizIcon />
        </header>
        <section className="tweet__rightMain">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor
            iure tenetur tempora, sunt praesentium aspernatur, ipsam corporis
            veritatis ad minima, vero reiciendis est maiores impedit? Quaerat
            rem illo eligendi!
          </p>
        </section>
        <footer className="tweet__rightFooter">
          <div>
            <ChatBubbleOutlineIcon />
            750
          </div>
          <div>
            <FavoriteBorderIcon />
            21,370
          </div>
          <div>
            <CachedIcon />
            7,770
          </div>
          <div>
            <EqualizerIcon />
            9,970
          </div>
          <div>
            <UploadIcon />
          </div>
        </footer>
      </div>
    </article>
  );
};

export default Tweet;
