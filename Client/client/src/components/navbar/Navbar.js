import 'bootstrap/dist/css/bootstrap.css';
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Search from './../search/Search';
export default class Navbar extends Component{

    constructor(props) {
        super(props);
        this.state = {
          navbar: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
      }
      toggleMenu(){
        this.setState({ navbar: !this.state.navbar })
      }
   

        render() {

        const show= (this.state.navbar) ?"show":"" ;

        return (

            <nav className="navbar navbar-expand-md navbar" style={{backgroundColor: "black"}}>
                    <a className="navbar-brand" href="#" style={{color: "white", fontSize: "30px", paddingRight: "100px"}}><Link to="/"><img src="../media/logo.png" style={{width: "230px", height: "100px"}}/></Link></a>
                    <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
                        <span className="navbar-toggler-icon" style={{color: "white"}}>Menu</span>
                    </button>
                    <div className={"collapse navbar-collapse "+show} style={{color: "white", fontSize: "20px" , paddingRight: "30px"}}>
                        <div className="navbar-nav mr-auto">
                        <a className="nav-item nav-link"href="/"><Link to="/about">Info</Link></a>
                        <a className="nav-item nav-link"href="/"><Link to="/contact">Contact Us</Link></a>
                        <a className="nav-item nav-link"href="/"><Link to="/map">Location</Link></a>
                        </div>
                    </div>
                    <Search></Search>
                    </nav>
        )
        }
    }
