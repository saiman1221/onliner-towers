'use client'
import React, {useState} from 'react';
import {store} from "@/assets/store";
import {EPages} from "@/types/types";
import s from "./ScaffoldPage.module.scss";

import YandexMap from "@/components/YandexMap/YandexMap";
import Modal from "@/components/Modal/Modal";
import ButtonUp from "@/components/ButtonUp/ButtonUp";
import Footer from "@/components/Footer/Footer";
import MoreQuestions from "@/components/MoreQuestions/MoreQuestions";
import Instructions from "@/components/Instructions/Instructions";
import Faq from "@/components/Faq/Faq";
import NavLinks from "@/components/NavLinks/NavLinks";
import Order from "@/components/Order/Order";
import Benefits from "@/components/Benefits/Benefits";
import Description from "@/components/Description/Description";
import MainScreen from "@/components/MainScreen/MainScreen";
import Specifications from "../ScaffoldPage/Specifications/Specifications";
import Prices from "../ScaffoldPage/Prices/Prices";
import Video from "@/components/Video/Video";

const ScaffoldPage = () => {
    const [modalIsOpen, setModalOpen] = useState(false)

    return (
        <div className={s.home}>
            <MainScreen title={store.scaffold.mainScreenTitle}
                        setModalOpen={setModalOpen}
                        page={EPages.scaffold}
                        headerLinks={store.scaffold.headerLinks}
                        topBarCards={store.topBarCards}
                        navLinks={store.navLinks}
            />

            <Description img={store.scaffold.description.img}
                         title={store.scaffold.description.title}
                         listData={store.scaffold.description.listData}
            />

            {/*Якорь характеристики*/}
            <div className={'anchor_link'} id={'specifications'}/>
            <Specifications/>

            {/*Якорь цены*/}
            <div className={'anchor_link'} id={'prices'}/>
            <Prices/>

            <Benefits cardsData={store.benefits} page={EPages.scaffold}/>

            <Order page={EPages.scaffold}/>

            <NavLinks page={EPages.scaffold}
                      component={'main'}
                      navLinks={store.navLinks}
            />

            {/*Якорь вопрос/ответ*/}
            <div className={'anchor_link'} id={'faq'}/>
            <Faq cardsData={store.scaffold.faq} page={EPages.scaffold}/>

            {/*Якорь инструкция*/}
            <div className={'anchor_link'} id={'manual'}/>
            <Instructions cardsData={store.scaffold.instructions.content} title={store.scaffold.instructions.title}/>

            <div className={s.videos_section + ' '}>
                <h2 className={s.title}>Видеоинструкции</h2>
                <div className={s.content}>
                    <Video title={store.scaffold.firstVideo.title} video={store.scaffold.firstVideo.video}/>
                </div>
            </div>

            <MoreQuestions title={'Остались вопросы?'} component={'main'}/>

            {/*Якорь контакты*/}
            <div className={'anchor_link'} id={'contacts'}/>
            <Footer links={store.scaffold.headerLinks} setModalOpen={setModalOpen}/>

            <YandexMap/>
            <Modal modalIsOpen={modalIsOpen} setModalOpen={setModalOpen}/>
            <ButtonUp/>
        </div>
    )
};

export default ScaffoldPage;