import React from 'react'
import Aux from '../../hoc/Aux'
import  '../../styles/layout.css'

const Layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer,Backdrop</div>
        <main className='content'>
            {props.children}
        </main>
    </Aux>

)

export default Layout;