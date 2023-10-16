import { Row, Col, Grid,Typography, Button } from "antd";
import iphone2 from '../../../../images/iphone2.png';
import { useOutletContext } from "react-router-dom";
import { FaUserAlt, FaAppleAlt, FaDumbbell, FaRunning, FaWeight, FaCalculator, FaUtensils, FaRedoAlt,FaCheckCircle } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { MdOutlineDirectionsBike, MdMoneyOff } from "react-icons/md";
import { BiStats } from "react-icons/bi";
import PlanCard from "./PlanCard";
import { useState, useEffect } from "react";
import api from "../../../../api/api";
import AuthUser from "../../../../api";
import SuspenseLoader from "../../../../components/Loaders/SuspenseLoader";
import { appPrimary, darkGray } from "../../../../components/AppColors";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styled from "styled-components";

const { useBreakpoint } = Grid;

const StyledSwiper = styled(Swiper)`
    .swiper-slide{
        width: 100%;
        max-width: min(calc(100vw - 100px), 300px);
    }
`;

const Title = styled.div`
    color: ${darkGray};
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: 600;
`;

const plans = {
    individual:[
        {
            plan: 'Basic',
            stripe: '',
            price: 'Grátis',
            user_level_id: 1,
            preco: 0,
            items: [
                {
                    icon1: <></>,
                    icon2: <FaWeight/>,
                    title: 'Meu Peso',
                    tip: 'Defina uma meta e acompanhe seu progresso pelo gráfico'
                },
                {
                    icon1: <></>,
                    icon2: <FaCalculator/>,
                    title: 'Calculadora de Calorias',
                    tip: 'Insira o que você come diariamente para saber os macronutrientes e calorias'
                },
                // { icon1: <FaCheckCircle style={{color:"#ffffff00"}}/>,icon2: <></>,title: '',tip: ''},
                // { icon1: <FaCheckCircle style={{color:"#ffffff00"}}/>,icon2: <></>,title: '',tip: ''},
                { icon1: <FaCheckCircle style={{color:"#ffffff00"}}/>,icon2: <></>,title: '',tip: ''},
                // { icon1: <FaCheckCircle style={{color:"#ffffff00"}}/>,icon2: <></>,title: '',tip: ''},
                { icon1: <FaCheckCircle style={{color:"#ffffff00"}}/>,icon2: <></>,title: '',tip: ''},
                { icon1: <FaCheckCircle style={{color:"#ffffff00"}}/>,icon2: <></>,title: '',tip: ''},
            ]
        },
        {
            plan: 'Black',
            stripe: 'plan_OTrADq3KPVMV2y',
            user_level_id: 2,
            price: 'R$ 9,90/mês',
            preco: 9.90,
            items: [
                {
                    icon1: <></>,
                    icon2: <FaWeight/>,
                    title: 'Meu Peso',
                    tip: ''
                },
                {
                    icon1: <></>,
                    icon2: <FaCalculator/>,
                    title: 'Calculadora de Calorias',
                    tip: ''
                },
                {
                    icon1: <FaCheckCircle style={{color: appPrimary}}/>,
                    icon2: <FaRedoAlt/>,
                    title: 'Substitutos',
                    tip: 'Substitua alimentos indesejados da sua dieta com essa calculadora extremamente precisa'
                },
                // {
                //     icon1: <FaCheckCircle style={{color:appPrimary}}/>,
                //     icon2: <FaUtensils/>,
                //     title: 'Dieta',
                //     tip: 'Monte sua própria dieta baseada nos macronutrientes'
                // },
                // {
                //     icon1: <FaCheckCircle style={{color:appPrimary}}/>,
                //     icon2: <BiStats/>,
                //     title: 'Calculadora de TMB',
                //     tip: 'Calcule e acompanhe o progresso que seu corpo está fazendo'
                // },
                {
                    icon1: <FaCheckCircle style={{color:appPrimary}}/>,
                    icon2: <FaRunning/>,
                    title: 'Corrida',
                    tip: 'Contagem de calorias queimadas na corrida, acompanhado no mapa, com gráficos de progresso'
                },
                // {
                //     icon1: <FaCheckCircle style={{color:appPrimary}}/>,
                //     icon2: <MdOutlineDirectionsBike/>,
                //     title: 'Bicicleta',
                //     tip: 'Contagem de calorias queimadas na bicicleta, acompanhado no mapa, com gráficos de progresso'
                // },
                {
                    icon1: <FaCheckCircle style={{color:appPrimary}}/>,
                    icon2: <FaDumbbell/>,
                    title: 'Musculação',
                    tip: 'Montagem e acompanhamento de treinos para ver seu progresso'
                },
            ]
        },
    ],
    professional: [
        {
            plan: 'Personal',
            stripe: 'personalv1',
            user_level_id: 6,
            price: 'R$ 24,90/mês',
            preco: 24.90,
            items: [
                {
                    icon1: <></>,
                    icon2: <FaUserAlt/>,
                    title: 'Plano Black',
                    tip: 'Usufrua do seu plano Black individual'
                },
                {
                    icon1: <FaCheckCircle style={{color:appPrimary}}/>,
                    icon2: <BsFillLightningChargeFill/>,
                    title: 'Treinos para alunos',
                    tip: 'Monte treinos personalizados para seus alunos à distância e acompanhe o progresso deles'
                },
                {
                    icon1: <FaCheckCircle style={{color:appPrimary}}/>,
                    icon2: <MdMoneyOff/>,
                    title: 'Grátis para alunos',
                    tip: 'Seus alunos utilizam a plataforma gratuitamente'
                },
                { icon1: <FaCheckCircle style={{color:"#ffffff00"}}/>,icon2: <></>,title: '',tip: ''},
            ]
        },
        {
            plan: 'Nutri',
            stripe: 'nutriv1',
            user_level_id: 5,
            price: 'R$ 29,90/mês',
            preco: 29.90,
            items: [
                {
                    icon1: <></>,
                    icon2: <FaUserAlt/>,
                    title: 'Plano Black',
                    tip: 'Usufrua do seu plano Black individual'
                },
                {
                    icon1: <FaCheckCircle style={{color:appPrimary}}/>,
                    icon2: <FaAppleAlt/>,
                    title: 'Dietas para pacientes',
                    tip: 'Monte dietas personalizadas à distância e acompanhe o progresso deles'
                },
                {
                    icon1: <FaCheckCircle style={{color:appPrimary}}/>,
                    icon2: <MdMoneyOff/>,
                    title: 'Grátis para pacientes',
                    tip: 'Seus pacientes utilizam a plataforma gratuitamente'
                },
                { icon1: <FaCheckCircle style={{color:"#ffffff00"}}/>,icon2: <></>,title: '',tip: ''},
            ]
        },
        {
            plan: 'Coach',
            stripe: 'coachv1',
            user_level_id: 10,
            price: 'R$ 44,90/mês',
            preco: 44.90,
            items: [
                {
                    icon1: <></>,
                    icon2: <FaUserAlt/>,
                    title: 'Plano Black',
                    tip: 'Usufrua do seu plano Black individual'
                },
                {
                    icon1: <FaCheckCircle style={{color:appPrimary}}/>,
                    icon2: <FaAppleAlt/>,
                    title: 'Dietas para pacientes',
                    tip: 'Monte dietas personalizadas à distância e acompanhe o progresso deles'
                },
                {
                    icon1: <FaCheckCircle style={{color:appPrimary}}/>,
                    icon2: <BsFillLightningChargeFill/>,
                    title: 'Treinos para alunos',
                    tip: 'Monte treinos personalizados para seus alunos à distância e acompanhe o progresso deles'
                },
                {
                    icon1: <FaCheckCircle style={{color:appPrimary}}/>,
                    icon2: <MdMoneyOff/>,
                    title: 'Grátis para pacientes',
                    tip: 'Seus pacientes utilizam a plataforma gratuitamente'
                },
            ]
        },
    ]
};

const IndexPlans = ({notify}) => {
    const {setUser,user} = AuthUser();
    const [handler, setHandler] = useState();
    const [loading,setLoading] = useState(false);
    const [modalCancel,setModalCancel] = useState(true);

    useEffect(
        () => {
          const handler = window.StripeCheckout.configure({
            key: window.stripeApi, // see index.blade.php in resources/views
            image: iphone2,
            locale: 'pt-BR',
            email: user ? user.email : undefined,
            allowRememberMe: false,
          });
          setHandler(handler);
        },
        [user]
      );
    const screens = useBreakpoint();


    const redirect = () => {
        window.location.href = '/app/registers';
    }

    const onBuy = (stripeToken,price,stripe_plan,plano) => {
        setLoading(true);
        api.post('/user/buy',{
            token: stripeToken,
            price: price,
            stripe_plan: stripe_plan,
            plan: plano
        }).then((res) => {
            notify('success','Sucesso','Seu plano foi ativado com sucesso!')
            setUser(res.data.user);
            setTimeout(redirect,1000);
        }).catch((err)=>{
            console.log('erro ativando plano',err);
            setLoading(false);

            notify('error','Erro','Ocorreu um erro ao ativar seu plano')
        });
    }

    const onClickChoose = (plano) => {
        if (handler) {
            handler.open({
              name: 'FitBase',
              amount: parseInt(plano.preco * 100), // In cents
              description: plano.title,
              panelLabel: `Pagar `,
              currency: 'brl',
              token: token => {
                if (onBuy)
                  onBuy(token, Math.round(plano.preco * 100),plano.stripe,plano.plan);
              },
            });
          }
    };
    return(
        <div>
            {loading ? 
            <SuspenseLoader />
            :
            <div>
                <div style={{width:"fit-content",marginRight:"auto",marginLeft:"auto"}}>
                    <Title level={2}>Planos Individuais</Title>
                </div>
                <div>
                    <StyledSwiper
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        spaceBetween={20}
                        initialSlide={2}
                    >
                        <SwiperSlide>
                            <PlanCard plano={plans.individual[0]} onClickChoose={onClickChoose} user={user}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <PlanCard plano={plans.individual[1]} onClickChoose={onClickChoose} user={user}/>
                        </SwiperSlide>
                    </StyledSwiper>
                </div>
                {   
                    user && user.user_level_id != 1 ?
                        <div style={{width:"fit-content",marginRight:"auto",marginLeft:"auto"}}>
                            <Button onClick={()=>setModalCancel(true)}>Cancelar inscrição</Button>
                        </div>
                    :
                        null
                }
                
            </div>
            }
        </div>
    );
};

export default IndexPlans;