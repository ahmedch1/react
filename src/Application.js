import React, {Component} from "react";

class Application extends Component {
    render() {
        let name = "Nicks";
        return (
            <div>
                <h1>Hello, {name}</h1>
                <span>this</span>
            </div>
        );
    }
}

export default Application;