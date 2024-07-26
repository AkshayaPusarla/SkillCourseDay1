import  ReactDOM from "react-dom/client";
import Parent from "./parent";
import HomePage from "./HomePage";
import Navigation from "./Navbar";

const rootElement=document.getElementById('root');
const rootRef=ReactDOM.createRoot(rootElement);
rootRef.render(<Parent/>);

