import { useScrollY } from "../../hooks/useScrollY";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

import styles from './Up.module.css';

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      className={ styles.up }
      initial={{opacity: 0}}
    >
      <ButtonIcon onClick={ scrollToTop } appearance="primary" icon="up" />
    </motion.div>
  );
};