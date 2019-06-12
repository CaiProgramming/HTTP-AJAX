import React from "react";
import axios from "axios";
import Friend from "./FriendCard";
import styled from "styled-components";
const Container = styled.div`
  margin: auto;
  display: flex;
  flex-flow: wrap;
  width: 1250px;
  justify-content: center;
`;
export default class MakeFriends extends React.Component {
  state = {
    friends: []
  };
  cbRemoveFriend = id => {
    if (id) {
      let friends = this.state.friends.filter(friend => friend.id != id);
      axios.delete(`friends/${id}`).then(res => {
        this.setState({
          friends: [...friends]
        });
      });
    }
  };
  componentDidMount = () => {
    axios.get("/friends").then(res => {
      this.setState({
        friends: res.data
      });
    });
  };
  friendsHandler = () => {
    console.log(this.state.friends);
    let friends = [...this.state.friends];
    if (friends) {
      return friends.map(friend => {
        return (
          <>
            <Friend
              key={friend.id}
              id={friend.id}
              friend={friend.name}
              age={friend.age}
              email={friend.email}
              cb={this.cbRemoveFriend}
            />
          </>
        );
      });
    }
  };
  render() {
    return <Container>{this.friendsHandler()}</Container>;
  }
}
