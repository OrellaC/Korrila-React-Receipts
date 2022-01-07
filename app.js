const receipt1 =
{
    person: 'Karolin',
    order: {
        main: 'Burrito',
        protein: 'Organic Tofu',
        rice: 'Purple Rice',
        sauce: 'Green Crack',
        toppings: [
            'Baby Bok Choy', 'Cucumber Kimchi'
        ],
        drink: 'Korchata',
        cost: 22
    },
    paid: false
}
const receipt2 = {
    person: 'Jerrica',
    order: {
        main: 'Rice Bowl',
        protein: 'Ginger Soy Chix',
        rice: 'Sticky Rice',
        sauce: 'Korilla',
        toppings: [
            'Yuzu Pickled Sweet Pepper', 'Kale'
        ],
        drink: 'Korchata',
        cost: 19
    },
    paid: false
}
const receipt3 = {
    person: 'Matt',
    order: {
        main: 'Salad Bowl',
        protein: 'Organic Tofu',
        rice: 'none',
        sauce: "K'lla",
        toppings: [
            'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
        ],
        drink: 'Sparkling Blood Orange Soda',
        cost: 20
    },
    paid: true
}
// class Header extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Korilla</h1>
//             </div>
//         )
//     }
// }
class App extends React.Component{
    state ={
        receipt1: receipt1,
        receipt2: receipt2,
        receipt3: receipt3
    }
}
render (){
    return(
        <div>
            <h1 className='truck-name'>Korilla</h1>
            <h4>{this.state.receipt1}</h4>
            <h4>{this.state.receipt2}</h4>
            <h4>{this.state.receipt3}</h4>
        </div>
    )
}
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)