import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AuthUser from '../../../api';
import { useEffect, useState } from 'react';
import { StyledTable } from './styles';
import { BASE_URL } from '../../../api/api';
import EditRegisterModal from './EditRegisterModal';
import { formatDate } from './helper';
import { FaCircle } from 'react-icons/fa';
import EditTerritorioModal from './EditTerritorioModal';
import { Tag } from 'antd';

const Table = ({ notify, tableView }) => {
    const allinfo = useSelector(state => state.allinfo.filtered);
    const [editModalOpened, setModalOpened] = useState(null);
    const [editTerritModal, setEditTerrit] = useState(null)
    
    useEffect(() => {
        const rows = document.querySelectorAll('.registers-container');
        rows.forEach((row) => {
            row.scrollLeft = 999999
        })
    },[allinfo])

    return(
        <div>
            <StyledTable tableView={tableView}>
                {allinfo.map((territ => {
                    return(
                        <div key={territ.id} className='territ'>
                            

                            <div className='info-container' onClick={() => setEditTerrit(territ)}>
     
                                <div className='tags'>
                                    {territ.tags.map((tag) => {
                                        if(tableView == 'md'){
                                            return(
                                                <FaCircle style={{color: tag.color}} key={tag.id}/>
                                            );
                                        }
                                        else if(tableView == 'lg'){
                                            return(
                                                <Tag key={tag.id} color={tag.color}>{tag.nome}</Tag>
                                            );
                                        }
            
                                    })}
                                </div>


                                <div className='number'>
                                    {territ.number}
                                </div>
                                {
                                    tableView == 'lg' &&
                                    <img 
                                        src={`${BASE_URL.replace('api','')}images/congrs/${territ.congr_id}/${territ.img}`} 
                                    />
                                }
                                {
                                    tableView != 'sm' &&
                                    <div className='name-container'>
                                        <div className='name'>
                                            {territ.nome}
                                        </div>
                                    </div>
                                }
                                
                                
                            </div>
                            <div className='registers-container'>
                                <div className='registers'>
                                    {territ.registers.map((register) => {
                                        return(
                                            <div className='register' key={register.id} onClick={()=>setModalOpened(register)}>
                                                <div className='tags'>
                                                    {register.tags.map((tag) => {
                                                        if(tableView == 'md'){
                                                            return(
                                                                <FaCircle style={{color: tag.color}} key={tag.id}/>
                                                            );
                                                        }
                                                        else if(tableView == 'lg'){
                                                            return(
                                                                <Tag 
                                                                    style={{
                                                                        fontSize: '11px',
                                                                        lineHeight: '13px',
                                                                        transform: 'translateY(-5px)'
                                                                    }} 
                                                                    key={tag.id}
                                                                    color={tag.color}
                                                                >
                                                                    {tag.nome}
                                                                </Tag>
                                                            );
                                                        }
                                                    })}
                                                </div>
                                                <div className='name'>
                                                    {register.nome}
                                                </div>
                                                <div className='dates'>
                                                    <div className='init'>
                                                        {formatDate(register.init)}
                                                    </div>
                                                    <div className='end'>
                                                        {register.end && formatDate(register.end)}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                <div className='add' onClick={() => setModalOpened({ id: 0, territ_id: territ.id})}>
                                    +
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    )
                }))}
            </StyledTable>
            <EditRegisterModal 
                notify={notify}
                open={editModalOpened}
                setModalOpen={setModalOpened}
            />
            <EditTerritorioModal 
                notify={notify}
                open={editTerritModal}
                setModalOpen={setEditTerrit}
            />
        </div>

    );
}

export default Table;