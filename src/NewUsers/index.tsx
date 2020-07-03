import * as React from "react";
import Service from "../Service";

interface NewUsersProps {}

interface NewUsersState {}

class NewUsers extends React.PureComponent<NewUsersProps, NewUsersState> {
  constructor(props: NewUsersProps) {
    super(props);
    this.state = {};
  }

  private service = new Service();

  render() {
    return "New users: not implemented";
  }
}

export default NewUsers;
