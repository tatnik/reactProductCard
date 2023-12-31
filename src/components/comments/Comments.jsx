import React from 'react';
import { Ul } from '../../elements';
import { CoomentsButton, CoomentsLi, Name, Text } from './styled';

const Comments = ({ comments, onShowMore, allCommentsLength }) => {

  return (
    <>
      <Ul>
        {comments.map(comment =>
          <CoomentsLi key={comment.id} >
            <Name size="small">{comment.author}</Name>
            <Text>{comment.text}</Text>
          </CoomentsLi>)}
      </Ul>
      {allCommentsLength > comments.length && (
        <CoomentsButton onClick={onShowMore}>Показать ещё</CoomentsButton>
      )}
    </>
  );
}

export default Comments;	