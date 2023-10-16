import { Button } from "antd"

const Quantity = ({defaultQtd,max,min,qtd,setQtd,customSetMore,customSetLess}) =>{

    const onClickMinus = () => {
        if(min){
            if(qtd!==min){
                if(customSetLess){
                    customSetLess()
                }
                else{
                    setQtd(qtd-1)
                }
                
            }
        }
        else{
            if(customSetLess){
                customSetLess()
            }
            else{
                setQtd(qtd-1)
            }
        }
    };

    const onClickMore = () => {
        if(max){
            if(qtd!==max){
                if(customSetMore){
                    customSetMore()
                }
                else{
                    setQtd(qtd+1)
                }
            }
        }
        else{
            if(customSetMore){
                customSetMore()
            }
            else{
                setQtd(qtd+1)
            }
        }
    };

    return(
        <>
            <div style={{width:"37px",height:"32px",display:"inline-block"}}>
                <Button type="primary" onClick={()=>onClickMinus()}>
                    -
                </Button>
            </div>
            <div style={{width:"37px",height:"32px",display:"inline-block"}}>
                <h3 style={{textAlign:"center",paddingTop:"1px", color:"#e8ad3a",marginTop:"3px",marginBottom:"3px"}}>
                    {qtd}
                </h3>
            </div>
            <div style={{width:"37px",height:"32px",display:"inline-block"}}>
                <Button type="primary" onClick={()=> onClickMore()}>
                    +
                </Button>
            </div>
        </>
    );
};

export default Quantity;