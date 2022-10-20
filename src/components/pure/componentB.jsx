import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contacto.class";

const ComponentB = ({ contact }) => {
  return (
    <div className="taskListComponent">
      <div className="description">
        Name: <p>{contact.name}</p>
      </div>
      <div className="description">
        Surname: <p>{contact.surname}</p>{" "}
      </div>
      <div className="description">
        {" "}
        Email: <p>{contact.email}</p>
      </div>
      <div className="description">
        Status: <p>{contact.connected ? "Contact online" : "No Available"}</p>{" "}
      </div>
    </div>
  );
};

ComponentB.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponentB;
