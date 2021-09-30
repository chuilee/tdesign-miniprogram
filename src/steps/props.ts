/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-09-30 11:12:44
 * */

import { TdStepsProps } from './type';
const props: TdStepsProps = {
  /** 当前步骤 */
  current: {
    type: String,
    optionalTypes: [Number],
  },
  /** 步骤条方向，有两种：横向和纵向 */
  direction: {
    type: String,
    value: 'horizontal',
  },
  /** 组件类名，用于设置组件外层元素元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 是否只读 */
  readonly: {
    type: Boolean,
    value: false,
  },
  /** 步骤条风格 */
  theme: {
    type: String,
    value: 'default',
  },
};

export default props;
