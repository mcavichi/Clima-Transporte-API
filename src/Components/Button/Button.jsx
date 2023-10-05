import Button from '@mui/material/Button';

const Boton = () => {


    const OnclickButton = () => {
        alert('Hola! Soy un boton!')
    }
    

    return (
        <div>
            <Button onClick={OnclickButton} variant="outlined">Outlined</Button>
        </div>
        
    )
}

export default Boton;