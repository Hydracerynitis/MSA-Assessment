import React,{useState} from 'react'
import { createStyles, IconButton, makeStyles, Paper, Theme, useTheme, withStyles, Typography } from '@material-ui/core'
import {Table, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableBody} from '@material-ui/core'
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import './EntryDiary.css'

interface Entry{
    Location:string,
    Address:string,
    Arrive:string,
    Leave:string
}
export interface Diary{
    Entires:Entry[],
    interests:string[]
}
const createStyle = makeStyles((theme: Theme) =>(
    createStyles({
        root: {
            flexShrink: 0,
            width:"100%"
            
        },
        container: {
            maxHeight: 500,
        },
        pagination:{
          flexShrink: 0,
          marginLeft: theme.spacing(2.5),
        }
})));

const IntrestedRow = withStyles((theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: "#e65100",
      },
    }),
)(TableRow);
  interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
  }
  
function TablePaginationActions(props: TablePaginationActionsProps) {
    const classes = createStyle();
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;  
    const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {onPageChange(event, 0);};  
    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {onPageChange(event, page - 1);};  
    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {onPageChange(event, page + 1);};
    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));};
    return (
      <div className={classes.pagination}>
        <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="next page">
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton onClick={handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="last page">
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
  

export const EntryDiary= (input:Diary)=>{
    const classes=createStyle()
    const sort=input.Entires.sort((e1,e2)=>(e2.Arrive<e1.Arrive? -1: 1))
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {setPage(newPage);};
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    return(
    <div>
    <Paper className={classes.root}>
        <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="entry diary">
                <TableHead>
                    <TableRow>
                        <TableCell key="Name" align="left" style={{minWidth:170}}>Location Name</TableCell>
                        <TableCell key="Address" align="left" style={{minWidth:270}}>Location Address</TableCell>
                        <TableCell key="Name" align="left" style={{minWidth:170}}>Arriving Time</TableCell>
                        <TableCell key="Name" align="left" style={{minWidth:170}}>Leaving Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sort.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row)=>{
                        if(input.interests.includes(row.Location)){
                            return(                 
                                <IntrestedRow role="checkbox" key={row.Arrive}>
                                    <TableCell key="Name" align="left" style={{minWidth:170, color:"white"}}>{row.Location}</TableCell>
                                    <TableCell key="Address" align="left" style={{minWidth:270, color:"white"}}>{row.Address}</TableCell>
                                    <TableCell key="Name" align="left" style={{minWidth:100, color:"white"}}>{row.Arrive.replace("T"," ")}</TableCell>
                                    <TableCell key="Name" align="left" style={{minWidth:100,color:"white"}}>{row.Leave.replace("T"," ")}</TableCell>
                                </IntrestedRow>
                            )
                        }
                        else{
                            return(                          
                                <TableRow role="checkbox" key={row.Arrive}>
                                    <TableCell key="Name" align="left" style={{minWidth:170}}>{row.Location}</TableCell>
                                    <TableCell key="Address" align="left" style={{minWidth:270}}>{row.Address}</TableCell>
                                    <TableCell key="Name" align="left" style={{minWidth:100}}>{row.Arrive.replace("T"," ")}</TableCell>
                                    <TableCell key="Name" align="left" style={{minWidth:100}}>{row.Leave.replace("T"," ")}</TableCell>
                                </TableRow>
                            )
                        }
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]} colSpan={3} count={sort.length}
        rowsPerPage={rowsPerPage} page={page} SelectProps={{inputProps: { 'aria-label': 'rows per page' },native: true,}}
        onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} ActionsComponent={TablePaginationActions}/>
    </Paper>
    <Typography variant="h6" color="textSecondary" >The Entries that are marked orange are associated with a location of interest.</Typography>
    </div>
    )
}