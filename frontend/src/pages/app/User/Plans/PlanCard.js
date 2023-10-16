import { Card, Tooltip, Row, Col } from "antd";
import { green, appPrimaryHover, appPrimary } from "../../../../components/AppColors";
import styled from "styled-components";
const { Meta } = Card;

const Current = styled.h3`
`;

const Choose = styled.h3`
    color: ${appPrimary};
    transition: all 0.2s;

    &:hover{
        color: ${appPrimaryHover};
    }
`;

const PlanCard = ({plano,onClickChoose,user}) => {
    
    const action = user.user_level_id==plano.user_level_id ? 
        [<Current style={user.user_level_id != 1 ? {cursor:"default", color: green} : {cursor:"default"}}>Atual</Current>] 
        : 
        plano.user_level_id==1 ? 
        [<h3 style={{cursor:"default"}}>Padrão</h3>] 
        :
        [<Choose onClick={()=>onClickChoose(plano)}>Escolher Plano</Choose>];
        
    return(
        <Card
            style={{
                minWidth: 250,
            }}
            cover={
                <div style={{width:"fit-content",marginRight:"auto",marginLeft:"auto"}}>
                    <h2>
                        {plano.plan}
                    </h2>
                </div>
            }
            actions={
                action
            }
        >
            <Meta
                title={plano.price}
                description={
                    plano.items.map((item, index)=>{
                        return(
                            <Tooltip title={item.tip} key={index}>
                                <Row>
                                    <Col span={3} style={{fontSize:"17px"}}>
                                        {item.icon1}
                                    </Col>
                                    <Col span={3} style={{fontSize:"17px"}}>
                                        {item.icon2}
                                    </Col>
                                    <Col span={18} style={{fontSize:"17px"}}>
                                        {item.title}
                                    </Col>
                                    
                                </Row>
                            </Tooltip>
                        );
                    })
                }
            />
        </Card>
    );
};

export default PlanCard;