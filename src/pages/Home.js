import React, {useEffect,useState} from "react";
import Header from "../components/Header";
import axios from "axios";
import {Link} from "react-router-dom";
import ListStudents from "../components/ListStudents"
const Home=()=>{
    const [students,setStudents]=useState(null)
    useEffect(()=> {
        axios.get("https://localhost::3004/students").then((response)=> {setStudents(response.data)}).catch((error)=>{})
    },[])
    if(students==null){return null}
    return(
        <div>
            <Header/>
            <div className="container mt-5 d-flex justify-content-end">
                <Link to={"/add-student"} className="btn btn-primary"> Add New Student </Link>
            </div>
            <ListStudents stundents={students}/>
            
        </div>
    )
}

export default Home