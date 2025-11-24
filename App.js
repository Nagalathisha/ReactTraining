import React from "react";
import ReactDOM from "react-dom/client";


// This very hard to read so Facebook developers introduced JSX
//React.createElement => Object => HtmlElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Hello Namste React"); 


//JSx Multiline
const jsxHeadingMultiline= (<div><h1>
    Hello Namsthe React JSX 
    </h1></div>);

    // Functional Component
    const HeadingComponent1 = () => (
        <h1>Hello Functional Component1</h1>
    )

     // Functional Component
    const HeadingComponent3 = () => {
       return <h1>Hello Functional Component3</h1>
    }

     // Functional Component
    const HeadingComponent4 = () => <h1>Hello Functional Component4</h1>;
    //Component Composition
    const ComponentComposition = ()=>(
        <div>
            {100+300}
            <h1>Component Composition</h1>
            <HeadingComponent4/>
        </div>
    )
// This is jsx code, but finally in coverts into React.createElement, But it is human friendly
const jsxHeading= (
    <div>
        {100+300}
         <HeadingComponent1/>
        <HeadingComponent3/>
<h1>Hello Namsthe React JSX1 </h1>
    </div>
) 


const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading); // This is to render element

root.render(<ComponentComposition/>); // This is to render Component
