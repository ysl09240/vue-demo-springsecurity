import * as baseService from '../common/service'

const loginApi = {
  //查询设备报警信息
  login: data => baseService.postForm('/login', data)
}
export default loginApi
