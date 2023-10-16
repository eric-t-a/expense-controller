import { store } from "../../.."
import api from "../../../api/api";
import { filterTerritsBy, sortTerritsBy } from "../../../components/helper";
import { setAllInfo, setFiltered } from "../../../store/allInfo";


export const loadAllInfo = (notify, cb) => {
    api.get('/registers/all')
    .then((res) => {
        if(res.data.status=='success'){
            const data = res.data.data;
            store.dispatch(setAllInfo(data));
            store.dispatch(setFiltered(filterTerritsBy(sortTerritsBy(data))));
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

export const editRegister = (notify, data, cb) => {
    api.post('/registers/edit', {...data})
    .then((res) => {
        if(res.data.status=='success'){
            const data = res.data.data;
            store.dispatch(setAllInfo(data));
            store.dispatch(setFiltered(filterTerritsBy(sortTerritsBy(data))));
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

export const editTerrit = (notify, data, cb) => {
    api.post('/territ/edit', {...data})
    .then((res) => {
        if(res.data.status=='success'){
            const data = res.data.data;
            store.dispatch(setAllInfo(data));
            store.dispatch(setFiltered(filterTerritsBy(sortTerritsBy(data))));
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

export const deleteRegister = (notify, data, cb) => {
    api.post('/registers/delete', {...data})
    .then((res) => {
        if(res.data.status=='success'){
            const data = res.data.data;
            store.dispatch(setAllInfo(data));
            store.dispatch(setFiltered(filterTerritsBy(sortTerritsBy(data))));
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