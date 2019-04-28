/**
 * ProjectTest
 * 项目测试
 */

import * as models from './models';

export interface DefaultResponse {
    /**
     * 常用头
     */
    header: models.HeaderResponse;

    /**
     * 是否后台生成代码使用泛型
     */
    generic?: boolean;

}
