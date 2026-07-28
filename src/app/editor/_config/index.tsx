import TimeAgo from 'javascript-time-ago';
import zh from 'javascript-time-ago/locale/zh';
import { isMac, isWindows } from '@/utils/env';

TimeAgo.addDefaultLocale(zh);

export const VERSION = '3.0.0';

export const BLOCK_PX = 30;

export const UI_SETTING = {
  topMenuHeight: 48,
  leftMenuWidth: 180,
  leftMenuWidthCollapsed: 48,
};

export const GITHUB_LINK =
  'https://github.com/kyzylsy/sim-empire-map-editor-v3';

export const WEB_LINK = 'https://www.simempire.fun';

export const IS_MAC = isMac();

export const IS_WINDOWS = isWindows();

export const TIME_AGO = new TimeAgo('zh');
