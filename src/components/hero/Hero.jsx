import { Button, Typography } from "@material-ui/core";

import "./Hero.css";
import CustomizedSteppers from '../stepper/CustomizedSteppers'

const HeroSection = (props) => {

  function handleClick() {
    props.onReferNow()
  }
  return (
    <div className="hero">
      <div className="hero-section">
        <Typography variant="h2" className="typography-h2">Let&apos;s Learn & Earn</Typography>
        <Typography variant="h5" className="typography-h5">
          Get a chance to win up to Rs. 15,000
        </Typography>
      </div>
      <CustomizedSteppers/>
      <Button
        variant="contained"
        className="button"
        onClick={handleClick}
      >
        Refer Now
      </Button>
    </div>
  );
};

export default HeroSection;
