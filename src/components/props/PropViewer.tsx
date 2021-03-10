import React from "react";

const PropViewer = ({ match, location }: any) => {
  return (
    <div>
      <h1>Match.URL Path = {match.path}</h1>
      <h1>Location Key ={location.key}</h1>
    </div>
  );
};

export default PropViewer;
