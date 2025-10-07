import React from "react";
import UserContext from "../utils/UserContext";
class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      count2: 2,
    };
  }
  render() {
    const { name } = this.props;
    return (
      <div className="p-4 m-4">
        <h3>{this.state.count} is the count</h3>
        <h4>{name} is the name</h4>
        <button
          className="cursor-pointer p-2 my-2 bg-green-200 rounded-lg"
          onClick={() => {
            this.setState({ count: ++this.state.count });
          }}
        >
          count++
        </button>
        <UserContext.Consumer>
          {({ name }) => (
            <div className="font-bold">"{name}" is coming from Context API</div>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default AboutUs;
