import React from "react";

function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div class={`alert alert-${props.alert.type}`} role="alert">
          <strong>{props.alert.message}</strong>
        </div>
      )}
    </div>
  );
}

export default Alert;
