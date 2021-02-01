import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据
import Vue from 'vue';
import router from '@/router';
const pc = axios.create({
  timeout: 20000,
  baseURL: 'http://192.168.20.121:8090/boot_vue'
});
//HttpRequest拦截器
pc.interceptors.request.use(
  async (config) => {
    // 获取token
    // config.headers["token"] = `eyJhbGciOiJIUzI1NiJ9.eyJMT0dJTl9VU0VSX0tFWSI6ImE0ZjRiZDllLTJiMjMtNDhlNy04NjljLTFmYmM1M2VmMDdlZCJ9.I8LUW_TR0IhYSccCkopCqiwzLR4WTw2pDI1lIFxeBcM`
    return config
  },
  (err) => {

    return Promise.reject(err);
  }
);

//HttpResponse拦截器
pc.interceptors.response.use(
  (response) => {
    // console.log("执行了HttpResponse")
    if (response.data.code == 1 || (response.data.code == 500 && response.data.msg && response.data.msg == '身份验证失败')) {
      //假如用户登录过期，则提示用户登录对话框
      let msg = Vue.prototype;
      //假如用户登录过期，则提示用户登录对话框
      if (store.state.isTrue) {
        store.commit('SET_ISTRUE', false)
        msg.$alert('当前用户登录信息过期了，请重新登录', '温馨提示', {
          confirmButtonText: '确定',
          callback: action => {
            router.push("/");
          }
        });
      } else {
        return response;
      }
    }
    return response;
  },
  (error) => {
    return Promise.reject(error)
  }
);


/**
 * GET请求方式
 * @param {*} url
 * @param {*} params
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    // debugger
    pc.get(url, {
      params: params
    })
      .then(response => {
        if (response.data.code === 200 || response.data.code === 0) {
          //返回成功处理  这里传的啥 后续调用的时候 res就是啥
          resolve(response.data); //我们后台所有数据都是放在返回的data里所以这里统一处理了
        } else {
          //错误处理
          resolve(response.data);
        }
      })
      .catch(err => {
        reject(err);
        let message = '请求失败！请检查网络';
        //错误返回
        if (err.response) {
          message = err.response.data.message;
        }
        console.log(message);
      })
  })
}

/**提交JSON数据
 * @param url
 * @param data
 * @returns {Promise}
 */

export function postJSON(url, data = {}) {
  return new Promise((resolve, reject) => {
    pc.post(url, data)
      .then(response => {
        if (response.data.code === 200 || response.data.code === 0) {
          resolve(response.data);
        } else {
          resolve(response.data);
        }
      }, err => {
        reject(err);
        let message = '请求失败！请检查网络';
        if (err.response) {
          message = err.response.data.message;
        }
        console.log(message);
      })
  })
}

/**
 * 提交表单数据
 * @param {*} url
 * @param {*} data
 */
export function postForm(url, data = {}) {
  return new Promise((resolve, reject) => {
    pc({
      method: 'post',
      url: url,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }, // 请求头，发送FormData格式的数据，必须是 这种请求头。
      data: QS.stringify(data)
    }).then(response => {
      if (response.data.code === 200 || response.data.code === 0) {
        resolve(response.data);
      } else {
        resolve(response.data);
      }
    }, err => {
      reject(err);
      let message = '请求失败！请检查网络';
      if (err.response) {
        message = err.response.data.message;
      }
      console.log(message);
    })
  })
}