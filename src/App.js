// import logo from './logo.svg';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './App.css';

// function app() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



class App extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App1">
            <h1> Fetch data from an api in react </h1> <ul>  {
                items.map((item) => ( 
                   
                        <li key = { item.id } >
                            User_Name: { item.username }, 
                            Full_Name: { item.name }, 
                            User_Email: { item.email } 
                        </li>
                   
                ))
            } </ul>
        </div>
    );
}
}
   
export default App;
