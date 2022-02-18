/* === 1 === */
// const velement = <div id="root"> <h1>Hello, world</h1> </div>

// // document.$("div#root").patch(velement);

// function tick() {
//   const velement = <div id="root">
//     <h1>Hello, world!</h1>
//     <h2>It is {new Date().toLocaleTimeString()}.</h2>
//   </div>;
//   document.$("div#root").patch(velement);
//   return true; // to keep timer running
// }

// // setInterval(tick, 1000);

/* === 2 === */
// function WelcomeFn(props) {
//   return <h1>Hello, {props.name}</h1>
// }

// class WelcomeClass extends Element {
//   constructor(props,kids) { 
//     // ReferenceError: this is not initialized
//     this.props = props; // if needed, see also render below
//   }
//   render(props,kids) {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// const velementfn = <WelcomeFn name={"function component"} />

// // const velementclass = <WelcomeClass name={"function component"} />

// document.body.content(velementfn);

// // document.body.content(velementclass);

// function App () {
//   return <body>
//     <WelcomeFn name="Ivan" />
//     <WelcomeFn name="Olga" />
//     <WelcomeFn name="Andrew" />
//   </body>
// }

// document.body.patch( <App /> )

/* === 3 === */
class Clock extends Element 
{
  time = new Date(); // setting initial state 

  componentDidMount() { // instance of the class is attached to real DOM
    this.timer(1000, () => {
      this.componentUpdate({ time:new Date() });
      return true; // to keep the timer ticking
    });
  }

  render() {
    return <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.time.toLocaleTimeString()} now.</h2>
     </div>;
  } 
}

document.body.patch( <Clock />)
