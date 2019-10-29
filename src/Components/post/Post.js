import React, { Component } from "react";
import { deletePost } from "../../redux/PostReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class Post extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="match-params">
                <h1>{this.props.match.params.post_id}</h1>
                    <Link to="/dashboard" style={{ textDecoration: "none" }}>
                        <button>dashboard</button>
                    </Link>
            </div>
        );
    }
}

export default connect(null, { deletePost })(Post)