import { useSelector } from "react-redux";
import { TableContainer } from "./Weights.style";
import { DeleteOutlined, EditOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { red } from "../../../../components/AppColors";
import { useState } from "react";
import ButtonLoader from "../../../../components/Loaders/ButtonLoader";
import { deleteWeight } from "./requests";
import { Popconfirm } from "antd";

const Table = ({setToEdit, notify}) => {
    const weights = useSelector(state=>state.weight.all)
    const [toDelete, setToDelete] = useState(null)

    const onDelete = (id) => {
        setToDelete(id)
        deleteWeight(
            notify,
            { id: id },
            () => {
                setToDelete(null)
            }
        )
    }

    return(
        <TableContainer>
            <div className="weight-table">
                {weights.map((weight) => {
                    return(
                        <div className="weight-row" key={weight.id}>
                            <div className="weight-col">
                            </div>
                            <div className="date-col">
                            </div>
                            <div className="edit-col">
                                <EditOutlined onClick={() => setToEdit(weight)}/>
                            </div>
                            <div className="delete-col">
                                <Popconfirm
                                    title="Excluir"
                                    description="Tem certeza que deseja excluir?"
                                    icon={<QuestionCircleOutlined style={{ color: red }} />}
                                    onConfirm={() => onDelete(weight.id)}
                                >
                                    {toDelete == weight.id ? <ButtonLoader /> : <DeleteOutlined />}
                                </Popconfirm>
                            </div>
                        </div>
                    )
                })}
            </div>
        </TableContainer>
    );
}

export default Table