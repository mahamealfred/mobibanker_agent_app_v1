import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid} from '@mui/material';

import { useTranslation } from "react-i18next";

import { useHistory } from 'react-router-dom';


export default function MediaCard() {
  
  const { t } = useTranslation(["home","common","login"]);
    const history=useHistory();
    const handleClickOpenAccount = () => {
      history.push("/dashboard/gt-bank-service/open-account",{push:true})
      // setOpenRRA(true);
    };
    const handleClickDeposit = () => {
      history.push("/dashboard/gt-bank-service/deposit",{push:true})
      // setOpenRRA(true);
    };
    const handleClickMoneyTransfer = () => {
      history.push("/dashboard/gt-bank-service/transfer",{push:true})
      // setOpenRRA(true);
    };
    const handleClickWithdraw = () => {
      history.push("/dashboard/gt-bank-service/withdraw",{push:true})
      // setOpenRRA(true);
    };
    const handleBack=()=>{
      history.push("/dashboard",{push:true})
    }
    return (
        <React.Fragment>
      <Grid 
        >
              <Typography id="transition-modal-title" textAlign="center" variant="h6" component="h2">
        GTBANK SERVICES
        </Typography>
          <CardMedia
                    component="img"
                    height="70"
                    image="../../images/gtbankImg.png"
                    alt="alt"
                    title="i"
                    sx={{  objectFit: "contain",
                    height:{xs:50,sm:70}}}
                />
            <Grid >
            <Typography 
            component="h1" variant="body1"
         fontWeight={800}
         color="gray"
         textAlign="center"
         sx={{ fontSize: { xs: 16 } }}
         >
      {/* {t("common:governmentservices")} */}
        </Typography>
        <Grid
    container
    spacing={0}
    alignItems="center"
    justifyContent="center"
 
>
      <Button
            onClick={handleClickOpenAccount}
           // onClick={()=> setOpenRRA(true)}
            >
            <Card
                 raised
                 sx={{
                  // maxWidth: 100,
                  width:{xs:50,sm:70,md:60,lg:80},
                  height:{xs:60,sm:60,md:60,lg:90},
                  borderRadius:5,
                  justifyContent:"center"
                  
              }}
            >
                <CardMedia
                    component="img"
                    height="50"
                    
                    image="../../images/openaccount.png"
                    alt="alt"
                    title="i"
                    sx={{ 
                      padding: "0.8em 0em 0 0em", 
                     objectFit: "contain",
               
                   }}
                     
                />
           <Typography  gutterBottom
                sx={{ padding: "1em 0em 0 0em",color:"gray",
                fontSize:10

             }}
           >
      Open Account
          </Typography>
            </Card>  
            </Button>
            <Button
            onClick={handleClickDeposit}
            >
            <Card
                  raised
                  sx={{
                   // maxWidth: 100,
                   width:{xs:50,sm:70,md:60,lg:80},
                   height:{xs:60,sm:60,md:60,lg:90},
                   borderRadius:5,
                   justifyContent:"center"
                   
               }}
            >
               <CardMedia
                     component="img"
                     height="50"
                     
                     image="../../images/deposit.png"
                     alt="alt"
                     title="i"
                     sx={{ 
                       padding: "0.8em 0em 0 0em", 
                      objectFit: "contain",
                
                    }}
                />
        <Typography  gutterBottom
                sx={{ padding: "1em 0em 0 0em",color:"gray",
                fontSize:10

             }}
           >
      Deposit
          </Typography>
            </Card>  
            </Button>
          
            <Button
             onClick={handleClickWithdraw }
            >
            <Card
                 raised
                 sx={{
                  // maxWidth: 100,
                  width:{xs:50,sm:70,md:60,lg:80},
                  height:{xs:60,sm:60,md:60,lg:90},
                  borderRadius:5,
                  justifyContent:"center"
                  
              }}
            >
<CardMedia
                     component="img"
                     height="50"
                     
                     image="../../images/withdraw.png"
                     alt="alt"
                     title="i"
                     sx={{ 
                       padding: "0.8em 0em 0 0em", 
                      objectFit: "contain",
                
                    }}
                />
        <Typography  gutterBottom
                sx={{ padding: "1em 0em 0 0em",color:"gray",
                fontSize:10

             }}
           >
      Withdraw
          </Typography>
            </Card>  
            </Button>
           </Grid>
           {/* <Typography 
            component="h1" variant="body1"
         fontWeight={800}
         color="gray"
         textAlign="center"
         sx={{ fontSize: { xs: 16 } }}
         >
      {t("common:governmentservices")}
        </Typography> 
        <Grid
         container
         spacing={0}
         alignItems="center"
         justifyContent="center"
        >
 <Button
            // onClick={handleClickOpenLTSS}
            >
            <Card
               // raised
                sx={{
                   // maxWidth: 100,
                   width:{xs:60,sm:70,md:60,lg:60},
                   height:{xs:60,sm:60,md:60,lg:60},
                   borderRadius:5,
                    margin: "0 auto 5px",
                    padding: "0.9em",
                }}
            >
               <CardMedia
                    component="img"
                    height="50"
                    
                    image="../../images/rssb.png"
                    alt="alt"
                    title="i"
                    sx={{ 
                      padding: "0em 2em 0 0em", 
                      objectFit: "contain",
                     height:{xs:40,sm:40,md:40,lg:40},
                     width:60
                    }}
                     
                />
           <Typography variant="h6" gutterBottom
                sx={{ padding: "1em 0em 0 0em",color:"gray",
                fontSize:10
             }}
           >
            RSSB
          </Typography>
            </Card>  
            </Button>     
          </Grid> */}
                <Grid container>
               <Grid item xs>
               <Button variant="text" onClick={handleBack}>
                 Go back to services
                </Button>
               </Grid>
               
             </Grid> 
       
      </Grid>

      </Grid>
        </React.Fragment>
    );
}