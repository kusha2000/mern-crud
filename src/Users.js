import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";


const Users = () => {
  const [users,setUsers]=useState([]);
  const [submitted,setSubmitted]=useState(false);
  const [selectedUser,setselectedUser]=useState({});
  const [isEdit,setisEdit]=useState(false);

  useEffect(()=>{
    getUsers();
  },[]);

  const getUsers=()=>{
    Axios.get('http://localhost:3001/api/users')
    .then(response=>{
      setUsers(response.data?.response || []);
    })
    .catch(err=>{
      console.log("Axios Error:",err);
    })
  }
  const addUser=(data)=>{
    setSubmitted(true);
    const payload={
      id:data.id,
      name:data.name,
    }
    Axios.post('http://localhost:3001/api/createuser',payload)
    .then(()=>{
      getUsers();
      setSubmitted(false);
      setisEdit(false);
    }
    ).catch(err=>{
      console.log("Axios Error:",err);
    })
  }
  const updateUser=(data)=>{
    setSubmitted(true);
    const payload={
      id:data.id,
      name:data.name,
    }
    Axios.post('http://localhost:3001/api/updateuser',payload)
    .then(()=>{
      getUsers();
      setSubmitted(false);
      setisEdit(false);
    })
    .catch(err=>{
      console.log("Axios Error:",err);
    })
  }
  const deleteUser=(id)=>{
    
    Axios.post('http://localhost:3001/api/deleteuser',id)
    .then(()=>{
      getUsers();
    })
    .catch(err=>{
      console.log("Axios Error:",err);
    })
  }


  return (
    <Box 
    sx={{
        width:'calc(100%-100px)',
        margin:'auto',
        marginTop:'100px',
        marginLeft:'50px'
    }}>
      <UserForm addUser={addUser} updateUser={updateUser} submitted={submitted} data={selectedUser} isEdit={isEdit}/>
      <UsersTable rows={users} selectedUser={data=>{
        setselectedUser(data);
        setisEdit(true);
      }}
      deleteUser={data=>window.confirm("Are you sure?" && deleteUser(data))}
      />
    </Box>
  );
};

export default Users;
