import React, { useState, ReactNode } from "react";
import styles from "./Tabs.module.css";

interface TabProps {
  label: string;
  children: ReactNode;
}

const Tab: React.FC<TabProps> = ({ children }) => {
  return <div className={styles.tabContent}>{children}</div>;
};

interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0]?.props.label);

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabList}>
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${styles.tabButton} ${
              activeTab === child.props.label ? styles.active : ""
            }`}
            onClick={() => setActiveTab(child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className={styles.tabPanel}>
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return child;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export { Tabs, Tab };
