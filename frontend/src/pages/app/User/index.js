import { useNavigate } from 'react-router-dom';
import PageCard from '../../../components/PageCard';
import { FaAppleAlt, FaCog, FaDumbbell, FaRunning, FaWeight } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { FiLogOut } from 'react-icons/fi';
import { BsLightning } from 'react-icons/bs';
import AuthUser from '../../../api';
import { DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from 'antd'
import { useState } from 'react';
import { isOnboarded } from '../../../components/helper';

const IndexUser = ({notify}) => {
    const navigate = useNavigate();

    const { logout } = AuthUser();

    const items = [
        {
            id: 'user-card-1',
            key: 1,
            icon: <FaWeight />,
            label: "Meu Peso",
            onClick: () => navigate('/app/user/weights')
        },
        {
            id: 'user-card-4',
            key: 4,
            icon: <FaCog />,
            label: "Configurações",
            onClick: () => navigate('/app/user/config')
        },
        {
            id: 'user-card-5',
            key: 5,
            icon: <DeleteOutlined />,
            label: "Excluir conta",
            onClick: () => navigate('/app/user/config/delete')
        },
        {
            key: 6,
            icon: <FiLogOut />,
            label: "Sair",
            onClick: () => logout()
        },
    ];
    const [ modalOpen, setModalOpen] = useState(false);

    const {user} = AuthUser();

    if(user.id == 13){
        items.splice(1, 0, {
            key: 7,
            icon: <ImStatsDots />,
            label: "Métricas",
            onClick: () => navigate('/app/user/metrics')
        })
    }


    const steps = [
        {
          target: '#user-card-1',
          content: 'Faça o acompanhamento do seu peso na sua jornada fitness',
          continuous: true
        },
        {
          target: '#user-card-4',
          content: 'Altere suas informações',
        },
        {
          target: '#user-card-5',
          content: 'Esse botão é feio e ridículo. A gente não gosta desse botão. Todas as suas informações serão apagadas.',
        },
    ];

    const onbKey = 'user';

    return(
        <div>
            <PageCard items={items}/>
        </div>
    );
}

export default IndexUser;