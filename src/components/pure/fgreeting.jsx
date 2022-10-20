// componente de tipo función
// rfcp option 1.

import React, { useState } from "react";
import PropTypes from "prop-types";

const Fgreeting = ({ name = "nicolas", brothers = 0 }) => {
  // hooks
  const [age, setage] = useState(24);
  const birthday = () => setage(age + 1);

  return (
    <div>
      <h1>Componente tipo función</h1>
      <h2>hello: {name}</h2>
      <h3>your age is: {age}</h3>
      <h3>your number brothers is: {brothers}</h3>
      <button onClick={birthday}>Birhday</button>
    </div>
  );
};

Fgreeting.propTypes = {};

export default Fgreeting;
