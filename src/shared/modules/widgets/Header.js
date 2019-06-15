import React, { useState } from 'react';
import { Box, Heading, Anchor, Button } from "grommet";
import { Menu } from "grommet-icons";

function Header(props) {
  const isDekstop = true;

  const [showMenu, setShowMenu] = isDekstop ? useState(true) : useState(false);

  function toggelHeaderMenu(){
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  return (
    <Box
      border={{side:"bottom"}}
      elevation="small"
      direction={isDekstop ? "row" : "column"}
      justify="between"
      >
      <Box pad={{left:"small"}} direction={isDekstop ? "column" : "row"}>
        {!isDekstop && (<Button
          icon={<Menu size="medium" />}
          align="end"
          onClick={toggelHeaderMenu}
        />)}
        <Anchor href="#" color="black" style={{textDecoration:"none"}}>
          <Heading level="2" margin={{vertical:"small"}}>Tachyon</Heading>
        </Anchor>
      </Box>
      <Box pad="0px">
        {showMenu && (
          <Box justify="between" margin="auto" direction={isDekstop ? "row" : "column"}> {/*remove this in mobile view*/}
            <Box className="nav-link" pad="medium">
              <Anchor href="#" alignSelf="center" primary label="Men" style={{textDecoration:"none"}} />
            </Box>
            <Box className="nav-link" pad="medium">
              <Anchor href="#" alignSelf="center" primary label="Women" style={{textDecoration:"none"}} />
            </Box>
            <Box className="nav-link" pad="medium">
              <Anchor href="#" alignSelf="center" primary label="Kids" style={{textDecoration:"none"}} />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Header;