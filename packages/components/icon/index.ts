// 整合组件
import _Icon from "./src/icon.vue";
import {withInstall} from '@liu-peng/utils/with-install'


const Icon = withInstall(_Icon);


export default Icon;
export * from "./src/icon";


declare module 'vue'{
    export interface GlobalComponents {
        ZIcon:typeof Icon
    }
}