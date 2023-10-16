import { Button, Select, Form, Input, Modal, Popconfirm, DatePicker, ColorPicker } from "antd";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import ButtonLoader from "../../../components/Loaders/ButtonLoader";
import { useSelector } from "react-redux";
import { DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { red } from "../../../components/AppColors";
import { deleteRegister, deleteTag, editRegister, editTag } from "./requests";

const { Option } = Select;

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Sao_Paulo');

const EditTagModal = ({notify, open, setModalOpen, selectedFood, setSelFood, selectedUnit, setSelUnit}) => {

    const [ loading, setLoading ] = useState(false);
    const [ deleting, setDeleting ] = useState(null);
    const formRef = useRef();


    const OnFinishAddExercise = (values) => {
        setLoading(true);

        editTag(
            notify,
            {
                id: open.id,
                nome: values.nome,
                color: typeof values.color == 'string' ? values.color : values.color.toHexString(),
                type: values.type
            },
            () => {
                setLoading(false);
                setModalOpen(null)
            }
        )
    }

    const onDelete = () => {
        setDeleting(true)
        deleteTag(
            notify,
            {id: open.id},
            () => {
                setDeleting(null);
                onClose();
            }
        )
    }

    const onClose = () => {
        setModalOpen(null);
        formRef.current?.setFieldValue('nome', null);
        formRef.current?.setFieldValue('type', null);
        formRef.current?.setFieldValue('color', null);
    }

    useEffect(() => {
        formRef.current?.setFieldValue('nome', open && open.nome ? open.nome : null);
        formRef.current?.setFieldValue('type', open && open.type ? open.type : null);
        formRef.current?.setFieldValue('color',  open && open.color? open.color : null );
    },[open])

    
    return(
        <div>
            <Modal
                footer = {[]}
                open={open ? true : false}
                onCancel={()=>onClose()}
                title={open && open.id ? 
                        "Editar tag"
                    : 
                        "Adicionar tag"
                }
            >
                <Form
                    ref={formRef}
                    onFinish={OnFinishAddExercise}
                    onFinishFailed={(err)=>console.log(err)}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 12 }}
                    initialValues={
                        open && open.id ?
                            {
                                nome: open.nome,
                                type: open.type,
                                color: open.color
                            }
                        :
                            {
                                nome: '',
                                init: dayjs()
                            }
                    }
                >

                    <Form.Item
                        name="nome"
                        label="Nome da tag"
                        rules={[{
                            required: true,
                            message: 'Por favor digite um nome para a tag',
                        }]}
                    >
                        <Input placeholder="Nome"/>
                    </Form.Item>

                    <Form.Item
                        name="type"
                        label="Tipo"
                        rules={[{
                            required: true,
                            message: 'Por favor selecione um tipo',
                        }]}
                    >
                        <Select>
                            <Select.Option value='territ'>
                                Tag de território
                            </Select.Option>
                            <Select.Option value='register'>
                                Tag de registro
                            </Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="color"
                        label="Cor da tag"
                        rules={[{
                            required: true,
                            message: 'Por favor selecione uma cor',
                        }]}
                    >
                        <ColorPicker format='hex'/>
                    </Form.Item>

                    <div style={{display: 'flex',justifyContent: 'center'}}>
                        {
                            open && open.id ?
                                <Button 
                                    htmlType="button"
                                    onClick={() => onDelete()} 
                                    type="primary" 
                                    style={{ marginRight: '16px', backgroundColor: red}} 
                                    disabled={loading || deleting ? true : false}
                                >
                                    {deleting ? <ButtonLoader /> : 'Excluir'}
                                </Button>
                            :
                                null
                        }
                        <Button htmlType="submit" type="primary" style={{}} disabled={loading || deleting? true : false}>
                            {loading ? <ButtonLoader /> : open && open.id == 0 ? 'Adicionar' : 'Editar'}
                        </Button>
                    </div>
                </Form>
            </Modal>
        </div>
    );
}

export default EditTagModal