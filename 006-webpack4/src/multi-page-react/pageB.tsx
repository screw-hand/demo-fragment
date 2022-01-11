import ReactDOM from "react-dom";
import HelloMessage from "./HelloMessage";
import isPagePath from "./isPagePath";

const run = () => {
  const div = document.createElement("div");
  div.id = "pageB";
  document.body.appendChild(div);

  ReactDOM.render(
    <HelloMessage name="pageB" />,
    document.getElementById("pageB")
  );
};

isPagePath(run)

export default run 
