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
import Attend_status from "../../../Components/Attend_status";
import { result } from "lodash";
import Sections from "../../../Components/Sections_Class";
import moment from "moment";
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

export default function List_Attendance(props) {
  const handleClickOpen = (id) => {
    setid(id);

    setOpen(true);
    // console.log(id);
  };

  const handleClose = () => {
    setOpen(false);
    setid("");
  };
  const [open, setOpen] = useState(false);
  const [id, setid] = useState("");
  const today =moment().format('YYYY-MM-DD');
  const[status,setStatus]=useState("")

  const classes = useStyles();
  const [class_name, setclassname] = useState("Grade");
  const [section_name, setsectionname] = useState("");
  const [section_id, setsectionid] = useState("");
  const [attend_date, setattend_date] = useState(today);

  const [sections, setSections] = useState([]);
//delete_attendance of student

  const delete_attendance = async (delete_id) => {
    await API.delete(`attendance/${delete_id}`);
    let filter = [...sections].filter((sections) => sections.attend_id !== delete_id);
    setSections(filter);
    handleClose();
    
  };
  //change status of student

  const changestatus=async(attend_id)=>{
    let reqBody = {
      label:status,
     

    };
    console.log(reqBody)
  await API.put(`attendance/${attend_id}`,reqBody);
 
  }

  const fetchdata = async () => {
    console.log(section_id);
    console.log(attend_date);

    try {
      const result = await API.get(
        `attendance_section/${section_id}/${attend_date}`
      );

      setSections(result.data);
      setclassname(result.data[0].classroom_name);
      setsectionname(result.data[0].section_name);

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [section_id, attend_date]);

  return (
    <div className="App">
      <Sections
        value={section_id}
        omar={(e) => setsectionid(e.currentTarget.value)}
      />
      <input
        type="date"
        value={attend_date}
        onChange={(e) => setattend_date(e.currentTarget.value)}
      />

      <center>
        <h3>
          {class_name} {section_name}
        </h3>{" "}
      </center>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell>Last Name</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>

              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sections.map((section) => {
              return (
                <StyledTableRow key={section.id}>
                  <StyledTableCell>{section.student_fname}</StyledTableCell>
                  <StyledTableCell>{section.student_lname}</StyledTableCell>
                  <StyledTableCell>
                    <Attend_status
                      value={section.label}
                      status={()=>changestatus(section.attend_id)}
                      omar={(e) => setStatus(e.target.value)}
                    />
                  </StyledTableCell>

                  <StyledTableCell>
                    <Link to={`/section/info/${section.section_name}`}>
                      <VisibilityIcon style={{ color: "black" }} />
                    </Link>
                    <DeleteIcon
                        style={{ fill: "red", cursor: "pointer" }}
                        //  onClick={() => delete_student(student.id)}
                        onClick={() => handleClickOpen(section.attend_id)}
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
        <DialogTitle id="alert-dialog-title">{"Delete Section!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this Section?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => delete_attendance(id)} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
