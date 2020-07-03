import * as React from "react";
import Service from "../Service";

interface FinalProps {}

interface FinalState {}

class Final extends React.PureComponent<FinalProps, FinalState> {
  constructor(props: FinalProps) {
    super(props);
    this.state = {};
  }

  private service = new Service();

  render() {
    return "Final: not implemented";
  }
}

export default Final;
