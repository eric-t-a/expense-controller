import React, { useState } from 'react';
import { Upload } from 'antd';
import { PlusOutlined } from "@ant-design/icons";
import api from '../api/api';
import NormalLoader from './Loaders/NormalLoader';
import ImgCrop from 'antd-img-crop';






const ImageUploader = ({image,setImage,notify}) => {
  const [loading, setLoading] = useState(false);

  const uploadImage = ({ file }) => {
    setLoading(true);
    try {
        const blob = new Blob([file], { type: file.type });
        const formData = new FormData();
        formData.append('image', blob, file.name);
      
        api.post('/image-upload', formData,{ headers: {'Content-Type': 'multipart/form-data'}})
        .then(res => {
            if (res.status === 200 && res.data.status === 'success') {
                setImage(res.data.data);
            }
            else{
                notify('error','Erro','Desculpe, ocorreu um erro ao enviar sua logo')
                console.log('erro 1', res.data)
            }
            setLoading(false);
        })
        .catch((err)=>{
            console.log('erro 2', err);
            notify('error','Erro','Desculpe, ocorreu um erro ao enviar sua logo')
            setLoading(false);
        });
    } catch (error) {
        setLoading(false);
        notify('error','Erro','Desculpe, ocorreu um erro ao enviar sua logo')
        console.log('erro 3', error);
    }
  };

  const validateAndCrop = async (file) => {
    const formatIsAccepted =
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/jpg';
  
    if (!formatIsAccepted) {
      notify('error','Erro','Desculpe, o formato da imagem não é aceito.')
    }

    const isLt2M = file.size / 1024 / 1024 < 10;
    if (!isLt2M) {
      notify('error','Erro','O tamanho da imagem deve ser menor que 10 MB.')
    }

  
    return formatIsAccepted && isLt2M;
  }


  const uploadButton = (
    <div>
      {loading ? 
      <NormalLoader /> : 
      <>
        <PlusOutlined />
        <div className="ant-upload-text">Enviar</div>
      </>}
    </div>
  );

  return (
    <ImgCrop rotate>
      <Upload
          name="image"
          accept=".jpeg,.jpg,.png"
          listType="picture-card"
          // className="image-uploader upload-list-inline"
          maxCount={1}
          fileList={
              image
              ? [
                  {
                      uid: '-1',
                      status: 'done',
                      name: 'uploaded_image',
                      url: window.appUrl+'/images/all/'+image,
                  },
                  ]
              : []
          }
          showUploadList={{
              showPreviewIcon: false,
              showDownloadIcon: false,
          }}
          beforeUpload={validateAndCrop}
          customRequest={uploadImage}
          onRemove={()=>setImage('')}
          >
          {image ? '' : uploadButton}
      </Upload>
    </ImgCrop>
    );
    
};

export default ImageUploader;
