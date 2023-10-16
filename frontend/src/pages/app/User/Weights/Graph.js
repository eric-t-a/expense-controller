import { useSelector } from 'react-redux';
import { LineChart, Line, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { appPrimary, appSecondary, black, lightNavy, navy, yellow } from '../../../../components/AppColors';
import { ToolTipContainer, GraphHolder } from './Weights.style';
import { useCallback, useEffect, useRef, useState } from 'react';

const Graph = () => {
    const weights = useSelector(state => state.weight.all);

    useEffect(()=>{
        const scrollableRef = document.getElementById('scrollable-ref')

        if(scrollableRef){
            scrollableRef.scrollIntoView({
                behavior: "smooth",
                inline: "end"
              });
        }
    },[])



    var yMin = 9999;
    var yMax = 0;

    const formattedWeights = weights.map((weight) => {
        if(parseFloat(weight.weight) > yMax){
            yMax = parseFloat(weight.weight);
        }

        if(parseFloat(weight.weight) < yMin){
            yMin = parseFloat(weight.weight);
        }

        return({
            ...weight,
            measure_date: Date.parse(weight.measure_date)
        })
    })
    
    yMax = Math.ceil(yMax) + 1
    yMin = Math.floor(yMin) - 1

    var dY = 0

    for (var i = 0; i < 100; i++) {
        if((yMax - yMin) % 3 != 0 && i % 2 == 0){
            yMax += 1
        }
        else if((yMax - yMin) % 3 != 0 && i % 2 == 1){
            yMin -= 1
        }
        else{
            dY = (yMax - yMin) / 3
            break;
        }
    }



    const CustomTooltip = ({active, payload, label}) => {
        if(active && payload && payload.length){
            const pld = payload[0]
            return(
                <ToolTipContainer>
                    <div className='tool-tip-row'>
                        <div className='col'>
                            Peso:
                        </div>
                        <div className='col'>
                        </div>
                    </div>
                    <div className='tool-tip-row'>
                        <div className='col'>
                            Data:
                        </div>
                        <div className='col'>
                        </div>
                    </div>
                </ToolTipContainer>
            )
        }

        return null
    }
    

    return(
        <GraphHolder show={true}>
            <div >
                <div className='tick-holder'>
                    <div className='tick' style={{marginTop:"1px"}}>
                        {yMin+3*dY}
                    </div>
                    <div className='tick'>
                        {yMin+2*dY}
                    </div>
                    <div className='tick'>
                        {yMin+dY}
                    </div>
                    <div className='tick'>
                        {yMin}
                    </div>
                </div>
                <LineChart
                    width={500}
                    height={300}
                    data={formattedWeights}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    id="scrollable-ref"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                        dataKey="measure_date" 
                        angle={30} 
                        textAnchor="initial"  
                        height={50} 
                        tickCount={4}
                        tickFormatter={() => {}}
                        type='number'
                        domain={['auto', 'auto']}
                    />
                    <YAxis 
                        height={50} 
                        tickCount={4}
                        type='number'
                        domain={['auto', 'auto']}
                        mirror
                        tick={<></>}
                        ticks={[yMin, yMin+dY, yMin+2*dY, yMin+3*dY]} 
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
                    <Line 
                        type="monotone" 
                        dataKey="weight" 
                        stroke={yellow}
                        activeDot={{ r: 8 }} 
                        strokeWidth={3}
                    />
                </LineChart>
            </div>
        </GraphHolder>
    );
}

export default Graph