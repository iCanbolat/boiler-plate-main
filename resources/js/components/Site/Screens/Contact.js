import React from 'react'
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { styled } from '@mui/material/styles';
import { Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useFormik } from 'formik';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { TextValidator } from 'react-material-ui-form-validator';

const position = [41.02268710802584, 29.04842049349439]

const StyledButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#1c1a1a',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    textTransform: 'none',
    
  }));

const StyledIcon = styled(ArrowRightAltIcon)(({ theme }) => ({
    color: '#1c1a1a',
    backgroundColor: 'white',
    borderRadius: '50%',
 
  }));
  
  
  const regex = '/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im'

const Contact = () => {
    const [age, setAge] = React.useState('');
    const [full, setFull] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [message, setMessage] = React.useState('');


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
        <Grid container >
            <Grid item md={12} xs={12} >
                <MapContainer center={position} style={{height:300}} zoom={12}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    </Marker>
                 </MapContainer>
            </Grid>
        </Grid>

    <Container sx={{ my:5 }}>
        <Grid container spacing={5}>
            <Grid item md={4} xs={12} sx={{height:510 , mb:5}} >
                <Card sx={{ p:2, height:'100%', backgroundColor:'#3fa435', color:'white'}}>
                    <CardContent>
                        <Typography sx={{fontWeight:'bold'}}  variant="h5" component="div">
                        Adres Bilgileri
                        </Typography>
                        <Typography sx={{pl:2, pt:1, pb:3, fontWeight:'bold'}} variant="body1" component="div">
                        Ord. Prof. Dr. Fahrettin Kerim Gökay Cd. No:36, Altunizade 34662 Üsküdar/İstanbul
                        </Typography>

                        <Typography sx={{fontWeight:'bold', pb:1}}  variant="h5" component="div">
                        İletişim Bilgileri
                        </Typography>
                        <Typography sx={{pl:2, pt:1, fontWeight:'bold'}} variant="body1" component="div">
                        Telefon: +90 216 544 24 00 
                        </Typography>
                        <Typography sx={{pl:2, pt:1, fontWeight:'bold'}} variant="body1" component="div">
                        Fax: +90 216 544 24 00 
                        </Typography>
                        <Typography sx={{pl:2, pt:1, fontWeight:'bold'}} variant="body1" component="div">
                        E-Posta: info@eksim.com.tr
                        </Typography>

                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={8} xs={12}>
                <Typography sx={{fontWeight:'bold', mb:3}}  variant="h5" component="div">
                    İletişim
                </Typography>
                <Typography sx={{fontWeight:'bold', color:'#b4b4b4', mb:4}} variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                </Typography>
                <ValidatorForm >

                <Grid container spacing={3}>
                    
                    <Grid item md={6} xs={12}>
                        <TextValidator fullWidth name='fullName' id="fullName" label="Ad Soyad"  variant="outlined" 
                        validators={['required','minNumber:3', 'maxNumber:255']}
                        onChange={(e) => setFull(e.target.value)}
                        errorMessages={['Bu alan gerekli']}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextValidator 
                            fullWidth 
                            variant="outlined" 
                            label="Email"
                            id='email'
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            value={email}
                            validators={['required', 'isEmail']}
                            errorMessages={['Bu alan gerekli', 'Hatalı Email']}/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextValidator 
                        fullWidth 
                        variant="outlined" 
                        label="Phone"
                        onChange={(e) => setPhone(e.target.value)}
                        name="phone"
                        value={phone}
                        validators={['required', 'matchRegexp:^(05)([0-9]{2})s?([0-9]{3})s?([0-9]{2})s?([0-9]{2})$']}
                        errorMessages={['Bu alan gerekli',  'Hatalı Numara' ]} 
                        
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Lorem ipsum</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="select"
                            name='select'
                            value={age}
                            label="Lorem ipsum"
                            onChange={handleChange}
                            validators={['required']}
                            errorMessages={['Bu alan gerekli' ]} 
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                     </FormControl>          
                    </Grid>
                    <Grid item xs={12}>
                    <TextValidator
                        id="message"
                        name='message'
                        label="Mesajınız"
                        onChange={(e) => setMessage(e.target.value)}
                        multiline
                        rows={4}
                        fullWidth
                        validators={['required']}
                        errorMessages={['Bu alan gerekli' ]} 
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <StyledButton 
                            startIcon={<StyledIcon />} 
                            variant="contained"
                            size="large"
                            type='submit'
                            sx={{ px:4, py:2 }}
                            >
                            Gönder
                            </StyledButton>
                    </Grid>
                </Grid>
                </ValidatorForm>
            </Grid> 
        </Grid>
    </Container>    
    </>
  )
}

export default Contact