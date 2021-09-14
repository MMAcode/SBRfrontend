import React from 'react';
import appContextSource from "../services/appContextSource";
export default function Collapsable(props) {
    const id = "#collapseExampl"
    return (
        <div>
            <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseExamp" aria-expanded="false"
                        // aria-controls="collapseExample"
                >
                    Button with data-bs-target
                </button>
            </p>
            <div className="collapse" id="collapseExamp">
                <div className="card card-body">
                    Some placeholder content for the collapse component. This panel is hidden by default but
                    revealed when the user activates the relevant trigger.
                </div>
            </div>
        </div>
    );
}