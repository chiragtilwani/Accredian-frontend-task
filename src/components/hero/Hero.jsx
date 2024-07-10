import { Button, Typography } from "@material-ui/core";

import "./Hero.css";
import CustomizedSteppers from '../stepper/CustomizedSteppers'

const HeroSection = (props) => {
  return (
    <div className="hero">
      <div className="hero-section">
        <Typography variant="h2">Let&apos;s Learn & Earn</Typography>
        <Typography variant="h5">
          Get a chance to win up to Rs. 15,000
        </Typography>
      </div>
      <CustomizedSteppers/>
      <Button
        variant="contained"
        className="button"
        onClick={props.handleReferBtnClick}
      >
        Refer Now
      </Button>
    </div>
  );
};

export default HeroSection;
