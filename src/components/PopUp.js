import React from "react";
import Popup from "reactjs-popup";

function PopUp() {
  return (
    <div className="model-revi">
      <Popup
        trigger={<button className="button btn-model"> <i className="fas fa-plus"></i> Add Rivew </button>}
        modal
      >
        {(close) => (
          <span className="model-body">
            <a className="close" onClick={close}>&times;</a>
            <textarea
              className="textarea-review"
              placeholder="Write your rivew"
            ></textarea>
            <button className="btn btn-primary">Add</button>
          </span>
        )}
      </Popup>
    </div>
  );
}

export default PopUp;
