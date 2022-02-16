export class Hello extends Element 
{
  componentDidMount() {
    var message = this.attributes["message"] || "?";
    this.content([
      <h1>{message}</h1>,
      <button.expand>+</button>,
      <button.collapsed>-</button>
    ]);
  }
  ["on click at button.expand"]() {
    this.state.expanded = true
  }
  ["on click at button.collapsed"]() {
    this.state.collapsed = true
  }
}