import React, { FC, useRef } from 'react';
import { FagItem } from '../../App';
import { SlArrowDown } from "react-icons/sl";
import classes from './styles.module.scss'

interface AccordionItemProps {
    fag: FagItem;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: FC<AccordionItemProps> = ({ fag, isOpen, onClick }): JSX.Element => {
    const itemRef = useRef<HTMLDivElement>(null);
    return (
        <li className={classes.accordionItem}>
            <button onClick={onClick} className={classes.accordionHeader}>{fag.q}
                <SlArrowDown
                    className={`${classes.accordionArrow} ${isOpen ? classes.active : ''}`}
                />
            </button>
            <div className={classes.accordionCollapse} style={{
                height: isOpen && itemRef.current ? `${itemRef.current.scrollHeight}px` : "0px"
            }}>
                <div ref={itemRef} className={classes.accordionBody}>
                    {fag.a}
                </div>
            </div>
        </li>
    )
}

export default AccordionItem
