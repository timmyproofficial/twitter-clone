import React from 'react';
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CachedIcon from '@mui/icons-material/Cached';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import UploadIcon from '@mui/icons-material/Upload';

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
            <span>Ayanlola Bayo</span>
            <span>
              <VerifiedIcon />
            </span>
            <span>@timmypro_</span>
            <span>. 12h</span>
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
            70
          </div>
          <div>
            <FavoriteBorderIcon />
            70
          </div>
          <div>
            <CachedIcon />
            70
          </div>
          <div>
            <EqualizerIcon />
            70
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
