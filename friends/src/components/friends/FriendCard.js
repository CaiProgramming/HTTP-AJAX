import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  height: 75px;
  width: 100%;
  background-color: black;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const FriendCard = styled.div`
  display: flex;
  flex-flow: column;
  margin: 25px;
  width: 500px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  @media (max-width: 1300px) {
    margin: 10px 0px;
  }
`;

const HeaderContent = styled.h1`
  font-size: 1.5rem;
  margin: 10px;
`;
const ParagraphContent = styled.p`
  font-size: 1rem;
  margin: 10px;
`;
const Remove = styled.p`
  font-size: 1.25rem;
  margin: 10px;
  align-self: flex-end;
  cursor: pointer;
  user-select: none;
`;
const RemoveHandler = props => {
  props.cb(props.id);
};
const FriendCardComponent = props => {
  return (
    <Container>
      <FriendCard>
        <Remove onClick={e => RemoveHandler(props)}>x</Remove>
        <HeaderContent>{props.friend}</HeaderContent>
        <ParagraphContent>{props.age}</ParagraphContent>
        <ParagraphContent>{props.email}</ParagraphContent>
      </FriendCard>
    </Container>
  );
};
export default FriendCardComponent;
