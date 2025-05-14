//React is a JavaScript library created by Facebook
//Most popular JavaScript library for creating UI
//Also used by netflix and instagram
//Used to create single page applications(SPA)
//Reacti is a library not a framework
//A library in programming can be explained as a collection of codes. We use a library 
//A framework on other hand is a complete package of code with its own functionalities and libraries. A framework has its own rules you dont have much flexibility and the project is dependent on the framework you use
// React creates a virtual dom , dom is basically representation of html code in webpage
//Each time you make a change in the code DOM will be completely updated and rewritten this is an expensive operation and consumes lots of time in this point react provides a solution the virtual dom
//react first creates an exact copy of dom
//then react figures out which part is new and only updates that specific part in the virtual dom
//finally react copies only the new parts of the virtual dom to the actual dom rather than completely rewriting it.
//JSX : React's core syntax(JavaScript XML)
//In classic fronted programming we have separated html,css
//JSX is a syntax extension to JavaScript used by react 
//JSX is basically used to write html tags inside Javascript late the jsx code will be translated into normal JavaScript by babel.
//In summary react dosent have html files, html tags are rendered directly inside JavaScript this approach makes react faster.

//Rules about JSX
//we cant return more than one html element at once, but we can wrap the elements inside a parent html tag
// we can use JSX inside for loops, if else cases
//Html attribute names like "class" becomes "className"
//If for is mentioned we use htmlFor
//Html tags must always be closed

//React component 
//Component is an independent resuable code block which divides the UI into smaller pieces.
//In other words we can think of components as lego blocks. likewise we create a lego structure from many little lego blocks we create a webpage or UI

//A functional component is basically a JS 
// function Welcome(props){
//     return <h1>Hello, {props.name}</h1>;
// }
//Props
//React ia a component based library which divides the UI into little reusable pieces In some cases, those components need to communicate(send data to each other) and the way to pass data between components is by using props.