import styled from "styled-components";
import { appPrimary, white, darkGray } from "../../AppColors";
import { FaSadTear, FaLock } from "react-icons/fa";
import { PrimaryBtn } from "../../Buttons";
import { useNavigate } from "react-router-dom";
import { store } from "../../..";

const Container = styled.div`
    color: ${darkGray};

    .content-only{
        text-align: center;
        margin-bottom: 20px;
    }

    .emojis{
        text-align: center;
        font-size: 40px;
        
        svg{
            margin: 5px;
            color: ${white};
        }
    }
    .pricing{

        .only{
            margin-bottom: 20px;
            text-align: center;
        }

        .cta-btn{
            justify-content: center;
            font-weight: 600;
        }
    }
`;

const UpgradeTemplate = () => {
    const navigate = useNavigate();

    const seeAdvantages = () => {
        navigate('/app/user/config/plans');
    }

    return(
        <Container>
            <div className="content-only">
                Este conteúdo é exclusivo<br/> para usuários <b style={{color: appPrimary}}>Black.</b>
            </div>
            <div className="emojis">
                <FaLock />
                <FaSadTear />
            </div>
            <div className="pricing">
                <div className="only">
                    <b style={{color: appPrimary, fontSize:"22px"}}>
                        Apenas R$ 9,90.
                    </b> <br/>
                    As <b style={{color: white}}>vantagens</b> são <b style={{color: white}}>muito maiores</b> que o preço.
                </div>
                <div>
                    <PrimaryBtn classes='cta-btn' onClick={() => seeAdvantages()}>
                        Ver vantagens
                    </PrimaryBtn>
                </div>
            </div>
        </Container>
    );
}

export default UpgradeTemplate;