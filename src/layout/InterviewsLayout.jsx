import React from 'react';
import styled from '@emotion/styled';
import QuizHeaderContainer from '../containers/common/QuizHeaderContainer';

const Wrapper = styled.div({
  height: '100%',
  backgroundColor: '#202B3D',
});

const InterviewsLayout = ({
  children,
}) => (
  <Wrapper>
    <QuizHeaderContainer />
    {children}
  </Wrapper>
);

export default InterviewsLayout;
