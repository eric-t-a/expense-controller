import { Button, Form, Input, Checkbox, Select, DatePicker, Switch } from "antd";
import { useEffect, useState } from "react";
import api from "../../../../api/api";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import AuthUser from "../../../../api";
import { MapContainer, TileLayer, Polyline , Popup, Marker, useMap} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { loadMetrics } from "./requests";
import { red, darkGray } from "../../../../components/AppColors";



const IndexMetrics = ({notify}) => {
    const { user } = AuthUser();
    const [metrics, setMetrics] = useState(null);
    const [userActivity, setUserAct] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        loadMetrics(notify, setMetrics);
    },[])

    useEffect(() => {
        if(!user || user.id != 13){
            navigate('/app/registers')
        }
    },[user])

    

    var filteredMetrics = metrics ? metrics.filter((metric) => metric.latitude) : [];

    if(userActivity){
        filteredMetrics = metrics ? metrics.filter((metric) => metric.full_name) : [];
    }

    const countMetrics = filteredMetrics.length;

    return(
        <div>
            <MapContainer
                center={[-14, -54]}
                zoom={4}
                scrollWheelZoom={false}
                style={{height:"50vh",width:"vh", borderRadius: "8px"}}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                { filteredMetrics.map((metric, index) => {
                    if(metric.user_id){
                        return null;
                    }
                    const color = `rgb(${255*(1 - index/(countMetrics - 1))}, 0, ${255*(0 + index/(countMetrics - 1))})`;

                    const currentLocationOptions = { color: color, weight:"12", stroke:true };

                    return(
                        <Polyline
                            pathOptions={currentLocationOptions}
                            positions={[[metric.latitude, metric.longitude],[metric.latitude, metric.longitude]]}
                        />
                    )
                })}
            
            </MapContainer>
            <div style={{display: 'flex',justifyContent:"center",marginTop: "20px", color: darkGray, lineHeight:"26px"}}>
                Atividade de usuários&nbsp;<Switch onChange={(checked) => setUserAct(checked)} />
            </div>

            <div style={{color: darkGray, textAlign: 'center', marginTop: "20px"}}>
                Total: {countMetrics}
            </div>
            <div style={{color: darkGray, textAlign: 'center', marginTop: "20px"}}>
                {filteredMetrics.map((metric) => {
                    const filteredLink = metric.link
                        .replace('https://fitbase.com.br','')
                        .replace('http://localhost:3000','')
                        .split('fbclid')[0];

                    const date = metric.created_at.split('T')[0];
                    const time = metric.created_at.split('T')[1];
                    
                    const formatedDate = 
                        `${date.split('-')[2]}/${date.split('-')[1]} ${time.split(':')[0]}:${time.split(':')[1]}`;
                    
                    return(
                        <div style={{display: 'flex', gap: "10px"}}>
                            <div style={{width: '33%'}}>
                                {filteredLink}
                            </div>
                            {   
                                metric.full_name ? 
                                    <div style={{width: '33%', wordBreak: 'break-all'}}>
                                        {metric.full_name.split(' ')[0]}
                                    </div>
                                :
                                    null
                            }
                            <div style={{width: '33%'}}>
                                {formatedDate}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default IndexMetrics;