import { store } from "../../.."
import api from "../../../api/api";
import { setAllTags } from "../../../store/tags";

export const loadAllTags = (notify, cb) => {
    api.get('/tags/all')
    .then((res) => {
        if(res.data.status=='success'){
            const data = res.data.data;
            store.dispatch(setAllTags(data));
            cb()
        }
        else{
            console.log('erro carregar dieta',res.data);
            notify('error','Erro','Ocorreu um erro ao encontrar sua dieta. Tente novamente mais tarde.')
            cb()
        }
    }).catch((err)=>{
        console.log('erro carregar treino',err);
        notify('error','Erro','Ocorreu um erro ao encontrar sua dieta. Tente novamente mais tarde.')
        cb()
    });
}

export const editTag = (notify, data, cb) => {
    api.post('/tags/edit', {...data})
    .then((res) => {
        if(res.data.status=='success'){
            const data = res.data.data;
            store.dispatch(setAllTags(data));
            cb()
        }
        else{
            console.log('erro carregar dieta',res.data);
            notify('error','Erro','Ocorreu um erro ao encontrar sua dieta. Tente novamente mais tarde.')
            cb()
        }
    }).catch((err)=>{
        console.log('erro carregar treino',err);
        notify('error','Erro','Ocorreu um erro ao encontrar sua dieta. Tente novamente mais tarde.')
        cb()
    });
}

export const deleteTag = (notify, data, cb) => {
    api.post('/tags/delete', {...data})
    .then((res) => {
        if(res.data.status=='success'){
            const data = res.data.data;
            store.dispatch(setAllTags(data));
            cb()
        }
        else{
            console.log('erro carregar dieta',res.data);
            notify('error','Erro','Ocorreu um erro ao encontrar sua dieta. Tente novamente mais tarde.')
            cb()
        }
    }).catch((err)=>{
        console.log('erro carregar treino',err);
        notify('error','Erro','Ocorreu um erro ao encontrar sua dieta. Tente novamente mais tarde.')
        cb()
    });
}