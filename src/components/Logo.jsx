import React from 'react';
import {useSelector} from 'react-redux';
function Logo({width = '100px'}) {
  const userdata=useSelector((state)=>{return state.auth.userData})
  if(userdata){
  return (
    <div>Hi! {userdata.name}</div>
  )}
  return (
    <div>MegaBlog</div>
  )
}

export default Logo