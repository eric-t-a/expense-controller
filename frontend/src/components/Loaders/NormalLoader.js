import {LoadingOutlined} from '@ant-design/icons';

const NormalLoader = ({}) => {

    return(
        <div style={{width:"fit-content",marginLeft:"auto",marginRight:"auto",marginTop:"20px"}}>
            <LoadingOutlined className="white-text" style={{fontSize: 40,}} spin/>
        </div>
    );
};

export default NormalLoader;