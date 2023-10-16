import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import UpgradeTemplate from "./templates/UpgradeTemplate";
import { useState } from "react";
import FriendCode from "./templates/FriendCode";
import { useEffect } from "react";
import api from "../../api/api";
import AuthUser from "../../api";

export const loadAllFoods = (notify, cb) => {
    
}

const templates = {
    'upgrade': <UpgradeTemplate />,
    'friend_code': <FriendCode />
};
const IndexPopUp = () => {
    const popUp = useSelector(state => state.popup)
    const dispatch = useDispatch();

    const { setUser, user } = AuthUser();

    useEffect(() => {
        setTimeout(() => {
            const phoneToken = document.querySelector('#user-token').innerHTML.trim();
            api.post('/me', {"phone-token": phoneToken})
                .then((res) => {
                    if(res.data.status=='success'){
                        const me = res.data.data;
                        if(!popUp && me.user_level_id == 1){
                        }
                        else if(me.user_level_id == 1 && me.user_level_id != user.user_level_id){
                            setUser(me);
                        }
                        try{
    
                        }
                        catch(err){
                            window.ReactNativeWebView.postMessage(JSON.stringify({type: "user-data", message : me}))
                        }
                    }
                }).catch((err)=>{
                    
                });
        }, 1000)
        
        
    },[])
    
    return(
        <Modal 
            footer={[]} 
            open={user && user.email && user.email != 'ratixe.br@gmail.com' && popUp} 
            centered
        >
            { popUp && templates[popUp] }
        </Modal>
    );
}

export default IndexPopUp