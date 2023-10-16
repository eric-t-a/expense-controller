import styled from 'styled-components'
import { green, navy, red, white, darkGray } from './AppColors';
import { BsFillLockFill } from "react-icons/bs";
import { Badge } from 'antd';

const CardHolder = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: calc(100vh - 225px);

    .card{
        width: calc(50% - 10px);
        background-color: ${navy};
        border-radius: 8px;
        color: ${darkGray};
        padding: 10px;
        transition: all 0.2s;
        box-shadow: 0px 10px 20px rgb(0, 21, 41, 0.5);
        text-align: center;
        cursor: pointer;
        max-width: 200px;
        position: relative;

        svg{
            font-size: 50px;
        }

        &:hover{
            background-color: rgb(65 113 133);
            color: ${white};
        }

        .soon{
            position: absolute;
            right: 0;
            top: 32px;
            background-color: ${red};
            z-index: 2;
            padding: 2px 5px;
            border-radius: 4px 0 0 4px;
        }
        .new{
            position: absolute;
            right: 0;
            top: 32px;
            background-color: ${green};
            z-index: 2;
            padding: 2px 5px;
            border-radius: 4px 0 0 4px;
        }
    }

    .disabled {
        filter: grayscale(0.8);
        cursor: not-allowed;
    }
    
`;

const LockIcon = styled(BsFillLockFill)`
    height: 16px;
    position: absolute;
`

const PageCard = ({ items }) => {
    return(
        <CardHolder>
            {
                items.map((item) => {
                    return(
                        <div onClick={item.onClick} key={item.key} className={`card ${item.disabled ? 'disabled' : ''}`} id={item.id ?? item.key}>
                            {item.soon && 
                                <div className='soon'>
                                    Em breve
                                </div>
                            }
                            {item.new && 
                                <div className='new'>
                                    Novo
                                </div>
                            }
                            {item.disabled ? <LockIcon /> : null}
                            <div>
                                {item.icon}
                            </div>
                            <div>
                                {item.label}
                            </div>
                        </div>
                    );
                })
            }
        </CardHolder>
    )
}

export default PageCard