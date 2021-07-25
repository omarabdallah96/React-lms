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
import VisibilityIcon from "@material-ui/icons/Visibility";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

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

export default function List_Section(props) {
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

  const [sections, setSections] = useState([]);

  const fetchdata = async () => {
    await API.get(`section_class`).then((res) => {
      const result = res.data;
      setSections(result);
    });
  };

  const deleteSection = async (id) => {
    await API.delete(`section/${id}`);
    let filter = [...sections].filter((sections) => sections.id !== id);
    setSections(filter);
    handleClose();
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="App">
      <h3>Sections List</h3>
      <div style={{ float: "right", textAlign: "center" }}>
        <TextField
          id="standard-basic"
          label="Search Section"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div class="btn-group pull-right" style={{ float: "right" }}>
          <Link style={{background:"#11101d",color:"white"}} class="btn btn btn-group-sm" to="/section/create">
            Add Section
          </Link>
        </div>
      </div>
      <br />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Classroom</StyledTableCell>
              <StyledTableCell>Section</StyledTableCell>
              <StyledTableCell>Max Students</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sections
              .filter((section) => {
                if (search === "") {
                  return section;
                } else if (
                  section.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return section;
                }
              })
              .map((section) => {
                return (
                  <StyledTableRow key={section.id}>
                    <StyledTableCell>{section.class}</StyledTableCell>
                    <StyledTableCell>{section.name}</StyledTableCell>
                    <StyledTableCell>{section.max_students}</StyledTableCell>
                    <StyledTableCell>
                      <Link to={`/section/info/${section.id}`}>
                        <VisibilityIcon style={{ color: "black" }} />
                      </Link>

                      <Link to={`/section/edit/${section.id}`}>
                        <EditIcon />
                      </Link>
                      <DeleteIcon
                        style={{ fill: "red", cursor: "pointer" }}
                        //  onClick={() => delete_student(student.id)}
                        onClick={() => handleClickOpen(section.id)}
                      />
                      <Link to={`/section/take_attend/${section.id}`}>
                        <AssignmentTurnedInIcon />
                      </Link>
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
        <center>

        <DialogTitle
          style={{ background: "#11101d", color: "white" }}
          id="alert-dialog-title"
        >
          
          <img src="https://img.icons8.com/emoji/32/000000/exclamation-mark-emoji.png" />
          {"Delete Section "}{" "}
        </DialogTitle>
        </center>
       
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this Section?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            style={{ background: "red", color: "white" }}
            onClick={() => deleteSection(id)}
            color="primary"
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    // <div>
    //   <table border="2px">
    //     <tr>
    //       <td>ID</td>
    //       <td>Name</td>
    //       <td>Max Students</td>
    //       <td>Classroom</td>
    //     </tr>
    //     {sections.map((section) => (
    //       <tr>
    //         <td>{section.id}</td>
    //         <td>{section.name}</td>
    //         <td>{section.max_students}</td>
    //         <td>{section.classroom_id}</td>
    //         <td>
    //           <Link
    //             onClick={() =>
    //               props.history.push(`/section/edit/${section.id}`)
    //             }
    //           >
    //             Edit
    //           </Link>
    //         </td>
    //         <td>
    //           <Link onClick={() => deleteSection(section.id)}>Delete</Link>
    //         </td>
    //         <td></td>
    //       </tr>
    //     ))}
    //   </table>
    // </div>
  );
}
