class App extends React.Component {

    state ={
        receipt1: receipt1,
        receipt2: receipt2,
        receipt3: receipt3
    }
    // Make a Receipt component that renders the first receipt's
    render() {
        return (
            <div>
                <h3>Here Are The Last Three Orders</h3>
                <h4>{this.state.receipt1}</h4>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)