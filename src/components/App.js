import React from "react";
import "./../styles/App.css";
import ToDoList from "../components/to-do-list/ToDoList"

function App() 
{
	return (
	<div id="main">
	{/* //Do not alter main div
	//Please do not alter the functional component as tests depend on the type of component. */}
   
     <ToDoList />  
	 
	</div>
	);
}


export default App;
