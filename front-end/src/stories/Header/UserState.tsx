import React from 'react'

export enum userstate{
    LOGIN="LogIn",
    NORMAL="Normal",
    ClOSECONTACT="Close Contact",
    INFECTED="Infected"
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