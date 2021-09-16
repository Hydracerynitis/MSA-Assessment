import React from 'react'

export enum userstate{
    LOGIN="LogIn",
    NORMAL="Normal",
    ClOSECONTACT="Close Contact",
    INFECTED="Infected"
  }

  export const DecodeEnum=(querystate?:any)=>{
    switch(querystate){
      case "NONE":{
        return userstate.LOGIN
      }
      case "NORMAL":{
        return userstate.NORMAL
      }
      case "CLOSE_CONTACT":{
        return userstate.ClOSECONTACT
      }
      case "INFECTED":{
        return userstate.INFECTED
      }
      default:{
        return userstate.LOGIN
      }
    }
  }

  export const EncodeEnum=(frontendstate?:userstate)=>{
    switch(frontendstate){
      case undefined:
      case userstate.LOGIN:{
        return "NONE"
      }
      case userstate.NORMAL:{
        return "NORMAL"
      }
      case userstate.ClOSECONTACT:{
        return "CLOSE_CONTACT"
      }
      case userstate.INFECTED:{
        return "INFECTED"
      }
    }
  }

export const stateColor=(s?:userstate)=>{
    switch(s){
        case undefined:
        case userstate.LOGIN:{
          return "#039be5";
        }
        case userstate.NORMAL:{
            return "#4caf50"
        }
        case userstate.ClOSECONTACT:{
            return "#ff8f00"
        }
        case userstate.INFECTED:{
            return "#e65100"
        }
      }
}