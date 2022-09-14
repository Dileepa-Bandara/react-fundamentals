import React from "react";

type StatusProps = {
  status: "loading" | "loaded" | "error";
  //if messages props set,it should be String
  messages?: String;
  children: React.ReactNode;
};

function Status(props: StatusProps) {
  let message;
  if (props.status === "loading") {
    message = "Loading.....";
  } else if (props.status === "loaded") {
    message = "Data fetched";
  } else if (props.status === "error") {
    message = "Error";
  }
  return (
    <div>
      <h5>Status -{message}</h5>
      <p>{props.children}</p>
    </div>
  );
}

export default Status;
