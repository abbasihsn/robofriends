import React, {Component} from 'react';

class ErrorBoundaries extends Component{
    constructor (props){
        super(props);
        this.state = {
            hasErrors:false
        }
    }

    componentDidCatch(){
        this.setState({hasErrors: true});
    }

    render(){
        if(this.state.hasErrors){
            return <h1>OoOopppss!!! That does not look good!</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundaries;