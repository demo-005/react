import React, { Component } from 'react';
class Main extends Component {
    state = {
        
    }
    handleClick = () => {
        console.log("====")
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <div onClick={this.handleClick}>Main</div> 
            </div>
        );
    }
}

export default Main;