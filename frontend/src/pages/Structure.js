import AuthUser from "../api";
import { FaUserAlt, FaRedoAlt, FaAngleLeft } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { Layout, theme, Grid, ConfigProvider, Dropdown } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import api from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { checkPermission } from "../components/helper";
import styled from "styled-components";
import { 
    NavItem, 
    HeaderNavigation, 
    FooterNavigation, 
    FitBaseLogo, 
    professionalItems, 
    userItems, 
    footerItems,
    paths
} from "./NavigationTools";
import locale from 'antd/locale/pt_BR';
import { setTimerState } from "../store/timer";
import { appPrimary } from "../components/AppColors";
import { EditOutlined } from "@ant-design/icons";
import { BsCheck2 } from "react-icons/bs";
import { loadAllInfo } from "./app/Registers/requests";

const { Content, Footer  } = Layout;
const { useBreakpoint } = Grid;


const StyledContent = styled(Content)`
    padding-top: 24px;
    margin: 0;
    min-height: calc(100vh - 130px) !important;
    transition: filter 0.2s;
`;


const Structure = () =>{
    const dispatch = useDispatch();
    const { getToken, logout, token, user } = AuthUser();




    const navigate = useNavigate();

    const userLocation = useLocation();

    const screens = useBreakpoint();


    useEffect(()=>{
        if(!getToken()){
            if(window.location.port!='3000'){
                // navigate('/login');
            }
        }
    },[])

    const logoutUser = () =>{
        if(token != undefined){
            logout();
        }
    }

    const { darkAlgorithm } = theme;

    const curTab = 
        userLocation.pathname.includes('user') ?
            'user'
        : userLocation.pathname.includes('professional') ?
            'professional'
        :
            userLocation.pathname.replace('/app/','')
    

    const mainPaths = ['registers', 'tags', 'user']
    const isMain = mainPaths.includes(userLocation.pathname.replace('/app/',''))

    const path = paths[userLocation.pathname.replace('/app/','')];

    return(
        <ConfigProvider
            locale={locale}
            theme={{
                token: {
                    "fontSize": 18,
                    "colorPrimary": appPrimary
                  },
            }}
        >
            <Layout>
                {
                    !isMain ?
                        <HeaderNavigation>
                            <div onClick={()=>navigate(path.back)} className="back-holder">
                                <FaAngleLeft /> Voltar
                            </div>
                            <div className="center-txt">
                                {path?.label}
                            </div>
                            {
                                path.onEdit ?
                                    <>
                                        <div className="edit-holder" onClick={path.onEdit} id="edit-header">
                                            <EditOutlined style={{marginRight:"7px"}}/> Editar 
                                        </div>
                                        <div className="edit-holder" onClick={path.onEdit} id="ok-header" style={{display: 'none'}}>
                                            <BsCheck2 style={{marginRight:"7px"}}/>Ok 
                                        </div>
                                    </>
                                : 
                                    <div style={{width: '64px'}}></div>
                            }
                        </HeaderNavigation>
                    :
                        null
                }
                <Layout style={{padding:"0 24px"}} >
                    <StyledContent>
                        <Outlet context={{user, screens}}/>
                    </StyledContent>
                    <Footer
                        style={{
                            textAlign: 'center',
                            marginBottom: "80px",
                            fontSize: "12px",
                            marginTop: "80px"
                        }}
                    >

                    </Footer>
                </Layout>
                {
                    isMain ?
                        <FooterNavigation>
                            {footerItems.map((item)=>
                                <NavItem key={item.key} id={item.key} label={item.label} icon={item.icon} selected={curTab} navigate={navigate}/>
                            )}
                        </FooterNavigation>
                    :
                        null
                }
            </Layout>
        </ConfigProvider>
    );
};

export default Structure;