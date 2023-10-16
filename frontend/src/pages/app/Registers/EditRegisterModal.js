import { Button, Select, Form, Input, Modal, Popconfirm, DatePicker } from "antd";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import ButtonLoader from "../../../components/Loaders/ButtonLoader";
import { useSelector } from "react-redux";
import { DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { red } from "../../../components/AppColors";
import { deleteRegister, editRegister } from "./requests";

const { Option } = Select;

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Sao_Paulo');

const EditRegisterModal = ({notify, open, setModalOpen, selectedFood, setSelFood, selectedUnit, setSelUnit}) => {

    const [ loading, setLoading ] = useState(false);
    const [ deleting, setDeleting ] = useState(null);
    const formRef = useRef();

    const allTags = useSelector(state => state.tags);

    const OnFinishAddExercise = (values) => {
        setLoading(true);
        console.log(values)

        editRegister(
            notify,
            {
                id: open.id,
                nome: values.nome,
                init: values.init.format('YYYY-MM-DD'),
                end: values.end ? values.end.format('YYYY-MM-DD') : null,
                territ_id: open.territ_id,
                tags: values.tags
            },
            () => {
                setLoading(false);
                setModalOpen(null)
            }
        )
    }

    const onDelete = () => {
        setDeleting(true)
        deleteRegister(
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
        formRef.current?.setFieldValue('init', null);
        formRef.current?.setFieldValue('end', null);
        formRef.current?.setFieldValue('tags', []);
    }

    useEffect(() => {
        formRef.current?.setFieldValue('nome', open && open.nome ? open.nome : null);
        formRef.current?.setFieldValue('init', open && open.init ? dayjs(open.init, 'YYYY-MM-DD') : null);
        formRef.current?.setFieldValue('end',  open && open.end? dayjs(open.end, 'YYYY-MM-DD') : null );
        formRef.current?.setFieldValue('tags',  open && open.end? open.tags.map((tag) => tag.id) : [] );
    },[open])

    const tags = open && open.id ? open.tags.map((tag) => tag.id) : []
    
    return(
        <div>
            <Modal
                footer = {[]}
                open={open ? true : false}
                onCancel={()=>onClose()}
                title={open && open.id ? 
                        "Editar registro"
                    : 
                        "Adicionar registro"
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
                                init: open.init ? dayjs(open.init, 'YYYY-MM-DD') : null,
                                end: open.end ? dayjs(open.end, 'YYYY-MM-DD') : null,
                                tags: open.tags ? open.tags.map((tag) => tag.id) : []
                            }
                        :
                            {
                                nome: '',
                                init: dayjs(),
                            }
                    }
                >

                    <Form.Item
                        name="nome"
                        label="Dirigente"
                        rules={[{
                            required: true,
                            message: 'Por favor digite um dirigente',
                        }]}
                    >
                        <Input placeholder="Dirigente"/>
                    </Form.Item>

                    <Form.Item
                        name="init"
                        label="Início"
                        rules={[{
                            required: true,
                            message: 'Por favor selecione uma data de início',
                        }]}
                    >
                        <DatePicker 
                            format="DD/MM/YYYY"
                            onChange={(date,dateString) => {
                                // dispatch(setDate(date.format('YYYY-MM-DD')))
                                // setLoading('date')
                            }}
                            style={{width:'100%'}}
                        />
                    </Form.Item>

                    <Form.Item
                        name="end"
                        label="Fim"
                    >
                        <DatePicker 
                            format="DD/MM/YYYY"
                            onChange={(date,dateString) => {
                                // dispatch(setDate(date.format('YYYY-MM-DD')))
                                // setLoading('date')
                            }}
                            style={{width:'100%'}}
                        />
                    </Form.Item>

                    <Form.Item
                        name="tags"
                        label="Tags"
                    >
                        <Select mode="multiple">
                            {allTags.map((tag) => {
                                if(tag.type == 'register'){
                                    return(
                                        <Select.Option 
                                            value={tag.id}
                                            key={tag.id} 
                                            style={{backgroundColor:tag.color, color: "#fff"}}
                                        >
                                            {tag.nome}
                                        </Select.Option>
                                    );
                                }
                                
                            })}
                            
                        </Select>
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

export default EditRegisterModal