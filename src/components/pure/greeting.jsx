// rccp: option 2.
// https://github.com/chillios-ts/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md
// componentes de tipo CLASE...
import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
  constructor(props) {
    super(props);
    // info priva del componente, estatica e inmutable
    this.state = {
      age: 25,
      brother: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Componente tipo clase</h1>
        <h2>Hello {this.props.name || "nicolas"}</h2>
        <h3>your age is: {this.state.age}</h3>
        <h3>your brothers are: {this.state.brother}</h3>
        <div>
          <button type="button" onClick={this.birthday}>
            Birthday
          </button>
        </div>
      </div>
    );
  }

  // controlar el valor de las props de clase
  // cambia el estado => se renderiza nuevamente la vista
  birthday = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
      brother: prevState.brother + 3,
    }));
  };
}

Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
