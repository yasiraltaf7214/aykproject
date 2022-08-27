import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CompanyLogo from './CompanyLogo';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: 'it’s easy for marketers to brag about how great their product or service is. Writing compelling copy, shooting enticing photos, or even producing glamorous videos are all tactics',
    aName: 'Ethan J.Cooper',
    info:'Managing Partner, supercheapcar.com',
    imgPath:
      'https://wp.xpeedstudio.com/sassico/wp-content/uploads/2019/09/testimonial-img-1.png',
  },
  {
    label: 'it’s easy for marketers to brag about how great their product or service is. Writing compelling copy, shooting enticing photos, or even producing glamorous videos are all tactics',
    aName: 'Jane Doe',
    info:'Managing Partner, supercheapcar.com',
    imgPath:
      'https://wp.xpeedstudio.com/sassico/wp-content/uploads/2019/10/Team-Image.jpg',
  },
];

const Testimonial = () => {

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: '100%', textAlign:'center', paddingTop:'150px' }}>
      <Grid container>
        <Grid item lg={4}>
        <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  borderRadius:'50%',
                  height: 150,
                  maxWidth: 150,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
        </Grid>
        <Grid item lg={6}>
          <item>
          <Paper
        square
        elevation={0}
        sx={{
          textAlign:'left',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography><br /><br />
        <Typography sx={{fontWeight:'bold', color:'#00b870'}}>{images[activeStep].aName}</Typography>
        <Typography>{images[activeStep].info}</Typography>
      </Paper>
          </item>
        </Grid>
        <Grid item lg={2}>
          <item >
          <Button
            size="small"
            onClick={handleNext}
            variant="outlined"
            disabled={activeStep === maxSteps - 1}
            sx={{backgroundColor:'Background.default', color:'#00b870',outlineColor:'#00b870', margin:'10px'}}
          >
            <ArrowForwardIosIcon />
          </Button>
          </item><br />
          <item>
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}
          variant="outlined"
          sx={{backgroundColor:'Background.default', color:'#00b870',outlineColor:'#00b870'}}
          >
            <ArrowBackIosIcon />
          </Button>
          </item>
        </Grid>
      </Grid>
      <CompanyLogo />
    </Box>
  );
}

export default Testimonial;