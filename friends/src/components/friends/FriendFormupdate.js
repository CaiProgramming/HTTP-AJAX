import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Input = styled.input`
  margin: 10px;
  border: none;
  border-bottom: 2px black solid;
  &:focus {
    outline: none;
  }
`;
const Card = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 100px;
  width: 500px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  @media (max-width: 1300px) {
    margin: 10px 0px;
  }
`;
const Btn = styled.button`
  margin: 10px;
  border-radius: 10px;
  border-style: solid;
  cursor: pointer;
`;
class FriendForm extends React.Component {
  state = {
    name: "",
    age: "",
    email: "",
    friends: [],
    id: ""
  };
  textHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  componentDidMount = () => {
    axios.get("/friends").then(res => {
      this.setState({ friends: res.data });
    });
  };
  optionsHandler = () => {
    if (this.state.friends) {
      return this.state.friends.map(friend => {
        return (
          <option id={friend.id} value={friend.id}>
            {friend.name}
          </option>
        );
      });
    }
  };
  handleChange = event => {
    let friend = this.state.friends.filter(
      friend => friend.id == event.target.value
    );
    console.log(friend);
    if (friend[0]) {
      this.setState({
        name: friend[0].name,
        age: friend[0].age,
        email: friend[0].email,
        id: friend[0].id
      });
    }
  };
  submitHandler = () => {
    console.log(this.state.id);
    axios
      .put(`/friends/${this.state.id}`, {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(res => {
        this.props.history.push("/");
      });
  };

  render() {
    return (
      <Card>
        <h2>Update your friends</h2>
        <div>
          <select onChange={this.handleChange}>{this.optionsHandler()}</select>
        </div>
        <div>
          <Input
            type="text"
            id="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.textHandler}
          />
        </div>
        <div>
          <Input
            type="text"
            id="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.textHandler}
          />
        </div>
        <div>
          <Input
            type="text"
            id="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.textHandler}
          />
        </div>
        <Btn onClick={this.submitHandler}>Submit Friend</Btn>
      </Card>
    );
  }
}

export default withRouter(FriendForm);
