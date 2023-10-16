import { store } from "..";
import AuthUser from "../api";
import api from "../api/api";
import { setAllInfo } from "../store/allInfo";
import { setUserData } from "../store/user";

export function sortTerritsBy(list){
  const option = store.getState().sort;
  
  if(option == 'menos-trabalhado'){
    list.sort((a,b) => {
      if(a.registers.length > b.registers.length) return 1;
      if(a.registers.length < b.registers.length) return -1;
      return 0;
    })

    return [...list];
  }
  else if(option == 'ultima-vez-trabalhado'){
    list.sort((a,b) => {
      const dataA = 
        a.registers[a.registers.length - 1].end ? 
          new Date(a.registers[a.registers.length - 1].end) 
        : 
          new Date(a.registers[a.registers.length - 1].init);
      const dataB = 
        b.registers[b.registers.length - 1].end ? 
          new Date(b.registers[b.registers.length - 1].end) 
        : 
          new Date(b.registers[b.registers.length - 1].init);
        
      if(dataA > dataB) return 1;
      if(dataA < dataB) return -1;
      return 0;
    })

    return [...list];
  }
  else if(option == '' && list.length){
    list.sort((a,b) => {
      if(a.number > b.number) return 1;
      if(a.number < b.number) return -1;
      return 0;
    })

    return [...list];
  }
  else if(option == ''){

    return [...list];
  }
}

export function filterTerritsBy(list){
  const option = store.getState().filter;
  
  if(option.type == 'abertos'){
    const filtrado = list.filter((territ) => {
      if(territ.registers.length && !territ.registers[territ.registers.length -1].end){
        return true;
      }
      return false;
    })

    return [...filtrado];
  }
  else if(option.type == 'fechados'){
    const filtrado = list.filter((territ) => {
      if(territ.registers.length && territ.registers[territ.registers.length -1].end){
        return true;
      }
      else if(!territ.registers.length){
        return true;
      }
      return false;
    })

    return [...filtrado];
  }
  else if(option.type == 'dirigente'){
    const filtrado = list.filter((territ) => {
      if(
        territ.registers.length && 
        !territ.registers[territ.registers.length -1].end 
        && territ.registers[territ.registers.length -1].nome == option.name){
        return true;
      }
      return false;
    })

    return [...filtrado];
  }
  else{
    return [...list]
  }
}