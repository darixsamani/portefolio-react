import React, { Suspense } from 'react';
import { render } from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker'
import './index.css' ;
import 'antd/dist/antd.css';
import {Skeleton} from 'antd';


render(
        <React.StrictMode>
             <Suspense fallback={<Skeleton active />}>
                <App />
            </Suspense>
        </React.StrictMode>
    , document.querySelector('#app'));
    
serviceWorker.unregister();