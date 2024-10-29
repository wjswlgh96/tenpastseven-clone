"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./header.module.css";
import Link from "next/link";

import CustomSVG from "../SVG";
import { HEADER_CATEGORIES, HEADER_ICON } from "@/constants/header";

export default function Header() {
  const { scrollY } = useScroll();

  const headerHeight = useTransform(scrollY, [0, 50], [150, 120]);
  const topAndHeight = useTransform(scrollY, [0, 50], [30, 0]);

  return (
    <motion.header className={styles.header} style={{ height: headerHeight }}>
      <motion.div className={styles.banner} style={{ height: topAndHeight }}>
        Join and get -5% OFF
      </motion.div>
      <motion.div className={styles.wrapper} style={{ top: topAndHeight }}>
        <nav>
          <ul className={styles.nav_ul}>
            {HEADER_CATEGORIES.map((category) => (
              <motion.li key={category.name} whileHover={{ opacity: 0.6 }}>
                {category.path ? (
                  <Link href={category.path}>{category.name}</Link>
                ) : (
                  <div className={styles.none_link_item}>{category.name}</div>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.div
          className={styles.logo_wrapper}
          whileHover={{ opacity: 0.6 }}
        >
          <Link href={"/"}>
            <CustomSVG name={"logo"} style={{ width: "100%", height: "30%" }} />
          </Link>
        </motion.div>
        <div>
          <ul className={styles.icon_ul}>
            {HEADER_ICON.map((icon) => (
              <motion.li key={icon.icon} whileHover={{ opacity: 0.6 }}>
                <Link href={icon.path}>
                  <CustomSVG name={icon.icon} />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.header>
  );
}
