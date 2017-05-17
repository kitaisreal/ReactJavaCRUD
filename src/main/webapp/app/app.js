import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {

    render() {
        return <UserForm />
    }
}

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ""};
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChange(e) {
        var val = e.target.value;
        this.setState({name: val});
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("Input: " + this.state.name);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>Input:</label><br />
                    <input type="text" value={this.state.name} onChange={this.onChange}/>
                </p>
                <input type="submit" value="Search" />
            </form>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));