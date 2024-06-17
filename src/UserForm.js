import { Button, Grid, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const UserForm = ({addUser,updateUser,submitted,data,isEdit}) => {

    const [id,setId]=useState(0);
    const [name,setName]=useState('');

    useEffect(()=>{
      if(!submitted){
        setId(0);
        setName('');
      }
    },[submitted]);

    useEffect(()=>{
      if(data?.id && data.id !==0){
        setId(data.id);
        setName(data.name);
      }
    },[data])
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#ffffff",
        marginBottom: "100px",
        display: "block",
        margin: 0, padding: 0,
        width:'80%',
      }}
      borderRadius='10px'
      border='4px solid white'
      
      
    >
      <Grid item xs={12}>
        <Typography component={"h1"} sx={{ color: "#ffffff",backgroundColor: "#000000",width:'100%',height:"70px",fontSize:'40px',textAlign:'center',fontWeight:'900',marginBottom:'20px'}}>
          User Form
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} sx={{ display: "flex",justifyContent:'center',alignItems:'center',marginBottom:'10px' }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "#000000",
            fontSize: "16px",
            width: "100px",
            display: "block",
            justifyContent:'center',alignItems:'center',
          }}
        >
          ID
        </Typography>
        <Input
          type="number"
          id="id"
          name="id"
          sx={{ width: "100%" }}
          value={id}
          onChange={e => setId(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={12} sx={{ display: "flex",justifyContent:'center',alignItems:'center'  }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "#000000",
            fontSize: "16px",
            width: "100px",
            display: "block",
            justifyContent:'center',alignItems:'center',
          }}
        >
          Name
        </Typography>
        <Input
          type="text"
          id="name"
          name="name"
          sx={{ width: "100%" }}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Grid>
      <Button
        sx={{
          margin: "auto",
          marginBottom: "20px",
          backgroundColor: "#f39c12",
          color: "#000000",
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          marginTop: "20px",
          padding:'10px',
          paddingRight:'30px',
          paddingLeft:'30px',
          fontWeight:'800',
          fontSize:'20px',
          '&:hover':{
            // opacity:'0.7',
            backgroundColor:'#804600 ',
            color:'white'
          }
        }}
        onClick={()=>isEdit?updateUser({id,name}) :addUser({id,name})}

      >
        {isEdit?"Update":"Add"}
      </Button>
    </Grid>
  );
};

export default UserForm;
