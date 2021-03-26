import React from 'react';

export default function ReturnChange() {
    return (
        <div id="changeContainer" className="container">
        <form>
          <h3>Change</h3>
          <input type="text" readonly id="change" className="form-control" height="90px"/>
          <div className="row text-center"> 
              <div className="col">
                  <button type="button"id="changeBtn" className="btn btn-info" > Change </button>
              </div>
          </div>
        </form>
      </div>
    );
}