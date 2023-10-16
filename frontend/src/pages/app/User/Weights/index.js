import { useEffect, useRef } from "react"
import { loadWeights } from "./requests"
import Table from "./Table"
import Graph from "./Graph"
import EditModal from "./EditModal"
import { useState } from "react"
import { Btn, EmptyState } from "./Weights.style"
import { useSelector } from "react-redux"
import SuspenseLoader from "../../../../components/Loaders/SuspenseLoader"
import { darkGray } from "../../../../components/AppColors"

const IndexWeight = ({notify}) => {
    const [toEdit, setToEdit ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const formRef = useRef();
    const weights = useSelector( state => state.weight.all)

    useEffect(()=>{
        loadWeights(notify,setLoading);
    },[])

    return(
        <div>
            {
                loading ? 
                    <SuspenseLoader/>
                :
                    <>
                        {
                            weights.length > 1 ?
                                <Graph />
                            : weights.length > 0 ?
                                <EmptyState>
                                    Insira seu peso mais uma vez para ver seu gráfico de progresso
                                </EmptyState>
                            :
                                <EmptyState>
                                    Insira seu peso para acompanhar seu progresso!
                                </EmptyState>
                        }
                        <Btn onClick={()=> setToEdit({ id: 0})}>
                            Atualizar Peso
                        </Btn>
                        {
                            weights.length > 0 ?
                                <Table 
                                    setToEdit={setToEdit}
                                    notify={notify}
                                />
                            :
                                null
                        }
                        <EditModal 
                            open={toEdit}
                            setModalOpen={setToEdit}
                            notify={notify}
                            formRef={formRef}
                        />
                    </>
                }
        </div>
    )
}

export default IndexWeight