import React from 'react';

class BarraBuscadora extends React.Component {
    constructor(props) {
        super(props);
        this.state = { termino:''}
    }
    onChange = (e) => {
        this.setState({ termino: e.target.value})
    }
    render() { 
        return (<div>
            <input
            onChange={this.onChange}
            />
            termino: {this.state.termino}
            </div>
        );
    }
}
 
export default BarraBuscadora;