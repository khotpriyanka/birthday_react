      
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const initialList = [
  {
    id: '1',
    name: 'Happy birthday',
  },
  {
    id: '1',
    name: 'Birthday wishes ',
  },
];
 
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1000,
    backgroundColor: 'pink',
  },
  nested: {
    paddingLeft: theme.spacing(8),
  },
  editHeader: {
    width: '86%',
    display: 'flex',
  },
  buttonSave: {
    paddingRight:theme.spacing(10),
  },
   
}));

// function handleSubmit(e) {
  
// }

// const DroppableChecklistBox = (props) => {
//   const {
//     message, onDragEnd, updateQuestion, deleteQuestion,
//   } = props;
// };


export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSubmit=(event)=>{
    event.preventDefault();
    // console.log(event.target.elements.message.value);
    const newList = list.concat({ name });
 
    setList(newList);


  };

  const handleChange=(event)=>{

    setName(event.target.value);

  }

  

  const [list, setList] = React.useState(initialList);
  const [name, setName] = React.useState('');
 
  

  return (
    <div  align ="center">
    <List
    // align = "center"
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
      className={classes.root}
    >
     
      <ListItem button onClick={handleClick} >
            <ListItemIcon>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
        <ListItemText primary="Birthday messages" />
        
        
      </ListItem>
      
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding >
        <ListItem>
          <form   className ={classes.root} onSubmit={handleSubmit}>
              <TextField className={classes.editHeader} variant="outlined" name ="message" onChange ={handleChange}/>
              <Button type="submit" >Save</Button>
          </form>
         </ListItem>
          {/* <ListItem button className={classes.nested} >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText 
            primary="Happy birthday"             
            />
          </ListItem>
        </List> */}

        <ListItem>
          <List component="div" disablePadding>
          
          {list.map((item) => (
                     

            <ListItemText
             
            key={item.id}>{item.name}
             
          
            </ListItemText>
            
          ))}
          </List>
        
        </ListItem>
        </List>
      </Collapse>
    </List>
    </div>
  );
}
