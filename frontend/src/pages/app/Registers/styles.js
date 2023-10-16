import styled from "styled-components";
import { appPrimary, appPrimaryHover, blue, lightLightNavy, lightNavy, navy, darkGray } from "../../../components/AppColors";

export const StyledTable = styled.div`
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    .territ{
        display: flex;
        align-items: center;
        color: ${appPrimary};
        padding-right: 5px;

        &:first-child {
            border-radius: 8px 8px 0 0;
        }

        &:last-child {
            border-radius: 0 0 8px 8px;
        }

        &:nth-child(even) {
            background-color: ${navy};
        }

        &:nth-child(odd) {
            background-color: ${lightNavy};
        }



        .info-container{
            display: flex;

            align-items: center;
            border-radius: 8px;
            transition: all 0.2s;
            cursor: pointer;
            position: relative;

            &:hover{
                background-color: #fff;
            }

            img{
                width: 125px;
                max-height: 80px;
                border-radius: 8px;
            }

            .tags{
                position: absolute;
                right: 10px;
                top: 0;

                svg{
                    font-size: 10px;
                    margin-left: 2px;
                }
            }

            .number{
                padding-left: 5px;
                font-weight: 600;
                width: 25px;
                text-align: center;
            }
    
            .name-container{
                width: 100px;
                padding: 16px 5px;
                border-right: 2px solid ${darkGray};
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 10px 0 9px -9px #888;
    
                .name{
                    text-align: center;
                }
            }
        }
        

        
        .registers-container{
            overflow-x: overlay;
            width: calc(100% - 110px);


            ::-webkit-scrollbar {
                height: 5px;
            }

            &::-webkit-scrollbar-track {
                border-radius: 10px;
            }
            
            &::-webkit-scrollbar-thumb {
                background: ${darkGray}; 
                border-radius: 10px;
            }

            @media screen and (min-width: 700px) {
                ::-webkit-scrollbar {
                    height: 12px;
                }

                &::-webkit-scrollbar-thumb {
                    background: ${darkGray}; 
                    border-radius: 4px;
                }
            }

            
            
            .registers{
                display: flex;
                flex-wrap: no-wrap;
                align-items: center;

                .register{
                    width: 120px;
                    margin-left: 10px;
                    padding: 10px 0;
                    flex-shrink: 0;
                    border-radius: 8px;
                    transition: all 0.2s;
                    cursor: pointer;
                    color: ${darkGray};
                    font-weight: 600;
                    position: relative;

                    &:hover{
                        background-color: #fff;
                    }

                    .tags{
                        position: absolute;
                        right: 10px;
                        top: 0;

                        svg{
                            font-size: 10px;
                            margin-left: 2px;
                        }
                    }

                    .name{
                        text-align: center;
                        height: ${props=>props.tableView == 'sm' ? '22px' : '42px'};
                        ${props=>props.tableView == 'sm' ? 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;' : ''}
                    }

                    .dates{
                        display: flex;
                        text-align: center;

                        .init{
                            flex: 1;
                        }

                        .end{
                            flex: 1;
                        }
                    }
                }
            }
            

            .add{
                padding: 20px 20px;
                margin: 0 10px;
                border-radius: 8px;
                background-color: ${appPrimary};
                color: #FFF;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
                height: 61px;
                width: 50px;

                &:hover{
                    background-color: ${appPrimaryHover};
                }
            }
        }
    }
`;

export const FiltrosContainer = styled.div`

    .header{
        display: flex;
        justify-content: end;

        .filter{
            display: flex;
            align-items: center;
            align-content: center;
            cursor: pointer;
            background-color: ${navy};
            padding: 5px 10px;
            border-radius: 8px 8px 0 0;
        }
    }

    .body{
        transition: all 0.2s;
        max-height: ${props=>props.filterOpen ? '300px' : '0'};
        overflow: hidden;
        background-color: ${navy};
        
        border-radius: 8px 0 0 0;

        .filters-container{
            padding: 20px;
            display: flex;
            justify-content: end;
            gap: 30px;
        }
    }
`;