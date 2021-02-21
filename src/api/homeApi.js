import * as baseService from '../common/service'

const homeApi = {
  //查询菜单
  getMenutTree: () => baseService.postJSON('/menu/getMenuTree')
}
export default homeApi
