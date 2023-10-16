import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import SuspenseLoader from './components/Loaders/SuspenseLoader';
import { notification } from 'antd';
const Login = React.lazy(() => import('./pages/Login'));
const Structure = React.lazy(() => import('./pages/Structure'));
const IndexConfig = React.lazy(() => import('./pages/app/User/Config'));
const IndexMetrics = React.lazy(() => import('./pages/app/User/Metrics'));
const IndexNotifications = React.lazy(() => import('./pages/app/User/Notifications'));
const IndexPlans = React.lazy(() => import('./pages/app/User/Plans'));
const IndexNutri = React.lazy(() => import('./pages/app/User/Nutri'));
const IndexPersonal = React.lazy(() => import('./pages/app/User/Personal'));
const IndexWeight = React.lazy(() => import('./pages/app/User/Weights'));
const IndexExercises = React.lazy(() => import('./pages/app/Registers'));
const IndexNutrition = React.lazy(() => import('./pages/app/Tags'));
const IndexUser = React.lazy(() => import('./pages/app/User'));
const IndexDelete = React.lazy(() => import('./pages/app/User/Delete'));
const Forbidden = React.lazy(() => import('./pages/app/Forbidden'));




function Router() {
  const [api, contextHolder] = notification.useNotification();
  
  const notify = (type,title,msg) => {
    api[type]({
      message: title,
      description:
      msg,
    });
  };
  return (
      <BrowserRouter>
        {contextHolder}
        <Routes>
          <Route exact path="/login" element={<Suspense fallback={<SuspenseLoader/>}><Login notify={notify} /></Suspense>}/>
          <Route path="/app" element={<Suspense fallback={<SuspenseLoader/>}><Structure notify={notify} /></Suspense>}>

            {/* <Route path="dashboard" element={<Suspense fallback={<SuspenseLoader/>}><IndexDashboard notify={notify} /></Suspense>}/> */}

            <Route exact path="registers" element={<Suspense fallback={<SuspenseLoader/>}><IndexExercises notify={notify} /></Suspense>}/>
            
            <Route path="tags" element={<Suspense fallback={<SuspenseLoader/>}><IndexNutrition notify={notify} /></Suspense>}/>

            <Route path="user" element={<Suspense fallback={<SuspenseLoader/>}><IndexUser notify={notify} /></Suspense>}/>
            <Route path="user/weights" element={<Suspense fallback={<SuspenseLoader/>}><IndexWeight notify={notify} /></Suspense>}/>
            <Route path="user/nutri" element={<Suspense fallback={<SuspenseLoader/>}><IndexNutri notify={notify} /></Suspense>}/>
            <Route path="user/personal" element={<Suspense fallback={<SuspenseLoader/>}><IndexPersonal notify={notify} /></Suspense>}/>
            <Route path="user/notifications" element={<Suspense fallback={<SuspenseLoader/>}><IndexNotifications notify={notify} /></Suspense>}/>
            <Route path="user/metrics" element={<Suspense fallback={<SuspenseLoader/>}><IndexMetrics notify={notify}/></Suspense>}/>
            <Route path="user/config" element={<Suspense fallback={<SuspenseLoader/>}><IndexConfig notify={notify}/></Suspense>}/>
            <Route path="user/config/delete" element={<Suspense fallback={<SuspenseLoader/>}><IndexDelete notify={notify}/></Suspense>}/>
            <Route path="user/config/plans" element={<Suspense fallback={<SuspenseLoader/>}><IndexPlans notify={notify} /></Suspense>}/>

            <Route path="forbidden" element={<Suspense fallback={<SuspenseLoader/>}><Forbidden notify={notify} /></Suspense>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
    
    
  );
}

export default Router;
