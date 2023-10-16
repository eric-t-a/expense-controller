import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { loadAllTags } from './requests';
import { useSelector } from 'react-redux';
import { appPrimary } from '../../../components/AppColors';
import { TagsContainer } from './styles';
import EditTagModal from './EditTagModal';


const IndexNutrition = ({notify}) => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(null);

    useEffect(()=>{
        loadAllTags(notify, () => {});
    },[])

    const allTags = useSelector(state => state.tags);

    return(
        <TagsContainer>
            <h2>
                Tags
            </h2>
            <div className='tags-container'>
                {allTags.map((tag) => {
                    return(
                        <div 
                            className="card" 
                            key={tag.id}
                            style={{backgroundColor: tag.color}}
                            onClick={() => setModalOpen(tag)}
                        >
                            {tag.nome}
                        </div>
                    )
                })}
                <div className="card" style={{backgroundColor: appPrimary}} onClick={() => setModalOpen({id: 0})}>
                    Nova Tag     
                </div>
            </div>
            <EditTagModal notify={notify} setModalOpen={setModalOpen} open={modalOpen}/>
        </TagsContainer>
    );
}

export default IndexNutrition;