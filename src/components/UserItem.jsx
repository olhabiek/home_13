import React from "react";
import styles from "../styles/UserItem.module.css";
import PropTypes from "prop-types";

function UserItem({ name }) {
  return <div className={styles.item}>{name}</div>;
}

UserItem.propTypes = {
  name: PropTypes.string,
};

export default UserItem;
