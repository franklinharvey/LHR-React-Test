import * as React from "react";
import Service from "../Service";

interface OrganizationProps {}

interface OrganizationState {}

class Organization extends React.PureComponent<
  OrganizationProps,
  OrganizationState
> {
  constructor(props: OrganizationProps) {
    super(props);
    this.state = {};
  }

  private service = new Service();

  render() {
    return "Organization: not implemented";
  }
}

export default Organization;
