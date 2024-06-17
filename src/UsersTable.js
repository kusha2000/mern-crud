import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ 
          backgroundColor:'black',
          color:'white',
          border:'1px solid white'
        }}>
          <TableRow
            sx={{
              color: "#000000",
              fontSize: "16px",
              textAlign: "center",
              border:'1px solid white'
            }}
          >
            <TableCell
              sx={{
                textAlign: "center",
                color:'white',
                border:'1px solid white'
              }}
            >
              ID
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                color:'white',
                border:'1px solid white'
              }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                color:'white',
                border:'1px solid white'
              }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{
                border:'1px solid black'
              }}>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{border:'1px solid black' }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    textAlign: "center",
                    border:'1px solid black',
                    fontSize:'20px',
                  }}
                >
                  {row.id}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    textAlign: "center",
                    border:'1px solid black',
                    fontSize:'20px',
                  }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    border:'1px solid black',


                  }}
                >
                  <Button
                    sx={{ margin: "0px 10px",color:'green', fontSize:'20px',fontWeight:'800', '&:hover':{
                        // opacity:'0.7',
                        backgroundColor:'#004225 ',
                        color:'white',
                      }}}
                    onClick={() => selectedUser({ id: row.id, name: row.name })}
                  >
                    Update
                  </Button>
                  <Button
                    sx={{ margin: "0px 10px" ,color:'red', fontSize:'20px',fontWeight:'800','&:hover':{
                        // opacity:'0.7',
                        backgroundColor:'#8B0000 ',
                        color:'white'
                      }}}
                    onClick={() => deleteUser({ id: row.id })}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow sx={{border:'1px solid black' }}>
              <TableCell component="th" scope="row" sx={{
                    border:'1px solid black',
                    fontSize:'20px'
                  }}>
                No Data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
