import { useEffect, useState } from "react"

function DataFetching(){
    //create a state variable to assign response JSON
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fetchMyData=async()=>{
            //await() fxn works only in asynchronous async() fxn
            /* To fetch data from APIs using Asynchronous await in ReactJS we will make an API request. 
            Fetching data is an asynchronous process which means it does not update instantly and takes time to fetch the data. 
            The await keyword enables the assignment to state when data is available and is completely fetched. */
            const response=await fetch('https://jsonplaceholder.typicode.com/posts');
            const resData=await response.json();
            setData(resData);
            console.log(data);
        }
        fetchMyData();
    });
    return(
        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">UserId</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((dataItem,index)=>
                    <tr key={index}>
                        <td>{dataItem.id}</td>
                        <td>{dataItem.userId}</td>
                        <td>{dataItem.title}</td>
                        <td>{dataItem.body}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default DataFetching;