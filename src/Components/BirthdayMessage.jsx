// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e.target.elements.message.value);
   
//   };

// export default function BasicTextFields() {
//   const classes = useStyles();
  
  

//   return (
      
//     <form  onSubmit={handleSubmit}>
//       <TextField  id="outlined-basic"  name ="message"/>
//       <Button type="submit">Save</Button>
//     </form>
    
//   );
// }
// //export default BasicTextFields;


import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
 
const list = [
  {
    id: 'a',
    name: 'Robin',
  },
  {
    id: 'b',
    name: 'Dennis',
  },
];
 
const BirthayMessage = () => {
  return (
    <List>
      {list.map((item) => (
        <ListItem key={item.id}>{item.name}</ListItem>
      ))}
    </List>
  );
};
 
export default BirthayMessage;