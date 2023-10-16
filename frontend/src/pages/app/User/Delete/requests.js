import api from "../../../../api/api";

export const deleteAccount = (notify, cb) => {
    api.post('/user/delete')
    .then((res) => {
        if(res.data.status=='success'){
            const data = res.data.data;
            cb()
        }
        else{
            console.log('erro carregar peso',res.data);
            notify('error','Erro','Ocorreu um erro ao encontrar seus dados. Tente novamente mais tarde.')
            // cb()
        }
    }).catch((err)=>{
        console.log('erro carregar peso',err);
        notify('error','Erro','Ocorreu um erro ao encontrar seus dados. Tente novamente mais tarde.')
        // cb()
    });
}
