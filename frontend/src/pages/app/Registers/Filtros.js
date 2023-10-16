import { useEffect, useState } from "react";
import { FiltrosContainer } from "./styles";
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai'
import { filterTerritsBy, sortTerritsBy } from "../../../components/helper";
import { useDispatch, useSelector } from "react-redux";
import { Radio, Space } from "antd";
import { setSortBy } from "../../../store/sort";
import { setFiltered } from "../../../store/allInfo";
import { setFilterBy } from "../../../store/filter";

const Filtros = () => {

    const allinfo = useSelector(state => state.allinfo.allinfo)
    const allFiltered = useSelector(state => state.allinfo.filtered)
    const sortValue = useSelector(state => state.sort)
    const filterValue = useSelector(state => state.filter)

    const [filterOpen, setFilterOpen] = useState(false);

    const [sorted, setSorted] = useState(false);

    const dispatch = useDispatch();

    const onChangeSort = (e) => {
        dispatch(setSortBy(e.target.value));
        dispatch(setFiltered(sortTerritsBy([...allFiltered])));
    }

    const onChangeFilter = (e) => {
        dispatch(setFilterBy({ type: e.target.value, name: ''}));
        dispatch(setFiltered(filterTerritsBy(sortTerritsBy([...allinfo]))));
    }

    return(
        <FiltrosContainer filterOpen={filterOpen}>
            <div className="header">
                <div className='filter' onClick={() => setFilterOpen(!filterOpen)}>
                    Filtros{ filterOpen ? <AiOutlineUp /> : <AiOutlineDown />} 
                </div>
            </div>
            <div className="body">
                <div className="filters-container">
                    <div>
                        <div>
                            Ordenar por:
                        </div>

                        <Radio.Group onChange={(e) => onChangeSort(e)} value={sortValue}>
                            <Space direction="vertical">
                                <Radio value=''>Nenhum</Radio>
                                <Radio value='menos-trabalhado'>Menos trabalhado</Radio>
                                <Radio value='ultima-vez-trabalhado'>Última vez trabalhado</Radio>
                            </Space>
                        </Radio.Group>
                    </div>
                    <div>
                        <div>
                            Filtrar por:
                        </div>
                        <Radio.Group onChange={(e) => onChangeFilter(e)} value={filterValue.type}>
                            <Space direction="vertical">
                                <Radio value=''>Nenhum</Radio>
                                <Radio value='abertos'>Abertos</Radio>
                                <Radio value='fechados'>Fechados</Radio>
                            </Space>
                        </Radio.Group>
                    </div>
                </div>
            </div>
        </FiltrosContainer>
    );
}

export default Filtros