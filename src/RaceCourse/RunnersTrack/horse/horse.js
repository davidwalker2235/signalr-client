import React, {useEffect, useRef} from "react";
import horseAnimation0 from '../../../assets/horse_run_cycle0.png';
import horseAnimation1 from '../../../assets/horse_run_cycle1.png';
import horseAnimation2 from '../../../assets/horse_run_cycle2.png';
import SpriteSheet from 'react-responsive-spritesheet';
import './horse.css';


const Horse = ({ name, index, completed }) => {
  const spriteSheetInstance = useRef();
  const progress = useRef(0);
  const horse = useRef([
    horseAnimation0,
    horseAnimation1,
    horseAnimation2
  ][Math.floor(Math.random() * (3 - 0)) + 0])

  useEffect(() => {
    progress.current = completed
    completed === 1 && spriteSheetInstance.current.play();
  }, [completed])

  const fillerStyles = {
    height: '100%',
    width: `${progress.current * 0.7}%`,
    borderRadius: 'inherit',
    textAlign: 'right',
    display: 'flex',
    justifyContent: 'flex-end'
  }

  const labelStyles = {
    width: 80,
    transform: 'scale(2.0122)',
    marginTop: -38
  }

  return (
    <div key={`horse${index}-${name}`}>
      <div style={fillerStyles}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{magin: '-15px 10px 0 0'}}>sdfsdf</div>
          <SpriteSheet
            className={`horse`}
            style={labelStyles}
            image={horse.current}
            widthFrame={82}
            heightFrame={66}
            steps={5}
            fps={10}
            autoplay={false}
            loop={true}
            direction={`rewind`}
            getInstance={spriteSheet => {
              spriteSheetInstance.current = spriteSheet;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Horse;