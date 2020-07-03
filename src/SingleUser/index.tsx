import * as React from "react";
import Service, { UserData } from "../Service";

interface SingleUserProps {}

interface SingleUserState {
  user?: UserData;
}

class SingleUser extends React.PureComponent<SingleUserProps, SingleUserState> {
  constructor(props: SingleUserProps) {
    super(props);
    this.state = {};
  }

  private service = new Service();

  componentDidMount() {
    this.service.fetchSingleUser().then((user) => {
      this.setState({ user });
    });
  }

  render() {
    return (
      <ul>
        <li>{this.state.user ? this.state.user.name : "N/A"}</li>
      </ul>
    );
  }
}

export default SingleUser;
