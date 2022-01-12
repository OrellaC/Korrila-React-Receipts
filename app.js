class App extends React.Component {

    state ={
        receiptList:receipts
    }
    // state = {
    //     receipt1: receipt1,
    //     receipt2: receipt2,
    //     receipt3: receipt3
    // }
    // Make a Receipt component that renders the first receipt's
    render() {
        return (
            <div className="receipt-container">
                <h3>Here is the receipt for the first customer</h3>
                {/* <h4>{this.state.receipt1.person}</h4>
                <h4>{this.state.receipt1.order}</h4>
                <h4>{this.state.receipt1.drink}</h4>
                <h4>{this.state.receipt1.cost}</h4> */}

{this.state.receiptList.map[0]}


                {/* <h4>{this.state.person}</h4>
                <h4>{this.state.order}</h4>
                <h4>{this.state.drink}</h4>
                <h4>{this.state.cost}</h4> */}

                {/* Conditionally Render the receipts if they have been paid or not */}
                <h2> These Items Have Been Purchased</h2>
                <ul>

                </ul>






            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)