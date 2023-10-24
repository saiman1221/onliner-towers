import React from 'react';
import s from './Description-card.module.scss';

import {IStairsPageDescriptionData} from "@/types/types";
import Table from "@/components/Table/Table";
import Image from "next/image";
import classNames from "classnames";

const DescriptionCard = (props: {cardData: IStairsPageDescriptionData, reverseRow: boolean}) => {
    const listRender = (listData: string[]) => {
        return listData.map((el, id) => <li className={s.item} key={id}>{el}</li>)
    }

    const tableClassName = classNames([s.table as string], {
        [s.row_reverse as string]: props.reverseRow
    })

    return (
        <div className={s.card}>
            <div className={s.title_part}>
                <h2 className={s.title}>{props.cardData.title}</h2><div className={s.title_line}/>
            </div>

            <ul className={s.list}>
                {listRender(props.cardData.description)}
            </ul>
            <h3 className={s.specifications_title}>Технические характеристики</h3>
            <div className={tableClassName}>
                <Image src={props.cardData.image} alt={'Изображение лестницы'}/>
                <Table tableData={props.cardData.table}/>
            </div>
        </div>
    );
};

export default DescriptionCard;