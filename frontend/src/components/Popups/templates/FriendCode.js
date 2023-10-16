import styled from "styled-components";
import { appPrimary, white, darkGray } from "../../AppColors";
import { FaSadTear, FaLock, FaCopy, FaCheckCircle } from "react-icons/fa";
import { PrimaryBtn } from "../../Buttons";
import { useNavigate } from "react-router-dom";
import { store } from "../../..";
import AuthUser from "../../../api";
import { useState } from "react";

const Container = styled.div`
    color: ${darkGray};

    .title{
        text-align: center;
        font-size: 20px;
        padding: 0 30px;
        margin-bottom: 20px;
    }

    .steps-container{
        margin-bottom: 20px;
        padding: 0 10px;
        .steps-title{

        }

        .steps{
            padding: 0 20px;

            .step{

            }
        }
    }
`;

const FriendCode = () => {
    const navigate = useNavigate();
    const { setUser, user } = AuthUser();
    const [copied, setCopied] = useState(false);

    const copyCode = () => {
        if(user.own_code){
            const element = document.getElementById('copy-area');
            const storage = document.createElement('textarea');
            storage.value = 'https://fitbase.com.br/register/'+user.own_code;
            // storage.style.display = 'none';
            element.appendChild(storage);

            // Copy the text in the fake `textarea` and remove the `textarea`
            storage.select();
            storage.setSelectionRange(0, 99999);
            document.execCommand('copy');
            element.removeChild(storage);


            // navigator.clipboard.writeText('https://fitbase.com.br/register/'+user.own_code);
            setCopied(true);
        }
    }

    return(
        <Container>
            <div className="title">
                Ganhe 1 
                mês <span style={{fontWeight:"600"}}>grátis</span> do 
                plano <span style={{fontWeight:"600",color: appPrimary}}>Black</span>!
            </div>
            <div className="steps-container">
                <div className="steps-title">
                    São 2 passos simples:
                </div>
                <div className="steps">
                    <div className="step">
                        <FaCheckCircle style={{color: appPrimary, marginRight: "10px"}}/>
                        Compartilhe seu link para 3 amigos criarem suas contas no FitBase
                    </div>
                    <div>
                        <FaCheckCircle style={{color: appPrimary, marginRight: "10px"}}/>
                        Eles precisam confirmar o email deles
                    </div>
                </div>
            </div>
            <div id="copy-area">
                <PrimaryBtn onClick={() => copyCode()} styles={{alignItems: "center"}}>
                    {
                        copied ?  
                            <> 
                                Copiado
                                <FaCheckCircle/>
                            </>
                        : 
                            <> 
                                Copiar link
                                <FaCopy/>
                            </>
                        }
                </PrimaryBtn>
            </div>
        </Container>
    );
}

export default FriendCode;