/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdTabsProps } from './type';
const props: TdTabsProps = {
  /** 动画效果设置。其中 duration 表示动画时长 */
  animation: {
    type: Object,
  },
  /** 组件类名，分别用于设置 组件外层元素、选项卡单项、选项卡激活态、滚动条样式类名 等类名 */
  externalClasses: {
    type: Array,
  },
  /** 选项卡位置 */
  placement: {
    type: String,
    value: 'top',
  },
  /** 是否展示底部激活线条 */
  showBottomLine: {
    type: Boolean,
    value: true,
  },
  /** 是否可以滑动切换 */
  swipeable: {
    type: Boolean,
    value: true,
  },
  /** 激活的选项卡值 */
  value: {
    type: null,
    value: null,
  },
  /** 激活的选项卡值，非受控属性 */
  defaultValue: {
    type: null,
  },
  /** 是否开启粘性布局 */
  sticky: {
    type: Boolean,
    value: false,
  },
  /** sticky 属性 */
  stickyProps: {
    type: Object,
  },
};

export default props;
