import {
    useState,
    useEffect
} from "react";
import{
    Button,
    Row,
    Col,
    Table
} from 'reactstrap';
import { Link } from "react-router-dom";
import Modal from "../modal/modal";
import jsonData from "../db/product.json"
import FormCreate from  "./createData"
import FormEdit from "./editData"
import { Tab } from "bootstrap";

const Dashboard = () =>{

    const [data, setData] = useState({headers:[],rows:[]})
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editedDataId, setEditedDataId] = useState({})


    const handleDelete =(id) =>{
        const updatedRows = data.rows.filter ( v=> id !== v.id);
        setData(prev=> ({
            ...prev,rows: updatedRows
        }))
    }

    const handleEdit =(id)=>{
        setEditedDataId(id)
        setIsEditModalOpen(true)
    }

    

    useEffect(()=>{
        setData(jsonData)
    },[])

    console.log(data);

    return(
        <>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div className="container-lg">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" to={`/`}>Home</Link>
                            </li>
                            
                            <li className="nav-item mx-3">
                                <Link to={`/register`} className="nav-link active" href="#">Sign Up</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to={`/login`} className="btn btn-primary px-4" href="#">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        <br/>
        <br/>
        <br/>
        <Button color="primary" onClick={()=>setIsCreateModalOpen(true)}>Add data +</Button>
        <Table>
            <thead>
                <tr>
                    {data.headers.map((header,idx)=>(
                        <th key={idx}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.rows.map((row,idx)=>(
                    <tr key={idx}>
                        <th scope="row">
                            {idx+1}
                        </th>

                        <td>{row.name}</td>
                        <td>{row.price}</td>
                        <td>{row.stock}</td>
                        <td>{row.category}</td>
                        <td>
                            <Button onClick ={()=>handleEdit(row.id)}>Edit</Button>
                        </td>
                        <td>
                            <Button color="danger" onClick ={()=>handleDelete(row.id)}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>

        {/* Add data Modal */}

        <Modal 
        title ={`Add Data`}
        isOpen={isCreateModalOpen}
        setOpen={setIsCreateModalOpen}
        children={
            <FormCreate
            data={data.rows}
            setData={setData}
            setOpen={setIsCreateModalOpen}
            />
        }

        />
        {/* Edit data Modal */}
        <Modal 
        title = {`Edit Data`}
        isOpen= {isEditModalOpen}
        setOpen = {setIsEditModalOpen}
        children = {
            <FormEdit
            data={data.rows}
            setData={setData}
            setOpen={setIsCreateModalOpen}
            editedDataId={editedDataId}
            />
        }
        />

        </>
    )
}

export default Dashboard;