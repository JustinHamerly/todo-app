import { useContext } from 'react';
import { SettingsContext } from '../../context/settings'
import { Navbar, Alignment, Button } from '@blueprintjs/core';

function Header(props){
  let settings = useContext(SettingsContext);
  return(
    <header>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>TO DO</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
          <Button className="bp3-minimal" icon="document" text="Files" />
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Button className="bp3-minimal" icon="home" text="Login" />
          <Button className="bp3-minimal" icon="document" text="Register" />
        </Navbar.Group>
      </Navbar>
      <h1>To Do List: {props.incomplete} items pending</h1>
    </header>
  );
};

export default Header;