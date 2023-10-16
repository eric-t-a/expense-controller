import { Button, Checkbox, ConfigProvider, Form, Input, theme } from 'antd';
import { useEffect, useState } from 'react';
import {LoadingOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import AuthUser from '../api';
import { appPrimary } from '../components/AppColors';

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

const Login = ({notify}) =>{
    const [loggingIn,setLoggingIn] = useState(false);
    const {api,setToken,getToken} = AuthUser();

    const navigate = useNavigate();

    useEffect(()=>{
        if(getToken()){
            // navigate('/app/dashboard');
            navigate('/app/registers');
        }
        const isInsideApp = document.getElementById('inside-app');
        if( (!getCookie('welcome') || getCookie('welcome') == 'false') && isInsideApp && isInsideApp.innerHTML == 'true'){
            navigate('/welcome');
        }
    },[])

    const onFinish = (values) => {
        setLoggingIn(true);
        api.post('/login',{
            email:values.username,
            password:values.password
        }).then((res) => {
            setToken(res.data.user,res.data.access_token)
            setLoggingIn(false);
            window.location.href = '/app/registers'
        }).catch((err)=>{
            console.log('erro logando',err);
            notify('error','Erro','Ocorreu um erro ao fazer login. Tente novamente mais tarde.')
            setLoggingIn(false);
        });
    };

    const { darkAlgorithm } = theme;

    return(
        <ConfigProvider
            theme={{
                token: {
                    "fontSize": 18,
                    "colorPrimary": appPrimary
                  },
            }}
        >
            <div className='content'>
                <div className='login-wrapper'>
                    <div className='responsive-width'>
                        <Form
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            layout="vertical"
                            autoComplete="off"

                        >
                            <Form.Item
                                label="Usuário"
                                name="username"
                                rules={[{required: true, message: 'Por favor insira seu email'},]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Senha"
                                name="password"
                                rules={[{required: true, message: 'Por favor insira sua senha',},]}
                                >
                                <Input.Password/>
                            </Form.Item>
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                            >
                                <Checkbox>Lembre-me</Checkbox>
                            </Form.Item>
 
                            

                            <Form.Item>
                                <Button type="primary" htmlType="submit" disabled={loggingIn} style={{width:"100%"}}>
                                    {loggingIn ? <LoadingOutlined style={{fontSize: 24,}} spin /> : 'Login'}
                                </Button>

                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
    
};

export default Login;