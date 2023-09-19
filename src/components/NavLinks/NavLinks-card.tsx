import React from 'react';
import s from './NavLinks-card.module.scss'
import Image from "next/image";
import classNames from "classnames";
import {INavLinksCardProps, IViewModeProps} from "@/types/types";

const NavLinksCard = (props: {linkData: INavLinksCardProps, viewMode: IViewModeProps}) => {
    const imgClassName = classNames([s.image as string], [s[props.viewMode.component as string]])

    return (
        <div className={s.card}>
            <h2 className={s.title}>{props.linkData.title}</h2>
            <div className={imgClassName}>
                <Image src={props.linkData.image} alt={'Image'}/>
            </div>
            <a href={props.linkData.linkHref} className={s.button}>Подробнее</a>
        </div>
    );
};

export default NavLinksCard;