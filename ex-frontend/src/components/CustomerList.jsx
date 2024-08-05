import React, { useEffect, useState } from "react";
import getAll from "../services/CustomerService";
import { isAdminUser } from '../services/AuthService'
import { useNavigate } from "react-router-dom";


const CustomerList = () =>{

    const [details,setDetails] = useState([])
   
    const isAdmin = isAdminUser();

    const nav = useNavigate();

    useEffect(
        () => {
            listCustomer();
        },[]     
    )

    function listCustomer(){
         getAll().then(
            (response) => {setDetails([response.data.responseData]); 
              
            }
            
         ).catch((error) => {console.error(error);}) 
         console.log(details);
         
    }
  
    function updateTodo(){

        nav("/login");

    }
    

    return (
        
        
        
         <div className='container'>
            
        
            <h2 className='text-center'>List of Customer</h2>
            {
               
               isAdmin && 
                <button className='btn btn-primary mb-2' onClick={() => updateTodo()}>Add Todo</button>
            }
            <div>
                <table className='table table-bordered table-striped'>
                    <thead>
                    
                        <tr>
                            <th>Id</th>
                            <th>Created_by</th>
                            <th>Customer_Name</th>
                            <th>Customer_Age</th>
                            <th>Customer_Mobile</th>
                            <th>Customer_Email</th>
                            <th>Customer_Address</th>
                            <th>Status</th>
                            <th>Updated_by</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       {
                            details.map((index,detail) =>


                                <tr key={index}>
                                    <td>{detail.customerId}</td>
                                    <td>{detail.createdDate}</td>
                                    <td>{detail.customerName}</td>
                                    <td>{detail.customerAge}</td>
                                    <td>{detail.customerMobileNumber}</td>
                                    <td>{detail.customerEmailAddres}</td>
                                    <td>{detail.customerAddress}</td>
                                    <td>{detail.status}</td>
                                    <td>{detail.updatedDate}</td>  
                                </tr>
                               
                            ) 
                        }
                            
                        {/*
                       <tr >
                                    <td>{details.customerId}</td>
                                    <td>{details.createdDate}</td>
                                    <td>{details.customerName}</td>
                                    <td>{details.customerAge}</td>
                                    <td>{details.customerMobileNumber}</td>
                                    <td>{details.customerEmailAddres}</td>
                                    <td>{details.customerAddress}</td>
                                    <td>{details.status}</td>
                                    <td>{details.updatedDate}</td>
                                    
                                </tr>
                                */ }
                        
    
                    </tbody>
                </table>
            </div>
    
        </div> 
      )

}
export default CustomerList
