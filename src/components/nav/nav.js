import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import SideNav from './side-nav'



class Nav extends Component{
    state = {
        links: [
            {
                to:'/',
                text: 'Home'
            },
            {
                to: '/chat',
                text: 'Chat'
            },
            {
                to:'/set-name',
                text: 'Set Name'
            }
        ]
    }

    componentDidMount(){
        this.sideNav = M.Sidenav.init(this.sideNav);



    }

    handleLinkClick = () => {
        console.log('from handle link click',this.sideNav.isOpen);
        if(this.sideNav.isOpen){
            this.sideNav.close();
        }
    }

    setSideNavRef = (element) =>{
        this.sideNav = element;
    }

    render(){

        const linkElements = this.state.links.map( link => {
            return (
                <li onClick={this.handleLinkClick} key={link.to}>
                    <Link to={link.to}> {link.text}</Link>
                </li>
            )
        })

        return (
            <Fragment>
                <nav className="main-nav">
                    <div className="nav-wrapper">
                        <Link className="brand-logo" to="/">FireBase Awesomeness</Link>
                        <SideNav setRef={this.setSideNavRef} links={linkElements}/>
                        <a href="#" data-target="side-nav" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>

                        <ul className="right hide-on-med-and-down">
                            {linkElements}
                        </ul>
                    </div>
                </nav>


            </Fragment>


        )
    }
}
export default Nav;