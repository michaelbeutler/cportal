import React, { Component } from 'react'

import "./Widget.scss";
export class Widget extends Component {
    render() {
        if (this.props.isLoading) {
            return (
                <div
                    className={`card d-flex justify-content-center align-items-center${this.props.isLoading ? " widget-loading" : ""}`}
                    style={{ height: "100%" }}
                >
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        let type = "";
        if (this.props.type) {
            switch (this.props.type.toUpperCase()) {
                case "SUCCESS":
                    type = "widget-success";
                    break;

                default:
                    break;
            }
        }
        return (
            <div className={`card ${type}`}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.value}</h5>
                    <p className="card-text">{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Widget;
