import  ReactDOM from "react-dom/client";
import Product from "./product";
import Counter from "./buttonIncrement";

const rootElement=document.getElementById('root');
const rootRef=ReactDOM.createRoot(rootElement);
rootRef.render(<Product/>);

