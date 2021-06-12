import React from 'react'
import { Container, Menu } from "semantic-ui-react";
import SignedIn from './SignIn';
import SignedOut from './SignOut';

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            <SignedIn />
            <SignedOut />
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}
