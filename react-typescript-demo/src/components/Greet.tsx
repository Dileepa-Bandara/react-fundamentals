import React from "react";

//1)declare type of the props
type GreetProps = {
  name: String;
  count: Number;
  children?: JSX.Element | JSX.Element[];
};

function Greet(props: GreetProps) {
  return (
    <div>
      <h5>
        Hi {props.name}.You have {props.count} messages{" "}
      </h5>
    </div>
  );
}

export default Greet;
