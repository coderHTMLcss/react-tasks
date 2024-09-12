import React, { FC, useState } from 'react';
import AccordionItem from '../AccordionItem';
import { FagItem } from '../../App';
import classes from './styles.module.scss'


interface Accordionprops {
  faqList: FagItem[];
}

const Accordion: FC<Accordionprops> = ({ faqList }): JSX.Element => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenId(index === openId ? null : index);
  }

  return (
    <ul className={classes.accordionList}>
      {faqList.length > 0 && faqList.map((fag, index) => {
        return <AccordionItem
          key={index}
          fag={fag}
          isOpen={openId === index}
          onClick={() => handleClick(index)}
        />
      })}
    </ul>
  )
}

export default Accordion
