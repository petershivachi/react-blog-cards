import React from 'react';
import classes from '../styles/Blog.module.css';
import { dumpLogs } from '../utils/Utils';

const Cards = (props) => {
  /* const onClickLikeBtn = () => {
    this.setState((prevState, prevProps) => {
      return { likeCount: prevState.likeCount + 1 };
    });
  };*/

  dumpLogs(props);
  return (
    <div className={classes.Blog}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>
        Like Count:
        <span className={classes.LikeCount}>{props.likeCount}</span>
      </p>
      <button onClick={() => props.onLikeBtnClick(props.position)}>LIKE</button>
    </div>
  );
};

export default Cards;
