import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: this.props.initialIndex
        }
    }

    render() {
        console.log(this.props.children);
        return (this.props.children);
    }
}

class Tab extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={() => console.log(this.props.tabIndex)}>
                {this.props.name}
            </button>
        );
    }
}

export { Tab };

export default Tabs;