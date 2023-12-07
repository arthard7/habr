import {Suspense, useContext, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {AboutLazy} from "./Pages/AboutPage/About.lazy";
import {MainLazy} from "./Pages/MainPage/MainPage.lazy";
import './styles/index.scss'
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";








const App = () => {





const {theme, ChangeTheme} = useTheme()

    return (




        <div className={classNames('app', {}, [theme])}>
            <Link to={'/about'}> ABOUT </Link>
            <Link to={'/'}> MAIN </Link>


    <Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route path={'/'} element={<MainLazy/>}/>
                <Route path={'/about'} element={<AboutLazy/>}/>
            </Routes>

    </Suspense>

            <button onClick={ChangeTheme}> change theme </button>

        </div>
    );
};

export default App;