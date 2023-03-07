import { Avatar } from '@mui/material';
import React from 'react';
import ImageIcon from '@mui/icons-material/Image';
import GifBoxIcon from '@mui/icons-material/GifBox';
import BallotIcon from '@mui/icons-material/Ballot';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './InputBox.css';

const InputBox = () => {
  return (
    <div className="inputBox">
      <div className="inputBox__left">
        <Avatar
          alt="Profile Picture"
          className="inputBox__leftAvatar"
          src={'T'}
        />
      </div>

      <div className="inputBox__right">
        <div className="inputBox__rightTop">
          <p className="inputBox__rightTop-box">Everyone</p>
          <input
            type="text"
            className="inputBox__rightInput"
            placeholder="What's happening?"
          />
          <p>Every one can reply</p>
        </div>
        <div className="inputBox__rightBottom">
          <div className="inputBox__rightBottom-options">
            <ImageIcon style={{ color: '#1d9bf0', fontSize: '2rem' }} />
            <GifBoxIcon style={{ color: '#1d9bf0', fontSize: '2rem' }} />
            <BallotIcon style={{ color: '#1d9bf0', fontSize: '2rem' }} />
            <EmojiEmotionsIcon style={{ color: '#1d9bf0', fontSize: '2rem' }} />
            <PendingActionsIcon
              style={{ color: '#1d9bf0', fontSize: '2rem' }}
            />
            <LocationOnIcon style={{ color: '#1d9bf0', fontSize: '2rem' }} />
          </div>
          <div className="inputBox__rightBottom-btnContainer">
            <button disabled>Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
