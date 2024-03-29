import React from 'react';
import s from './BurgerMenu-links.module.scss'
import {IBurgerMenuLinksProps, TBurgerMenuLinksProps} from "@/types/types";

const BurgerMenuLinks = (props: IBurgerMenuLinksProps) => {
    const linksRender = (linksData: TBurgerMenuLinksProps) => linksData.map((el, id) => {
        return (
            <li className={s.item} key={id}>
                <a href={el.url} className={s.link} onClick={props.closeMenuFunc}>{el.text}</a>
            </li>
        )
    })

    return (
        <div className={s.content}>
            <h2 className={s.title}>Навигация</h2>
            <ul className={s.list}>
                {linksRender(props.links)}
            </ul>
        </div>
    );
};

export default BurgerMenuLinks;