import './App.css';
import Header from './components/Header'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
// import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';



function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const removeItem=(index)=>{
    let arr=data;
    arr.splice(index,1);
    setData([...arr])
  }

  const addData = () => {
    setData([...data, {
      name: name,
      email: email
    }])
    setName("");
    setEmail("");
  }

  return (
    <div className="App">
      <Header />
      <div className='form'>
        <Stack spacing={2} direction="row" className='stack'>
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined" />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined" />
          <Button
            onClick={addData}
            variant="contained"
            color='success' >
            <AddIcon />

          </Button>
        </Stack>
      </div>
      <div className='data'>


      </div><div className='data_val'>
        <h4>NAME</h4>
        <h4>EMAIL</h4>
        <h4>REMOVE</h4>

      </div>
      {
        data.map((element, index) => {
          return (
            <div key={index} className='data_val'>
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Button onClick={()=>removeItem(index)} variant="contained" color="error">
                <DeleteIcon />
              </Button>

            </div>
          )
        })
      }
    </div>
  );
}

export default App;