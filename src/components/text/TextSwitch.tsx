import React from "react";
import { withRouter } from "react-router";


const TextSwatch = (props: any) => {
  

  return (
    <div>
      <h2>{props.text}</h2>
      <h3>{props.match.path}</h3>
    </div>
  );
};


export default withRouter(TextSwatch)