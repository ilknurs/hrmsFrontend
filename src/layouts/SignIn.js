import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import Avatar from '@material-ui/core/Avatar';


export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
            <Avatar alt="bla bla" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" />
                <Dropdown pointing="top left" text="bla">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}