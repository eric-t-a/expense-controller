import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import AuthUser from "../../../../api";
import { deleteAccount } from "./requests";

const IndexDeleteAccount = ({notify}) => {
    const navigate = useNavigate();
    const { logout } = AuthUser();

    return(
        <div>
            <div style={{color:"#fff"}}>
                Você tem certeza que deseja excluir sua conta e seus dados?
            </div>
            <Button onClick={() => navigate(-1)} type="primary">
                Não
            </Button>
            <Button 
                onClick={() => {
                    deleteAccount(notify, () => logout())
                }}
            >
                Sim
            </Button>
        </div>
    );
}

export default IndexDeleteAccount