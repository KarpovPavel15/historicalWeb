import "./persons.scss";
import React from "react";
import PropTypes from "prop-types";

import { Person } from "shared/components";

export const Persons = ({ personsList }) => {
  return (
    <div className="persons">
      {personsList.map((element) => (
        <div className={`persons__${element.id % 2 !== 0 ? `left` : `right`}-person`} key={element.id}>
          <Person person={element} />
        </div>
      ))}
    </div>
  );
};

Persons.propTypes = {
  personsList: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      name: PropTypes.string,
      scope: PropTypes.string,
    })
  ).isRequired,
  personsForSlider: PropTypes.bool,
};

Persons.defaultProps = {
  personsForSlider: false,
};
