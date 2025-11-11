/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>Im h1 tag</h1>
 *           <h2>Im h2 tag</h1>
 *      </div>
 * </div>
 * 
 * 
 * 
 * 
 */

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "h1" }, "Hello H1"),
        React.createElement("h2", { id: "h2" }, "Hello H2")]))




//const heading = React.createElement("h1", { id: "heading" }, "Hello react");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 