/**
 * ProjectTest
 * 项目测试
 */

import * as models from './models';

export interface UserListResponseBody {
    pageSize?: number;

    pageNo?: number;

    data?: Array<models.User>;

    /**
     * 总数
     */
    pageCount?: number;

}
