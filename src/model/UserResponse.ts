/**
 * ProjectTest
 * 项目测试
 */

import * as models from './models';

/**
 * 用户响应
 */
export interface UserResponse {
    header?: models.HeaderResponse;

    body?: models.User;

    generic?: boolean;

}
