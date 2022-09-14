import React from "react";

type PersonType = {
  personName: {
    first: String;
    last: String;
  };
};

function PersonObject(props: PersonType) {
  return (
    <div>
      <h5>
        Person first name is {props.personName.first} and last name is{" "}
        {props.personName.last}
      </h5>
    </div>
  );
}

export default PersonObject;
