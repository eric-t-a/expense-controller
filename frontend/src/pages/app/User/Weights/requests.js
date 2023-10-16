import { store } from "../../../..";
import api from "../../../../api/api";
import { setWeights } from "../../../../store/weight";

export const loadWeights = (notify, setLoading) => {
    api.get('/weight/all')
    .then((res) => {
        if(res.data.status=='success'){
            const data = res.data.data;
            store.dispatch(setWeights([...data]))
            setLoading(false)
        }
        else{
            store.dispatch(setWeights([]))
            console.log('erro carregar peso',res.data);
            notify('error','Erro','Ocorreu um erro ao encontrar seus dados. Tente novamente mais tarde.')
            setLoading(false)
        }
    }).catch((err)=>{
        store.dispatch(setWeights([]))
        console.log('erro carregar peso',err);
        notify('error','Erro','Ocorreu um erro ao encontrar seus dados. Tente novamente mais tarde.')
        setLoading(false)
    });
}

export const editWeight = (notify,data,cb) => {
    api.post('/weight/edit',{...data})
    .then((res) => {
        if(res.data.status=='success'){
            const data = res.data.data;
            store.dispatch(setWeights([...data]))
            cb()
        }
        else{
            store.dispatch(setWeights([]))
            console.log('erro carregar peso',res.data);
            notify('error','Erro','Ocorreu um erro ao atualizar seu peso. Tente novamente mais tarde.')
            cb()
        }
    }).catch((err)=>{
        store.dispatch(setWeights([]))
        console.log('erro carregar peso',err);
        notify('error','Erro','Ocorreu um erro ao atualizar seu peso. Tente novamente mais tarde.')
        cb()
    });
}

export const deleteWeight = (notify,data,cb) => {
    api.post('/weight/delete',{...data})
    .then((res) => {
        if(res.data.status=='success'){
            const data = res.data.data;
            store.dispatch(setWeights([...data]))
            cb()
        }
        else{
            store.dispatch(setWeights([]))
            console.log('erro carregar peso',res.data);
            notify('error','Erro','Ocorreu um erro ao excluir esse peso. Tente novamente mais tarde.')
            cb()
        }
    }).catch((err)=>{
        store.dispatch(setWeights([]))
        console.log('erro carregar peso',err);
        notify('error','Erro','Ocorreu um erro ao excluir esse peso. Tente novamente mais tarde.')
        cb()
    });
}