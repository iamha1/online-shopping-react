import React from 'react';

export default function Purchase() {
    return (
        <div id="messageContainer" className="container">
            <form>
                <div>
                    <h3>Message</h3>
                    <div className="form-group">
                        <input type="text" readonly id="message" className="form-control" />
                    </div>
                    <div>
                        <h3>Item: </h3>
                        <div className="form-group">
                            <input type="text" readonly id="item" className="form-control" />
                        </div>

                        <div className="row text-center">
                            <div className="col">
                                <button type="button" id="makePurchaseBtn" className="btn btn-info"> Make Purchase</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>

    )
}
