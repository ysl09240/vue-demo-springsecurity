import * as baseService from '../common/service'

const homeApi = {
  //查询菜单
  getMenutTree: () => baseService.get('/menu/getMenuTree')
}
export default homeApi
