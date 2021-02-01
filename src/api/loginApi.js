import * as baseService from '../common/service'

const loginApi = {
  //查询设备报警信息
  login: data => baseService.postForm('/login.shtml', data),
  //查询全局报警信息
  searchAlarmRecord: data => baseServer('/alarmRecord/findCount.shtml',data)

}
export default loginApi
