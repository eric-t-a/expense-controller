import styled from "styled-components";
import { appPrimary, black, lightNavy, navy, red, white, darkGray, yellow } from "../../../../components/AppColors";

export const TableContainer = styled.div`
    display: flex;
    justify-content: center;

    .weight-table{
        background-color: ${navy};
        padding: 10px;
        border-radius: 8px;
        width: 100%;
        max-width: 300px;

        .weight-row{
            display: flex;
            flex-direction: row;
            flex-wrap: no-wrap;
            padding: 7px;
            transition: .25s all;
            &:hover{
                * {
                    color: ${white} !important;
                }
            }
            &:nth-child(even){
                background-color: ${lightNavy};
            }

            .weight-col{
                color: ${darkGray};
                flex: 1;
                text-align: center;
                font-size: 18px;
                transition: .25s all;
            }
            
            .date-col{
                color: ${darkGray};
                flex: 1;
                text-align: center;
                font-size: 18px;
                transition: .25s all;
            }

            .edit-col{
                flex: 0.5;
                text-align: center;

                svg{
                    cursor: pointer;
                    font-size: 18px;
                    color: ${yellow};
                    transition: .25s all;
                }
            }

            .delete-col{
                flex: 0.5;
                text-align: center;

                svg{
                    cursor: pointer;
                    font-size: 18px;
                    color: ${red};
                    transition: .25s all;
                }
            }
        }
    }
`;

export const ToolTipContainer = styled.div`
    background-color: ${navy};
    padding: 5px;
    border-radius: 8px;
    width: 170px;

    .tool-tip-row{
        display: flex;
        padding: 5px;

        .col{
            font-size: 14px;
            flex: 1;
            text-align: center;
            color: ${darkGray};
        }
    }
`;

export const GraphHolder = styled.div`

    height: ${props=>props.show ? '300px' : '0'};
    width: calc(100% - 100px);
    margin: auto;
    margin-bottom: ${props=>props.show ? '30px' : '0'};
    margin-top: 10px;
    font-size: 12px;
    transition: all 0.2s;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    justify-content: center;

    .tick-holder{
        position: absolute;
        z-index: 1;

        .tick{
            color: ${darkGray};
            margin-top: 60px;
        }
    }
    @media screen and (max-width: 700px) {
        width: 100%;
        justify-content: flex-start;
    }
`
export const Btn = styled.div`
    background-color: ${lightNavy};
    border-radius: 8px;
    font-size: 20px;
    margin: 10px auto;
    transition: .25s all;
    cursor: pointer;
    color: ${yellow};
    text-align: center;
    padding: 10px 0px;
    max-width: 300px;

    &:hover{
        background-color: ${appPrimary};
    }
`;

export const EmptyState = styled.div`
    color: rgba(255, 255, 255, 0.8);
    font-size: 18px;
    width: 300px;
    margin: auto auto 30px;
    text-align: center;
`;