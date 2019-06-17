import React, { useState } from 'react';
import { Box, Heading, Anchor, Button , TextInput} from "grommet";
import { Menu, Search, User } from "grommet-icons";

function Header(props) {
  const isDekstop = false;

  const [showMenu, setShowMenu] = isDekstop ? useState(true) : useState(false);

  const [showSearch, setShowSearch] = isDekstop ? useState(true) : useState(false);
  function toggelHeaderMenu(){
    showSearch && toggelSearchInput();
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  function toggelSearchInput(){
    showMenu && toggelHeaderMenu();
    showSearch ? setShowSearch(false) : setShowSearch(true);
  }

  return (
    <Box
      border={{side:"bottom"}}
      elevation="small"
      direction={isDekstop ? "row" : "column"}
      justify="between"
      >
      <Box pad={{left:"small"}} direction={isDekstop ? "column" : "row"} justify={isDekstop ? "stretch" :  "between"}>
        {!isDekstop && (<Button
          icon={<Menu size="medium" />}
          align="end"
          onClick={toggelHeaderMenu}
        />)}
        <Anchor href="#" color="black" style={{textDecoration:"none"}}>
          <Heading level="2" margin={{vertical:"small"}}>Tachyon</Heading>
        </Anchor>
        {!isDekstop && (
        <Box pad="medium" >
          <Search size="medium"
          style={{cursor:"pointer"}}
          onClick={toggelSearchInput} />
        </Box>)
        }
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
      {showSearch && (
        <Box
          alignSelf="center"
          direction="row"
          justify="between"
          border="all"
          round="xsmall"
          margin={{horizontal:"small", vertical:"small"}}
          width={isDekstop ? "medium" : "95%"}>
          <TextInput
            size={isDekstop ? "medium" : "xsmall"}
            placeholder="Search"
            onChange={() => {}}
            plain
          />
          {isDekstop && (
            <Box alignSelf="center" pad={{right:"small"}}>
              <Search size="medium"
                style={{cursor:"pointer"}}
                onClick={toggelSearchInput} />
            </Box>)
          }
        </Box>
      )}
      {isDekstop && (
        <Box alignSelf="center" pad={{horizontal:"small"}} round="large" background="light-3" pad="small" margin={{right:"small"}}>
          <User size="medium" />
        </Box>
      )}
    </Box>
  );
}

export default Header;