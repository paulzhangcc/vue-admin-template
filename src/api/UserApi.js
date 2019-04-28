"use strict";
/**
 * ProjectTest
 * 项目测试
 */
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../utils/request");
var UserApi = (function () {
    function UserApi() {
        this.COLLECTION_FORMATS = {
            'csv': ',',
            'tsv': '   ',
            'ssv': ' ',
            'pipes': '|'
        };
    }
    /**
     * 删除用户描述
     * @summary user-删除用户
     * @param userId
     * @param sessionId
     */
    UserApi.prototype.delete = function (userId, sessionId) {
        var localVarPath = '/user/{userId}'.replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = {};
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling _delete.');
        }
        // verify required parameter 'sessionId' is not null or undefined
        if (sessionId === null || sessionId === undefined) {
            throw new Error('Required parameter sessionId was null or undefined when calling _delete.');
        }
        headerParams['sessionId'] = String(sessionId);
        var data = null;
        var method = 'DELETE'.toLowerCase();
        var axiosRequestConfig = {
            url: localVarPath,
            method: method,
            headers: headerParams,
            params: queryParameters,
            data: data,
        };
        return request_1.default.request(axiosRequestConfig);
    };
    /**
     * 添加用户描述
     * @summary user-添加用户
     * @param sessionId 登录凭证
     * @param user
     */
    UserApi.prototype.add = function (sessionId, user) {
        var localVarPath = '/user';
        var queryParameters = {};
        var headerParams = {};
        // verify required parameter 'sessionId' is not null or undefined
        if (sessionId === null || sessionId === undefined) {
            throw new Error('Required parameter sessionId was null or undefined when calling add.');
        }
        headerParams['sessionId'] = String(sessionId);
        headerParams['Content-Type'] = 'application/json';
        var data = null;
        data = JSON.stringify(user);
        var method = 'POST'.toLowerCase();
        var axiosRequestConfig = {
            url: localVarPath,
            method: method,
            headers: headerParams,
            params: queryParameters,
            data: data,
        };
        return request_1.default.request(axiosRequestConfig);
    };
    /**
     * 查询用户列表描述
     * @summary user-查询用户列表
     * @param sessionId 登录凭证
     * @param pageSize
     * @param pageNo
     */
    UserApi.prototype.list = function (sessionId, pageSize, pageNo) {
        var localVarPath = '/user';
        var queryParameters = {};
        var headerParams = {};
        // verify required parameter 'sessionId' is not null or undefined
        if (sessionId === null || sessionId === undefined) {
            throw new Error('Required parameter sessionId was null or undefined when calling list.');
        }
        // verify required parameter 'pageSize' is not null or undefined
        if (pageSize === null || pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling list.');
        }
        // verify required parameter 'pageNo' is not null or undefined
        if (pageNo === null || pageNo === undefined) {
            throw new Error('Required parameter pageNo was null or undefined when calling list.');
        }
        if (pageSize !== null && pageSize !== undefined) {
            queryParameters['pageSize'] = pageSize;
        }
        if (pageNo !== null && pageNo !== undefined) {
            queryParameters['pageNo'] = pageNo;
        }
        headerParams['sessionId'] = String(sessionId);
        var data = null;
        var method = 'GET'.toLowerCase();
        var axiosRequestConfig = {
            url: localVarPath,
            method: method,
            headers: headerParams,
            params: queryParameters,
            data: data,
        };
        return request_1.default.request(axiosRequestConfig);
    };
    /**
     * 用户查询描述
     * @summary user-查询用户
     * @param sessionId 登录凭证
     * @param userId
     */
    UserApi.prototype.select = function (sessionId, userId) {
        var localVarPath = '/user/{userId}'.replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = {};
        // verify required parameter 'sessionId' is not null or undefined
        if (sessionId === null || sessionId === undefined) {
            throw new Error('Required parameter sessionId was null or undefined when calling select.');
        }
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling select.');
        }
        headerParams['sessionId'] = String(sessionId);
        var data = null;
        var method = 'GET'.toLowerCase();
        var axiosRequestConfig = {
            url: localVarPath,
            method: method,
            headers: headerParams,
            params: queryParameters,
            data: data,
        };
        return request_1.default.request(axiosRequestConfig);
    };
    /**
     * 修改用户
     * @summary user-修改用户
     * @param sessionId 登录凭证
     * @param userId
     * @param username
     */
    UserApi.prototype.update = function (sessionId, userId, username) {
        var localVarPath = '/user/{userId}'.replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = {};
        var formParams = new FormData();
        var reqHasFile = false;
        // verify required parameter 'sessionId' is not null or undefined
        if (sessionId === null || sessionId === undefined) {
            throw new Error('Required parameter sessionId was null or undefined when calling update.');
        }
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling update.');
        }
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling update.');
        }
        if (username !== null && username !== undefined) {
            formParams.append('username', username);
        }
        headerParams['sessionId'] = String(sessionId);
        if (!reqHasFile) {
            headerParams['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        var data = null;
        data = formParams;
        var method = 'PUT'.toLowerCase();
        var axiosRequestConfig = {
            url: localVarPath,
            method: method,
            headers: headerParams,
            params: queryParameters,
            data: data,
        };
        return request_1.default.request(axiosRequestConfig);
    };
    /**
     * 上传logo
     * @summary user-上传logo
     * @param userId
     * @param file
     */
    UserApi.prototype.upload = function (userId, file) {
        var localVarPath = '/user/upload';
        var queryParameters = {};
        var headerParams = {};
        var formParams = new FormData();
        var reqHasFile = false;
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling upload.');
        }
        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling upload.');
        }
        if (userId !== null && userId !== undefined) {
            formParams.append('userId', userId);
        }
        reqHasFile = true;
        formParams.append("file", file);
        if (!reqHasFile) {
            headerParams['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        var data = null;
        data = formParams;
        var method = 'POST'.toLowerCase();
        var axiosRequestConfig = {
            url: localVarPath,
            method: method,
            headers: headerParams,
            params: queryParameters,
            data: data,
        };
        return request_1.default.request(axiosRequestConfig);
    };
    return UserApi;
}());
exports.UserApi = UserApi;
exports.default = new UserApi();
