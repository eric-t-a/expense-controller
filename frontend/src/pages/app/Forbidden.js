import { LockFilled } from "@ant-design/icons";
import styled from "styled-components";

const LockIcon = styled(LockFilled)`
    width: 40px;
    margin-bottom: 10px;
`;

const Content = styled.div`
    color: rgba(255, 255, 255, 0.8);
    font-size: 20px;
    line-height: 24px;
`;

const Forbidden = () => {
    return(
        <Content style={{color: "#fffd9"}}>
            <div>
                <LockIcon />
            </div>
            Você não possui acesso à essa página
        </Content>
    );
}

export default Forbidden