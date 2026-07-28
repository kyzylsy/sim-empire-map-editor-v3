import React, { FC } from 'react';
import { Message } from '@arco-design/web-react';
import classcat from 'classcat';
import copy from 'copy-to-clipboard';
import { shallow } from 'zustand/shallow';
import { BLOCK_PX, GITHUB_LINK, VERSION, WEB_LINK } from '../../_config';
import { CivilTypeLabel } from '../../_map-core/type';
import { useMapConfig } from '../../_store/map-config';
import styles from './index.module.css';
import { MINI_MAP_RATIO } from '../mini-map';

interface CopyrightProps {
  isInteractLayer?: boolean;
  isMiniMap?: boolean;
}

const Copyright: FC<CopyrightProps> = props => {
  const { isInteractLayer, isMiniMap } = props;

  const [civil, mapType, noTree] = useMapConfig(
    state => [state.civil, state.mapType, state.noTree],
    shallow,
  );

  return (
    <div
      id={isInteractLayer || isMiniMap ? undefined : 'copyright'}
      className={classcat({
        [styles.container]: true,
        [styles['interact-layer']]: isInteractLayer,
        [styles['mini-map']]: isMiniMap,
      })}
      style={{
        transform: isMiniMap
          ? `scale(${MINI_MAP_RATIO / BLOCK_PX})`
          : undefined,
      }}>
      <div className={styles.title}>
        <span className={styles.civil}>{CivilTypeLabel[civil]}</span>
        <span className={styles['map-type']}>{mapType}木</span>
        <span className={styles['no-tree']}>{noTree ? '无木' : '有木'}</span>
        <span className={styles['map-layout']}>地图布局</span>
      </div>
      <div className={styles.author}>
        <span>From the Map Editor</span>
        <strong>V{VERSION}</strong>
        <span>Implemented by</span>
        <strong>Glutamine525</strong>
      </div>
      <div className={styles.author}>
        <span>Maintenance‌ by</span>
        <strong>LSteven</strong>
      </div>
      <div className={styles['web-link']}>
        <div>
          <span>Github:</span>
          <strong
            onClick={() => {
              window.open(GITHUB_LINK);
            }}>
            kyzylsy/sim-empire-map-editor-v3
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
