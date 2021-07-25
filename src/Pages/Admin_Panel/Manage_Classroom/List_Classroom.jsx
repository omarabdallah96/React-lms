import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../../api";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const StyledTableCell = withStyles((theme) => ({
  head: {
    background: "#11101d",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    maxWidth: 1500,
  },
  tr: { color: "red" },
});

export default function List_Classroom(props) {
  const [open, setOpen] = useState(false);
  const [id, setid] = useState("");

  const handleClickOpen = (id) => {
    setid(id);

    setOpen(true);
    // console.log(id);
  };

  const handleClose = () => {
    setOpen(false);
    setid("");
  };

  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [classrooms, setClassrooms] = useState([]);

  const fetchdata = async () => {
    try {
      await API.get("classroom").then((res) => {
        const result = res.data;
        setClassrooms(result);
      });
    } catch (e) {
      console.log(e);
    }
    // const result = await fetch(`http://127.0.0.1:8000/api/classroom`);
    // const data = await result.json();
    // setClassrooms(data);
  };

  const deleteClassroom = async (id) => {
    try {
      await API.delete(`classroom/${id}`);
      let filter = [...classrooms].filter((classrooms) => classrooms.id !== id);
      setClassrooms(filter);
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="App">
      <h3>Classroom List</h3>
      <div style={{ float: "right", textAlign: "center" }}>
        <TextField
          id="standard-basic"
          label="Search Classroom"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div class="btn-group pull-right" style={{ float: "right" }}>
          <Link style={{background:"#11101d",color:"white"}} class="btn btn btn-group-sm" to="/classroom/create">
            Add Classroom
          </Link>
        </div>
      </div>
      <br />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>

              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {classrooms
              .filter((classroom) => {
                if (search === "") {
                  return classroom;
                } else if (
                  classroom.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return classroom;
                }
              })
              .map((classroom) => {
                return (
                  <StyledTableRow key={classroom.id}>
                    <StyledTableCell>{classroom.id}</StyledTableCell>
                    <StyledTableCell>{classroom.name}</StyledTableCell>
                    <StyledTableCell>
                      <Link to={`/classroom/edit/${classroom.id}`}>
                        <EditIcon />
                      </Link>

                      <DeleteIcon
                        style={{ fill: "red", cursor: "pointer" }}
                        //  onClick={() => delete_student(student.id)}
                        onClick={() => handleClickOpen(classroom.id)}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle 
         style={{ background: "#11101d", color: "white" }}
        id="alert-dialog-title">{"Delete Classroom!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this classroom?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => deleteClassroom(id)} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    // <div>
    //   <table border="2px">
    //     <tr>
    //       {/* <td>ID</td> */}
    //       <td>Name</td>
    //     </tr>
    //     {classrooms.map((classroom) => (
    //       <tr>
    //         {/* <td>{classroom.id}</td> */}
    //         <td>{classroom.name}</td>
    //         <td>
    //           <Link
    //             onClick={() =>
    //               props.history.push(`/classroom/edit/${classroom.id}`)
    //             }
    //           >
    //             Edit
    //           </Link>
    //         </td>
    //         <td>
    //           <Link onClick={() => deleteClassroom(classroom.id)}>Delete</Link>
    //         </td>
    //       </tr>
    //     ))}
    //   </table>
    // </div>
  );
}
