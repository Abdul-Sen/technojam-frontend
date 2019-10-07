
import React, {Fragment, useState} from "react";
import {TopMenu, Footer} from "./Components/Layouts";
import Maincontent from "./Components/Maincontent";
import { Container, Button, Link } from 'react-floating-action-button';

const sectionStyle = {
   backgroundImage: 'url(https://tj-static.s3.ap-south-1.amazonaws.com/etc/Capture.png)',
   backgroundRepeat: 'repeat',
   backgroundPositionX: 'center',
   position: 'absolute',
   width: '100%',
   top: '0'
};

function App() {
  const [panel, setPanel] = useState(false);

  function toggleButton() {
    if (!panel) setPanel(true);
    else setPanel(false);

    if (panel === false) {
      document.getElementById("ToggleButton").style.background = "#161625";
    }
  }

  return (
    <div className="App" style={sectionStyle}>
      <Fragment>
        <TopMenu toggleButton={toggleButton} />
         <Maincontent />
         <br />
         <br />
         <br />
         <Footer />
      </Fragment>
              <Container>
            <Button
                tooltip="The big plus button!"
                icon="fas fa-chevron-up"
                rotate={false}
                onClick={() => window.scrollTo(0,0)} />
        </Container>
   </div>
);
  }

export default App;
