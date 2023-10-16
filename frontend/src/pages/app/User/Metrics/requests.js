import { store } from "../../../.."
import api from "../../../../api/api"
import { setAllExercises } from "../../../../store/exercise";
import { setWorkoutHistory } from "../../../../store/history";
import { setWorkout } from "../../../../store/workout";

export const loadMetrics = (notify, setMetrics) => {
    api.get('/user/metrics' )
    .then((res) => {
        if(res.data.status=='success'){
            const data = res.data.data;
            setMetrics(data)
            // setLoading(false)
        }
        else{
            setMetrics(null)
            console.log('erro carregar hist',res.data);
            notify('error','Erro','Ocorreu um erro ao encontrar seu histórico. Tente novamente mais tarde.')
            // setLoading(false)
        }
    }).catch((err)=>{
        setMetrics(null)
        console.log('erro carregar hist',err);
        notify('error','Erro','Ocorreu um erro ao encontrar seu histórico. Tente novamente mais tarde.')
        // setLoading(false)
    });
}

