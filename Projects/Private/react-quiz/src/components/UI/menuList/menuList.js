import React, {useState, useEffect, useRef} from 'react'
import $ from 'jquery'
import Grid from '@material-ui/core/Grid'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Classes from './menuList.module.scss'


function MenuListe(props){

  const btnRef = useRef('menuListUserHeader')
  const [btnMenuList, setBtnMenuList] = useState(false)

  const ToggleOpenMenuList = ()=>{
    setBtnMenuList(!btnMenuList)
  }

  $('body').on('click', function(e){
    //e.preventDefault()
    if(e.target.name&&e.target.name===btnRef.current.name){
    }else{
      setBtnMenuList(false)
    }
  })



  return(
    <Grid component="div">
      <Button className={Classes.btnMenuUser} ref={btnRef}  onClick={ToggleOpenMenuList} name="menuListUserHeader"> {props.btnTitle} <i className="angle-downicon-"></i></Button>
      <MenuList className={`${Classes.MenuListe} ${btnMenuList? Classes.isOpen:''}`} id={props.id} >
        <MenuItem className={Classes.MenuListeItem+' user-circle-oicon-'}>Profile</MenuItem>
        <MenuItem className={Classes.MenuListeItem+' logouticon-'}>Logout</MenuItem>
      </MenuList>
    </Grid>
  )
}
export default MenuListe


          
       