import React, { Component } from 'react'
import { connect } from 'react-redux'

import Widget from "../Widget";

export class CustomerDashboard extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="/">Dashboard</a>
                        <span className="navbar-text ml-auto">
                            {this.props.login.user.username}
                        </span>
                    </nav>
                </div>
                <div className="container-fluid mt-2">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
                            <Widget isLoading={true} />
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
                            <Widget isLoading={false} text="Closed Tickes" value="234" />
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
                            <Widget isLoading={false} text="Closed Tickes" value="234" type="success" />
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
                            <Widget isLoading={false} text="Closed Tickes" value="234" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    login: state.login
})

export default connect(mapStateToProps, null)(CustomerDashboard)