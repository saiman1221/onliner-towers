import React, {useEffect} from 'react';
import s from './BurgerMenu.module.scss';
import classNames from "classnames";
import {BurgerMenuProps} from "@/types/types";
import BurgerMenuLinks from "@/components/BurgerMenu/BurgerMenu-links";
import BurgerMenuInfo from "@/components/BurgerMenu/BurgerMenu-info";

const BurgerMenu = (props: BurgerMenuProps) => {
    const layoutClassName = classNames([s.layout as string], {
            [s.show]: props.mobileMenuIsOpen
        })

    const contentClassName = classNames([s.content as string], {
            [s.show]: props.mobileMenuIsOpen
        })

    const closeMenuFunc = () => {
        props.setMobileMenuIsOpen(false)
    }

    useEffect(() => {
        let body = document.getElementById('body')
        props.mobileMenuIsOpen ? body!.classList.add('none-scroll') : body!.classList.remove('none-scroll')
    }, [props.mobileMenuIsOpen])

    return (
        <div className={layoutClassName} onClick={closeMenuFunc}>
            <div className={contentClassName} onClick={(e) => e.stopPropagation()}>
                <button className={s.button_close} onClick={closeMenuFunc}>
                    <div/>
                    <div/>
                </button>
                {props.links && <BurgerMenuLinks links={props.links} closeMenuFunc={closeMenuFunc}/>}
                <BurgerMenuInfo info={props.info}/>
            </div>
        </div>
    );
};

export default BurgerMenu;