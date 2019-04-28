/**
 * ProjectTest
 * 项目测试
 */

import * as models from './models';

/**
 * 用户列表
 */
export interface UserListResponse {
    header: models.HeaderResponse;

    body?: models.UserListResponseBody;

    generic?: boolean;

}
