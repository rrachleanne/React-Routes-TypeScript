

import React from 'react'
import { NavLink} from 'react-router-dom'

const Sidebar = () =>{

    const links =[
      

        {name: 'PropViewer', url: '/props'},
        {name: 'Text', url: '/Text'}, 
        {name: 'SmartText', url: '/Text/:text'},
     
        {name: 'People', url: '/people'},
        {name: '404 Error', url: '/404Error'}
    ];

    let linksComponents = links.map((link, index) => {
        return(
            <li key={index} className={'nav'}>
                <NavLink className={'navLink'} activeClassName={'activeNavLink'} to={link.url} exact>{link.name}</NavLink>
            </li>
        )
    })


    return(
        <div>
            <ul>
                <li><NavLink className={'nav'} activeClassName={'activeNavLink'} to={'/'} exact>Home</NavLink></li>
                {linksComponents}
            </ul>
        </div>
    )
}

export default Sidebar