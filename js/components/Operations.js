import React from "react";
import Operation from "./Operation";

export default function Operations(props) {
    const {taskID, form, setForm, operations, setOperations, status} = props;

    return (
        <>
            <div className="card-body">
                <form>
                    <div className="input-group">
                        <input type="text"
                               className="form-control"
                               placeholder="Operation description"/>

                        <div className="input-group-append">
                            <button className="btn btn-info">
                                Add
                                <i className="fas fa-plus-circle ml-1"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <ul className="list-group list-group-flush">
                <Operation/>
            </ul>
        </>
    )
}