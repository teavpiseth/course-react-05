import { message } from "antd";
import axios from "axios";

class BaseService {
  async _sendRequest(method, url, data, extraHeaders, extraConfig) {
    const requestOption = {
      method: method,
      url: url,
      data: data,
      headers: extraHeaders,
      ...extraConfig,
    };
    try {
      const response = await axios(requestOption);
      return response.data;
    } catch (error) {
      message.error(error.message, [1]);
    }
  }
  async get(url, data, extraHeaders, extraConfig) {
    return await this._sendRequest("GET", url, data, extraHeaders, extraConfig);
  }
  post(url, data, extraHeaders, extraConfig) {
    return this._sendRequest("POST", url, data, extraHeaders, extraConfig);
  }
  put(url, data, extraHeaders, extraConfig) {
    return this._sendRequest("PUT", url, data, extraHeaders, extraConfig);
  }
  delete(url, data, extraHeaders, extraConfig) {
    return this._sendRequest("DELETE", url, data, extraHeaders, extraConfig);
  }
}

const baseService = new BaseService();
export default baseService;
