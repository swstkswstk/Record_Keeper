import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';


const Fields = (props) => {
  return (


    <div className='data_val'>
      <h4>{props.name}</h4>
      <h4>{props.email}</h4>
      <Button variant="contained" color="error">
      <DeleteIcon />
      </Button>

    </div>

  )
}

export default Fields