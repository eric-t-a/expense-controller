import { Form, Button, Input } from "antd";
import api from "../../api/api";
import { LoadingOutlined } from "@ant-design/icons";
import AuthUser from "../../api";



const CreateUser = ({type,creatingUser,setCreatingUser,loadUnit,notify,setModalAdmin}) => {

    const {user} = AuthUser();

    const createUser = (values)=> {
        setCreatingUser(true);
        console.log('company',user.company_id)
        api.post('/register',{
            full_name: values.full_name,
            email:values.email,
            password:values.password,
            user_level_id: type=="admin" ? 2 : 0,
            company_id: user.company_id
        }).then((response) => {
            loadUnit();
            setCreatingUser(false);
            setModalAdmin(false);
        }).catch((err)=>{
            console.log('erro logando',err);
            setCreatingUser(false);
            notify('error','Erro','Ocorreu um erro ao atualizar sua empresa. Tente novamente mais tarde.')
            setModalAdmin(false)
        });
    };

    return(
        <Form
          labelCol={{span: 8}}
          wrapperCol={{span: 14}}
          layout="horizontal"
          style={{maxWidth: 800}}
          onFinish={createUser}
          labelWrap={true}
        >
            <Form.Item
                label="Nome completo" 
                name="full_name"
                rules={[{required: true,message: 'Por favor insira o nome do administrador'}]}
            >
                <Input placeholder="Nome" disabled={creatingUser}/>
            </Form.Item>
            <Form.Item
                label="Email" 
                name="email"
                rules={[{type: 'email',required: true,message: 'Por favor insira um email válido'}]}
            >
                <Input placeholder="Nome" disabled={creatingUser}/>
            </Form.Item>
            <Form.Item
                label='Senha'
                name="password"
                rules={[{required: true,message: 'Por favor insira uma senha',},]}
                >
                <Input.Password />
            </Form.Item>
            <Button type="primary" htmlType="submit" disabled={creatingUser} style={{width:"100%"}}>
                {creatingUser ? <LoadingOutlined style={{fontSize: 24,}} spin/> : 'Criar'}
            </Button>
        </Form>
    );
};

export default CreateUser;