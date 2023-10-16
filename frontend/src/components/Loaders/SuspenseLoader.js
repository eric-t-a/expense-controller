import {LoadingOutlined} from '@ant-design/icons';

const SuspenseLoader = ({}) => {

    return(
        <div style={{width:"fit-content",marginLeft:"auto",marginRight:"auto",marginTop:"200px"}}>
            <LoadingOutlined className="white-text" style={{fontSize: 40,}} spin/>
        </div>
    );
};

export default SuspenseLoader;