import { Container } from "@mui/material";

export default function Blog() {
  return (
    <Container>
        <div>
            <h2 style={{fontSize:"35px", textAlign:"center"}} >Blog</h2>
        </div>
        <div className="card  bg-base-100 shadow-xl mb-5">
        <div className="card-body">
            <h2 className="card-title">Tell us the differences between uncontrolled and controlled components?</h2>
            <p>Controlled Components:</p>

            <ul>
                <li>React manages the state.</li>
                <li>Form elements are tied to React state.</li>
                <li>Changes to state trigger re-renders.</li>
            </ul>

             <p>   Uncontrolled Components:</p>
            <ul>
                <li>DOM controls the state.</li>
                <li>Form elements are not tied to React state.</li>
                <li>Changes to the component dont trigger re-renders.</li>
            </ul>
        </div>
        </div>
        <div className="card  bg-base-100 shadow-xl mb-5">
        <div className="card-body">
            <h2 className="card-title">How to validate React props using PropTypes?</h2>
            <p>
                Controlled Components:

                Definition: In a controlled component, form data is handled by the React components state.
                Key Features:
                State holds the current value of the input elements.
                Changes to input values are handled by React state, and React re-renders the component with the updated state.
                Example: In a controlled input field, the value is controlled by React state.

                Uncontrolled Components:

                Definition: In an uncontrolled component, form data is handled by the DOM itself.
                Key Features:
                Form data is not controlled by React state; instead, its directly managed by the DOM.
                Typically, refs are used to interact with the DOM elements to get their values.
                Example: In an uncontrolled input field, the value is not controlled by React state; you directly query the DOM to get the value.
            </p>
        </div>
        </div>

        <div className="card  bg-base-100 shadow-xl mb-5">
        <div className="card-body">
            <h2 className="card-title">Tell us the difference between nodejs and express js?</h2>
            <p>
                Node.js:

                Role: JavaScript runtime for server-side execution.
                Core Feature: Event-driven, non-blocking I/O.
                Use Cases: Building scalable network applications, real-time applications.

                Express.js:

                Role: Web application framework for Node.js.
                Core Features: Middleware, routing, templating.
                Use Cases: Building web applications, RESTful APIs, microservices.

                Difference:

                Scope: Node.js is a runtime; Express.js is a framework for web development.
                Abstraction Level: Node.js is lower-level; Express.js is a higher-level web-specific framework.
                HTTP Handling: Node.js provides low-level HTTP handling; Express.js simplifies it with middleware and routing.
            </p>
        </div>
        </div>
        <div className="card  bg-base-100 shadow-xl mb-5">
        <div className="card-body">
            <h2 className="card-title">What is a custom hook, and why will you create a custom hook?</h2>
            <p>
            Custom Hook:

                A custom hook is a JavaScript function whose name starts with use and may call other hooks.
                It allows you to reuse stateful logic across components.
                Enables you to extract component logic into reusable functions.
                Reasons to Create Custom Hooks:

                Reusability: Extract and reuse common logic across different components.
                Maintainability: Centralize complex logic for easier management and updates.
                Readability: Simplify components by abstracting away complex or repetitive code.
                Testing: Facilitate easier testing of specific logic by isolating it in a custom hook.
                Consistency: Ensure consistent application of logic across various parts of your application.
            </p>
        </div>
        </div>
    </Container>
  )
}
