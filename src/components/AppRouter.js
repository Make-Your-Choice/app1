import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import StartForm from './StartForm';
import DailyForm from './DailyForm';
import PeriodForm from './PeriodForm';

//функция для организации навигации по страницам
const AppRouter = () => {
    return (
        <Routes>
          {/*путь к стартовой странице (просмотр курса валюты за дату)*/}
          <Route exact path="/" element={<StartForm/>}/>
          {/*путь к странице для просмотра списка курсов валют за дату*/}
          <Route path="/daily" element={<DailyForm/>}/>
          {/*путь к странице для просмотра списка курсов валюты за период*/}
          <Route path="/period" element={<PeriodForm/>}/>
        </Routes>
    );
};

export default AppRouter;