import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const users = [
  {
    id: 1,
    name: "kushan",
  },
  {
    id: 2,
    name: "Amali",
  },
];

const Users = () => {
  return (
    <Box 
    sx={{
        width:'calc(100%-100px)',
        margin:'auto',
        marginTop:'100px',
        marginLeft:'50px'
    }}>
      <UserForm />
      <UsersTable rows={users}/>
    </Box>
  );
};

export default Users;
