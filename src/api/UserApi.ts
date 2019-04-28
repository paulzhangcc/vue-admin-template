/**
 * ProjectTest
 * 项目测试
 */

import * as models from '../model/models';
import axios from '../utils/request';
import {AxiosPromise, AxiosRequestConfig} from "axios";
export class UserApi {

  /**
   * 删除用户描述
   * @summary user-删除用户
   * @param userId 
   * @param sessionId 
   */
  public delete(userId: string, sessionId: string): AxiosPromise<models.DefaultResponse> {
    let localVarPath = '/user/{userId}'.replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    let queryParameters: any = {};
    let headerParams: any = {};
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new Error('Required parameter userId was null or undefined when calling _delete.');
    }
    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new Error('Required parameter sessionId was null or undefined when calling _delete.');
    }

    headerParams['sessionId'] = String(sessionId);

    let data = null;
    let method = 'DELETE'.toLowerCase();
    let axiosRequestConfig: AxiosRequestConfig = {
      url: localVarPath,
      method: method,
      headers: headerParams,
      params: queryParameters,
      data: data,
    };
    return axios.request<models.DefaultResponse>(axiosRequestConfig);
  }

  /**
   * 添加用户描述
   * @summary user-添加用户
   * @param sessionId 登录凭证
   * @param user 
   */
  public add(sessionId: string, user?: models.User): AxiosPromise<models.DefaultResponse> {
    let localVarPath = '/user';
    let queryParameters: any = {};
    let headerParams: any = {};
    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new Error('Required parameter sessionId was null or undefined when calling add.');
    }

    headerParams['sessionId'] = String(sessionId);

    headerParams['Content-Type'] = 'application/json';
    let data = null;
    data = JSON.stringify(user);
    let method = 'POST'.toLowerCase();
    let axiosRequestConfig: AxiosRequestConfig = {
      url: localVarPath,
      method: method,
      headers: headerParams,
      params: queryParameters,
      data: data,
    };
    return axios.request<models.DefaultResponse>(axiosRequestConfig);
  }

  /**
   * 查询用户列表描述
   * @summary user-查询用户列表
   * @param sessionId 登录凭证
   * @param pageSize 
   * @param pageNo 
   */
  public list(sessionId: string, pageSize: string, pageNo: string): AxiosPromise<models.UserListResponse> {
    let localVarPath = '/user';
    let queryParameters: any = {};
    let headerParams: any = {};
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
      queryParameters['pageSize'] = <string><any>pageSize;
    }
    if (pageNo !== null && pageNo !== undefined) {
      queryParameters['pageNo'] = <string><any>pageNo;
    }
    headerParams['sessionId'] = String(sessionId);

    let data = null;
    let method = 'GET'.toLowerCase();
    let axiosRequestConfig: AxiosRequestConfig = {
      url: localVarPath,
      method: method,
      headers: headerParams,
      params: queryParameters,
      data: data,
    };
    return axios.request<models.UserListResponse>(axiosRequestConfig);
  }

  /**
   * 用户查询描述
   * @summary user-查询用户
   * @param sessionId 登录凭证
   * @param userId 
   */
  public select(sessionId: string, userId: string): AxiosPromise<models.UserResponse> {
    let localVarPath = '/user/{userId}'.replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    let queryParameters: any = {};
    let headerParams: any = {};
    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new Error('Required parameter sessionId was null or undefined when calling select.');
    }
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new Error('Required parameter userId was null or undefined when calling select.');
    }

    headerParams['sessionId'] = String(sessionId);

    let data = null;
    let method = 'GET'.toLowerCase();
    let axiosRequestConfig: AxiosRequestConfig = {
      url: localVarPath,
      method: method,
      headers: headerParams,
      params: queryParameters,
      data: data,
    };
    return axios.request<models.UserResponse>(axiosRequestConfig);
  }

  /**
   * 修改用户
   * @summary user-修改用户
   * @param sessionId 登录凭证
   * @param userId 
   * @param username 
   */
  public update(sessionId: string, userId: string, username: string): AxiosPromise<models.DefaultResponse> {
    let localVarPath = '/user/{userId}'.replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
    let queryParameters: any = {};
    let headerParams: any = {};
    let formParams = new FormData();
    let reqHasFile = false;
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
      formParams.append('username', <any>username);
    }
    headerParams['sessionId'] = String(sessionId);

    if (!reqHasFile) {
      headerParams['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    let data = null;
    data = formParams;
    let method = 'PUT'.toLowerCase();
    let axiosRequestConfig: AxiosRequestConfig = {
      url: localVarPath,
      method: method,
      headers: headerParams,
      params: queryParameters,
      data: data,
    };
    return axios.request<models.DefaultResponse>(axiosRequestConfig);
  }

  /**
   * 上传logo
   * @summary user-上传logo
   * @param userId 
   * @param file 
   */
  public upload(userId: number, file: any): AxiosPromise<models.DefaultResponse> {
    let localVarPath = '/user/upload';
    let queryParameters: any = {};
    let headerParams: any = {};
    let formParams = new FormData();
    let reqHasFile = false;
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new Error('Required parameter userId was null or undefined when calling upload.');
    }
    // verify required parameter 'file' is not null or undefined
    if (file === null || file === undefined) {
      throw new Error('Required parameter file was null or undefined when calling upload.');
    }

    if (userId !== null && userId !== undefined) {
      formParams.append('userId', <any>userId);
    }
    reqHasFile = true;
    formParams.append("file", file);

    if (!reqHasFile) {
      headerParams['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    let data = null;
    data = formParams;
    let method = 'POST'.toLowerCase();
    let axiosRequestConfig: AxiosRequestConfig = {
      url: localVarPath,
      method: method,
      headers: headerParams,
      params: queryParameters,
      data: data,
    };
    return axios.request<models.DefaultResponse>(axiosRequestConfig);
  }

  protected COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
  }
}
export default new UserApi();