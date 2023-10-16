import styled from "styled-components";
import { black, lightLightNavy, lightNavy, appPrimaryHover, navy, appPrimary, red, white, darkGray } from "./AppColors";

const PrimaryButton = styled.div`
    width: 180px;
    height: 43px;
    margin: auto;
    background-color: ${appPrimary};
    font-size: 20px;
    line-height: 43px;
    border-radius: 8px;
    padding: 0px 10px;
    color: ${white};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.2s;

    &:hover{
        background-color: ${appPrimaryHover};
    }

    &:active{
        background-color: ${appPrimaryHover};
    }

`;

const SecondaryButton = styled.div`
    width: 180px;
    height: 43px;
    margin: auto;
    background-color: ${navy};
    font-size: 20px;
    line-height: 43px;
    border-radius: 8px;
    padding: 0px 10px;
    color: ${appPrimary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.2s;

    &:hover{
        background-color: ${lightNavy};
    }

    &:active{
        background-color: ${lightNavy};
    }

`;

export const PrimaryBtn = ({ styles, onClick, children, classes, disabled }) => {
    return(
        <PrimaryButton style={styles} onClick={onClick} className={classes} disabled={disabled}>
            {children}
        </PrimaryButton>
    );
}

export const SecondaryBtn = ({ styles, onClick, children, classes, disabled }) => {
    return(
        <SecondaryButton style={styles} onClick={onClick} className={classes} disabled={disabled}>
            {children}
        </SecondaryButton>
    );
}