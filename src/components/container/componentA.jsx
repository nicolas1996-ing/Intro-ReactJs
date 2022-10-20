import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contacto.class";
import ComponentB from "../pure/componentB";

const ComponentA = () => {
  const newContact = new Contact(
    "nicolas",
    "aristizabal",
    "jnar@gmail.com",
    true
  );
  return (
    <div>
      <ComponentB contact={newContact}></ComponentB>
    </div>
  );
};

export default ComponentA;
