import React from "react";
import { Button, Paper, Stack, Badge, Chip, Card } from '@mui/material';
import { blue, yellow, red, pink , lime} from '@mui/material/colors';
import Blusa01 from '../../Imagens/blusa01.svg';
import Tenis from '../../Imagens/tenis.svg';
import { height } from "@mui/system";

export default function ColecaoDestaque(){
    return(
        <>
                <Paper elevation={2} sx={{ backgroundColor: blue[200]}} style={{width: "405px", height: "250px", display: "flex", justifyContent: "space-between"}}>
                {/* <Paper elevation={2} id='paperstyle' sx={{ backgroundColor: blue[200]}}> */}

                    <div style={{display: "flex", flexDirection: "column", margin: "20px"}}>
                        <Chip label="30% OFF" sx={{backgroundColor: lime["A100"], fontWeight: "Bold"}} style={{width: "80px", width: "80px"}}/>
                        <h3>Novo drop <br/>Supreme</h3>
                        <Button sx={{ backgroundColor: 'white', color: pink[500], fontWeight: "bold", textTransform: "capitalize"}} style={{marginTop: "80px", width: "123px"}}>Comprar</Button>
                    </div>
                    <div className="imagem">
                        <img src={Blusa01} style={{width: "100%"}} />
                    </div>
                </Paper>
        </>
    )
}