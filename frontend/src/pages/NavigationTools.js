import styled from "styled-components";
import squareLogo from '../images/iphone2.png';
import { FaUserAlt, FaCog, FaTags, FaAppleAlt, FaListUl} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BsLightningChargeFill } from 'react-icons/bs'

import React, { useEffect, useState } from 'react';
import { appPrimaryHover, navy, appPrimary, darkGray, lightNavy } from "../components/AppColors";
import { store } from "..";


export const professionalItems = [
    {
        key: "professional/nutri",
        label: "Área do Nutri",
        icon: <FaAppleAlt />
    },
    {
        key: "professional/personal",
        label: "Área do Personal",
        icon: <BsLightningChargeFill />
    },
];

export const userItems = [
    {
        key: "user/config",
        label: "Configurações",
        icon: <FaCog />
    },
    {
        key: "logout",
        label: "Sair",
        icon: <FiLogOut />
    },
];

export const paths = {
    'forbidden' : {
        label: 'Proibido',
        back: '/app/registers'
    },



    'user/weights' : {
        label: 'Meu Peso',
        back: '/app/user'
    },

    'user/config' : {
        label: 'Configurações',
        back: '/app/user'
    },

    'user/metrics' : {
        label: 'Métricas',
        back: '/app/user'
    },

    'user/config/plans' : {
        label: 'Planos',
        back: '/app/user/config'
    },

    'user/config/delete' : {
        label: 'Excluir conta',
        back: '/app/user'
    }
};


export const footerItems = [
    {
        key: "registers",
        label: "Registros",
        icon: <FaListUl />
    },
    {
        key: "tags",
        label: "Tags",
        icon: <FaTags />
    }
];

export const HeaderNavigation = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: ${navy};
    position: fixed;
    z-index: 2;
    width: 100%;
    padding: 3px 0px;
    height: 50px;

    .back-holder{
        align-items: center;
        display: flex;
        color: ${darkGray};
        cursor: pointer;

        &:hover{
            color: #fff;
        }
    }

    .edit-holder{
        align-items: center;
        display: flex;
        color: ${darkGray};
        cursor: pointer;
        width: 64px;

        &:hover{
            color: #fff;
        }
    }

    .center-txt{
        font-weight: 600;
        color: ${darkGray};
        font-size: 18px;

        &:hover{
            color: #fff;
        }
    }
`;

export const FooterNavigation = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: ${navy};
    position: fixed;
    z-index: 2;
    padding: 3px 0px;
    width: 100%;
    bottom: 0;
`;


const ItemContainer = styled.div`
    ${props=>props.selected ? `background-color: ${lightNavy};` : ''}
    border-radius: 8px;
    color: ${props=>props.selected ? appPrimary : darkGray};
    padding: 8px;
    margin: 0px 5px;
    width: 75px;
    cursor: pointer;

    &:hover{
        background-color: ${props=>props.selected ? lightNavy : 'rgba(255, 255, 255, 0.12)'};
        color: #fff;

        .txt-holder{
            color: ${appPrimaryHover};
        }

        .icon-holder{
            color: ${appPrimaryHover};
        }
    }

    .txt-holder{
        font-size: 12px;
        color: ${props=>props.selected ? appPrimary : darkGray};
        font-weight: ${props=>props.selected ? '600' : '400'};
        transition: all 0.3s;
        text-align: center;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-holder{
        font-size: 24px;
        color: ${props=>props.selected ? appPrimary : darkGray};
        transition: all 0.3s;
        text-align: center;
    }
`;

const LogoContainer = styled.div`
    width: 75px;
    height: 74px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
    cursor: pointer;
    ${props=>props.selected ? 'background-color: #83abbc;' : ''}

    &:hover{
        background-color: ${props=>props.selected ? '#83abbc' : 'rgba(255, 255, 255, 0.12)'};
    }
`;

export const NavItem = (props) => {
    return(
        <ItemContainer 
            {...props}
            selected={props.selected==props.id} 
            onClick={()=>{
                if(props.navigate){
                    props.navigate(`/app/${props.id}`)
                }
            }}
        >
            <div className="txt-holder">
                {props.label}
            </div>
            <div className="icon-holder">
                {props.icon}
            </div>
        </ItemContainer>
    );
}

export const FitBaseLogo = ({ navigate, selected, id }) => (
    <LogoContainer selected={selected==id} onClick={()=>navigate('/app/dashboard')}>
        <img 
            src={squareLogo} 
            alt="" 
            style={{width:"50px",height:"50px",borderRadius: "2px"}}
        />
    </LogoContainer>
)
    
    