import { Button, Typography } from '@material-ui/core';
import './Hero.css'

const HeroSection = (props) => {

  return (
    <div className="hero">
      <Typography variant="h2">Let&apos;s Learn & Earn</Typography>
      <Typography variant="h5">Get a chance to win up to Rs. 15,000</Typography>
      <Button variant="contained" color="primary" className="button" onClick={props.handleReferBtnClick}>
        Refer Now
      </Button>
    </div>
  );
};

export default HeroSection;
