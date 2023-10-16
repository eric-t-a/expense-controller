import { useNavigate } from 'react-router-dom';
import { FaDumbbell, FaRunning } from 'react-icons/fa';
import { IoIosTimer } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { setTimerState } from '../../../store/timer';
import AuthUser from '../../../api';
import { useEffect, useState } from 'react';
import { loadAllInfo } from './requests';
import Table from './Table';
import { darkGray } from '../../../components/AppColors';
import Filtros from './Filtros';
import { loadAllTags } from '../Tags/requests';
import { Radio } from 'antd';
import { setFiltered } from '../../../store/allInfo';
import { filterTerritsBy, sortTerritsBy } from '../../../components/helper';


const IndexExercises = ({notify}) => {
    const [tableView, setTableView] = useState('md');
    const allFiltered = useSelector(state => state.allinfo.filtered);
    const allinfo = useSelector(state => state.allinfo.allinfo);
    const dispatch = useDispatch();

    useEffect(()=>{
        loadAllInfo(notify, () => {});
        loadAllTags(notify, () => {});
    },[])

    const onChangeTableView = (e) => {
        setTableView(e.target.value);

        if(e.target.value == 'sm'){
            const filtered = allFiltered.map((territ) => {
                var registers = [];
                if(territ.registers.length){
                    registers = [territ.registers[territ.registers.length - 1]];
                }

                return {... territ, registers: registers}
            })
            dispatch(setFiltered(sortTerritsBy([...filtered])));
        }
        else{
            dispatch(setFiltered(filterTerritsBy(sortTerritsBy([...allinfo]))));
        }
    }
    
    return(
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between',alignItems: 'center'}}>
                <h2>
                    Registros
                </h2>
                <div>
                <Radio.Group defaultValue="md" buttonStyle="solid" onChange={(e) => onChangeTableView(e)}>
                    <Radio.Button value="lg">+</Radio.Button>
                    <Radio.Button value="md">Normal</Radio.Button>
                    <Radio.Button value="sm">-</Radio.Button>
                </Radio.Group>
                </div>
            </div>
            
            <Filtros />
            <Table tableView={tableView} notify={notify}/>
        </div>
    );
}

export default IndexExercises;