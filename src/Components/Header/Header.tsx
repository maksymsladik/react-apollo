import React from "react";
import { NavLink, Link } from "react-router-dom";

import { urls } from "../../utils/constants";

import styles from "./HeaderStyles.module.scss";

export const Header: React.FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.row}>
          <Link to={urls.base} className={styles.logo}>
            <img
              src="https://darly.solutions/wp-content/uploads/2019/11/logo.svg"
              alt=""
            />
          </Link>
          <nav className={styles.navigation}>
            <NavLink
              exact
              to={urls.base}
              className={styles.link}
              activeClassName={styles.active_link}
            >
              Home
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
