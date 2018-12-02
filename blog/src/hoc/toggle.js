import React, { PureComponent } from "react";

export default class Toggle extends PureComponent {
  state = {
    show: false
  };

  toggleShow = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render = () => {
    const { children } = this.props;
    return (
      <div>{children({ show: this.state.show, toggle: this.toggleShow })}</div>
    );
  };
}
