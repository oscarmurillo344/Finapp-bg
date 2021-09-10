import React from 'react';
import './menuBG.css';
import { bubble as MenuBurger } from 'react-burger-menu'
import imagen from './../../logo.png'
import iconOption from "./../../iconLogOut.png"
import { AiOutlineShop, AiOutlineSolution, AiOutlineUser, AiOutlineTeam } from "react-icons/ai";
import { Dropdown, Menu } from 'antd';
import { AppstoreOutlined, DownOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import SubMenu from 'antd/lib/menu/SubMenu';

interface MenuListBg {
  nombre :string
  icon: any
  items : any[]
}

export default class MenuBG extends React.Component<any, any>
{
 menu : MenuListBg[] = [
   {nombre:"Clientes", icon: <AiOutlineUser></AiOutlineUser>,
    items: [{nombre:"opcion1"}, {nombre:"opcion2"}] 
  },
   {nombre:"Creditos", icon: <AiOutlineShop></AiOutlineShop>,
   items: [{nombre:"opcion1"}, {nombre:"opcion2"}]
  },
   {nombre:"Roles Pagos", icon: <AiOutlineSolution></AiOutlineSolution>,
   items: [{nombre:"opcion1"}, {nombre:"opcion2"}]
  },
  {nombre:"Modulo 4", icon: <AiOutlineUser></AiOutlineUser>,
  items: [{nombre:"opcion1"}, {nombre:"opcion2"}] 
  },
  {nombre:"Modulo 5", icon: <AiOutlineShop></AiOutlineShop>,
  items: [{nombre:"opcion1"}, {nombre:"opcion2"}]
  },
  {nombre:"Modulo 6", icon: <AiOutlineSolution></AiOutlineSolution>,
  items: [{nombre:"opcion1"}, {nombre:"opcion2"}]
  }
  ]
 constructor(props:any)
 {   
    super(props);
 }
  render()
  {
    return (<>
        <nav className="nav-bar flex row" >
          <img src= {imagen} width="230px" height="70px" ></img>
          <section className="navegacion flex row" >
                <div style={{height:"100%", justifyContent:"start", marginTop:"40px"}} className="flex colum"  >
                    JEFFERSON LEONEL VELEZ LARREA
                    <p>0967770769</p>
                </div>
                <div style={{height:"100%", alignItems:"start", marginTop:"40px"}} className="flex">                    
                <section className="flex row" >
                    <div>   
                      <Dropdown  overlay={
                          <Menu>
                          <Menu.Item key="0">
                            <a href="#">Perfil</a>
                          </Menu.Item>
                          <Menu.Item key="1">
                            <a href="#">Salir</a>
                          </Menu.Item>                          
                          </Menu>
                      } trigger={['click']}>
                      <a style={{color:"white", textAlign:"center", width:"100%"}} className="ant-dropdown-link flex" onClick={e => e.preventDefault()}>
                        OPCIONES
                      </a> 
                      </Dropdown>
                </div>                      
                </section>
                </div>
          </section>
        </nav>        
        <div className="container-menu">
          <MenuBurger pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
              <div id="items-menu" style={{display:"flex", flexDirection:"column"}}>
                <Menu
                  style={{ width: 256 , borderColor:"white"}}
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                  >                    
                    {
                        this.menu.map((recorre, id)=>{
                          return (
                            <SubMenu className="submenu" key={id} icon={recorre.icon} title={recorre.nombre}>
                              {
                                recorre.items.map((recorreItem, idItem)=>{
                                  return (
                                    <Menu.Item key={ `${idItem}-${id}`}>{recorreItem.nombre}</Menu.Item>                              
                                  )
                                })
                              }                              
                            </SubMenu>                   
                        )                          
                        })
                    }

                </Menu>
                </div>                         
          </MenuBurger>          
          <div className="descripcion-pantalla" >
                    Clientes
          </div>
        </div>
        <div style={{marginTop:"60px"}}>
            {this.props.children}
        </div>               
    </>)
  }
}