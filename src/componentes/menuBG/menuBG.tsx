import React from 'react';
import './menuBG.css';
import { bubble as MenuBurger } from 'react-burger-menu'
import imagen from './../../jusLogo.png'
import iconOption from "./../../iconLogOut.png"
import { AiOutlineShop, AiOutlineSolution, AiOutlineUser, AiOutlineTeam } from "react-icons/ai";
import { Dropdown, Menu } from 'antd';
import { AppstoreOutlined, DownOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import SubMenu from 'antd/lib/menu/SubMenu';
import MenuListBg from '../../interfaces/menu';



interface MenuBGProps
{
  items: MenuListBg[]
  tituloPagina :string;
}
export default class MenuBG extends React.Component<MenuBGProps, any>
{
 
 constructor(props:any)
 {   
    super(props);
 }
  render()
  {
    return (<>
        <nav className="nav-bar flex row" >
          <img src= {imagen} width="40px" height="40px" ></img>

        </nav>        
        <div className="container-menu">
      
        </div>
        <div style={{marginTop:"60px"}}>
            {this.props.children}
        </div>               
    </>)
  }
}