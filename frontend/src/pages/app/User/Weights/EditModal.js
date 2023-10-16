import { Button, DatePicker, Form, Input, Modal, Spin } from "antd";
import { useEffect, useState } from "react";
import NormalLoader from "../../../../components/Loaders/NormalLoader";
import { editWeight } from "./requests";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import ButtonLoader from "../../../../components/Loaders/ButtonLoader";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Sao_Paulo');


const EditModal = ({notify, open, setModalOpen, formRef}) => {

    const [ loading, setLoading ] = useState(false);

    const OnFinishAddExercise = (values) => {
        setLoading(true);
        
        editWeight(
            notify,
            {
                weight: parseFloat(String(values.weight).replace(',', '.')),
                measure_date: values.measure_date.format('YYYY-MM-DD'),
                id: open.id
            },
            () => {
                setLoading(false);
                setModalOpen(false);
            }
        )

    }

    useEffect(()=>{
        if(open && open.id){
            formRef.current?.setFieldValue('measure_date', dayjs(open.measure_date, 'YYYY-MM-DD'))
            
        }
        else{
            formRef.current?.setFieldValue('measure_date', dayjs.tz())
            formRef.current?.setFieldValue('weight', null)
        }
    },[open])

    return(
        <div>
            <Modal
                footer = {[]}
                open={open ? true : false}
                onCancel={()=>setModalOpen(false)}
                title={open && open.id == 0 ? "Atualizar peso" : "Editar peso"}
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
                                measure_date: dayjs(open.measure_date, 'YYYY-MM-DD'),
                            }
                        :
                            { 
                                weight: null, 
                                measure_date: dayjs.tz(),
                            }
                    }
                >

                    <Form.Item
                        name="weight"
                        label="Peso"
                        rules={[{
                            required: true,
                            message: 'Apenas números e vírgula',
                            pattern: /^(?:0|[1-9]\d+|)?(?:,?\d{0,2})?$/
                        }]}
                    >
                        <Input suffix="kg" placeholder="Peso" />
                    </Form.Item>

                    <Form.Item
                        name="measure_date"
                        label="Data"
                        rules={[{
                            required: true,
                            message: 'Por favor digite uma data',
                        }]}
                    >
                        <DatePicker format="DD/MM/YYYY"/>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button htmlType="submit" type="primary" style={{}} disabled={loading ? true : false}>
                            {loading ? <ButtonLoader /> : open && open.id == 0 ? 'Atualizar' : 'Editar'}
                        </Button>
                    </Form.Item>

                </Form>
            </Modal>
        </div>
    );
}

export default EditModal