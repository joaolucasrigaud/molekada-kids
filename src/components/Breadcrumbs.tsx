import React from "react";
import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumbs}>
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {index < items.length - 1 ? (
              <Link href={item.path}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className={styles.separator}>/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
