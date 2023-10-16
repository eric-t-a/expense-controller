import { Button, Select, Form, Input, Modal, Popconfirm, DatePicker, Image } from "antd";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import ButtonLoader from "../../../components/Loaders/ButtonLoader";
import { useSelector } from "react-redux";
import { DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { red } from "../../../components/AppColors";
import { deleteRegister, editRegister, editTerrit } from "./requests";
import { BASE_URL } from "../../../api/api";
import { AiOutlineSync } from 'react-icons/ai'

const { Option } = Select;

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Sao_Paulo');

const EditTerritorioModal = ({notify, open, setModalOpen, selectedFood, setSelFood, selectedUnit, setSelUnit}) => {

    const [ loading, setLoading ] = useState(false);
    const [ deleting, setDeleting ] = useState(null);
    const [ turnAroundFoto, setTurnAround ] = useState(false);
    const formRef = useRef();

    const allTags = useSelector(state => state.tags);

    const OnFinishAddExercise = (values) => {
        setLoading(true);
        console.log(values)

        editTerrit(
            notify,
            {
                id: open.id,
                tags: values.tags
            },
            () => {
                setLoading(false);
                setModalOpen(null)
            }
        )
    }

    // const onDelete = () => {
    //     setDeleting(true)
    //     deleteRegister(
    //         notify,
    //         {id: open.id},
    //         () => {
    //             setDeleting(null);
    //             onClose();
    //         }
    //     )
    // }

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

    const tags = open && open.id ? open.tags.map((tag) => tag.id) : [];

    const congr_id = open ? open.congr_id : '1';
    const foto = open ? open.img : '1';

    
    return(
        <div>
            <Modal
                footer = {[]}
                open={open ? true : false}
                onCancel={()=>onClose()}
                title='Visualizar território'
            >
                <div style={{textAlign: 'center', marginBottom: '30px', fontSize: '16px'}}>
                    <Image 
                        width={"100%"}
                        src={`${BASE_URL.replace('api','')}images/congrs/${congr_id}/${foto}`} 
                    />
                    Clique na imagem para ampliar
                </div>

                
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

                    <div style={{
                        display: 'flex', 
                        textAlign: 'center', 
                        maxWidth: '300px', 
                        margin: 'auto',
                        marginBottom: '20px'
                    }}>
                        <div style={{flex: '1'}}>
                            Território nº <b>{open ? open.number : 0}</b>
                        </div>
                        <div style={{flex: '1', fontWeight: '600'}}>
                            {open ? open.nome : ''}
                        </div>
                    </div>

                    <Form.Item
                        name="tags"
                        label="Tags"
                    >
                        <Select mode="multiple">
                            {allTags.map((tag) => {
                                if(tag.type == 'territ'){
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
                        <Button htmlType="submit" type="primary" style={{}} disabled={loading || deleting? true : false}>
                            {loading ? <ButtonLoader /> : open && open.id == 0 ? 'Adicionar' : 'Editar'}
                        </Button>
                    </div>
                </Form>
            </Modal>
        </div>
    );
}

export default EditTerritorioModal