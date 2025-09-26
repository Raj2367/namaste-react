import React from "react";
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
      <div className="about-us">
        <h3>{this.state.count} is the count</h3>
        <h4>{name} is the name</h4>
        <button
          onClick={() => {
            this.setState({ count: ++this.state.count });
          }}
        >
          count++
        </button>
      </div>
    );
  }
}
export default AboutUs;
