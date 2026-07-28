import React from 'react';
import { Layout, Tooltip } from '@arco-design/web-react';
import { UI_SETTING, VERSION } from '@/app/editor/_config';
import TopMenuButton from '../top-menu-button';
import TopMenuController from '../top-menu-controller';
import TopMenuCounter from '../top-menu-counter';
import TopMenuOperation from '../top-menu-operation';
import styles from './index.module.css';

const Header = Layout.Header;

const TopMenu = () => {
  console.log('TopMenu render');

  return (
    <Header
      className={styles.container}
      style={{
        height: UI_SETTING.topMenuHeight,
      }}
    >
      <Tooltip content={`v${VERSION}`}>
        <div className={styles['title-wrap']}>
          <div className={styles.title}>模拟帝国布局图编辑器</div>
          <div className={styles.subtitle}>新版本维护by LSteven</div>
        </div>
      </Tooltip>
      <TopMenuController />
      <TopMenuOperation />
      <TopMenuCounter />
      <TopMenuButton />
    </Header>
  );
};

export default TopMenu;
