import { useEffect, useState } from "react";
import axios from "axios";

function DataFetchingAxios(){
    //create a state variable to assign response JSON
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fetchMyData=async()=>{
            //await() fxn works only in asynchronous async() fxn
            /* To fetch data from APIs using Asynchronous await in ReactJS we will make an API request. 
            Fetching data is an asynchronous process which means it does not update instantly and takes time to fetch the data. 
            The await keyword enables the assignment to state when data is available and is completely fetched. */
            const response=await axios.get('https://fakestoreapi.com/users');
            const resData=await response.data;
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
                        <th scope="col">UserName</th>
                        <th scope="col">Fisrst Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Password</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Zipcode</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((dataItem,index)=>
                    <tr key={index}>
                        <td>{dataItem.id}</td>
                        <td>{dataItem.username}</td>
                        <td>{dataItem.name.firstname}</td>
                        <td>{dataItem.name.lastname}</td>
                        <td>{dataItem.password}</td>
                        <td>{dataItem.address.city}</td>
                        <td>{dataItem.phone}</td>
                        <td>{dataItem.address.zipcode}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default DataFetchingAxios;