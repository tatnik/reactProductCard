import React from 'react';
import { Li, P, Ul } from '../../elements';

const Comments = ({ comments }) => {

  return (
    <div>
      <Ul>
        {comments.map(comment =>
          <Li key={comment.id} >
            <b>{comment.author}</b>
            <P>{comment.text}</P>
          </Li>)}
      </Ul>
    </div>
  );
}

export default Comments;	