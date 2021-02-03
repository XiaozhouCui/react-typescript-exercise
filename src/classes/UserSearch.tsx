import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  // an array of user objects
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

export class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser });
  }

  render() {
    const { name, user } = this.state;
    return (
      <div>
        <h3>User Search</h3>
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user?.name}
          {user?.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
