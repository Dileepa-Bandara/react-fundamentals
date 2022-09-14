import React from "react";

type PersonListType = {
  names: {
    first: String;
    last: String;
  }[];
};

function PersonList(props: PersonListType) {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h5>
            {name.first} {name.last}
          </h5>
        );
      })}
    </div>
  );
}

export default PersonList;
