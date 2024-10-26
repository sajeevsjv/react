import { React, Component} from 'react';

// class component
class Greeting extends Component {
    render(){
        return(
            <>
            <h1>iam a class component</h1>
            <h2>second heading</h2>
            <p>hi {this.props.name}, your age is {this.props.age}</p>
            </>
        );
    }
}
export default Greeting;