import { Button, Form, Input, Checkbox, Select, DatePicker } from "antd";
import { useState } from "react";
import api from "../../../../api/api";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import AuthUser from "../../../../api";
import { PrimaryBtn } from "../../../../components/Buttons";
import { appPrimary } from "../../../../components/AppColors";

const IndexConfig = ({notify}) => {
    const {token,setToken,user} = AuthUser();
    const navigate = useNavigate();
    const [updating, setUpdating] = useState(false);

    const redirect = () => {
        window.location.href = '/app/dashboard';
    }


    const onChangeUser = (values) => {
        setUpdating(true);
        api.post('/user/update',{
            full_name: values.full_name,
            email:values.email,
            cpf: values.cpf,
        }).then((res) => {
            setUpdating(false);
            setToken(res.data.user,token)
            notify('success','Sucesso','Suas informações foram atualizadas com sucesso!')
            // setTimeout(redirect, 1000);
            
        }).catch((err)=>{
            console.log('erro logando',err);
            notify('error','Erro','Ocorreu um erro ao fazer login. Tente novamente mais tarde.')
            setUpdating(false);
        });
    };

    const prohibited_user_levels = [7,8];

    return(
        <div>
            <Form
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                style={{
                maxWidth: 600,
                }}
                initialValues={{
                    full_name: user.full_name,
                    email: user.email,
                    cpf: user.cpf,
                }}
                onFinish={onChangeUser}
                autoComplete="off"
            >
                <Form.Item
                    label="Nome completo"
                    name="full_name"
                    rules={[
                        {
                        required: true,
                        message: 'Insira seu nome completo',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                        required: true,
                        message: 'Insira um email válido',
                        type:"email"
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="CPF"
                    name="cpf"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button style={{color: appPrimary}} htmlType="submit">
                        {updating ? <LoadingOutlined style={{fontSize: 24,}} spin /> : 'Atualizar'}
                    </Button>
                </Form.Item>
            </Form>
            <div style={{width:"fit-content",marginLeft:"auto",marginRight:"auto",marginBottom:"10px",marginTop: "40px"}}>
                {user.email ? 
                    ''
                    : 
                user.user_level_id==1 ? 
                    <PrimaryBtn 
                        onClick={()=>navigate('/app/user/config/plans')} 
                        styles={{
                            justifyContent:"center",
                            fontWeight:"600",fontSize:"20px"
                        }}
                        type="primary">
                            Fazer Upgrade
                        </PrimaryBtn>
                    : 
                    <Button style={{color: appPrimary}}  onClick={()=>navigate('/app/user/config/plans')}>Mudar de plano</Button>
                    }
            </div>
        </div>
    );
};

export default IndexConfig;