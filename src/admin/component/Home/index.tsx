import { useState } from 'react'
// component
import { Button, Drawer, Layout, Menu } from 'antd'
import { UserOutlined, HomeOutlined, PlusOutlined } from '@ant-design/icons'

// custom components
import AdminFooter from '../AdminFooter'
import AdminHeader from '../AdminHeader'
import AdminGoodsService from '../AdminGoodsService'

// styles and tools
import style from './index.module.less'
import { v4 } from 'uuid'
import { TYPE_MAP } from '@utils/constants'

const { Content, Sider } = Layout

/**
 * 后台管理 - 配置中心
 */
const AdminHome = () => {
  const [visible, setVisible] = useState(false)
  const [activeType, setActiveType] = useState<UtilType.TypeString>(null)
  const [settingItem, setSettingItem] = useState<AdminHomeType.ISettingItem[]>([
    { id: v4(), name: '底部' },
    { id: v4(), name: '头部导航' },
    { id: v4(), name: '商品服务' },
  ])

  // 关闭右侧弹窗
  const onClose = () => {
    setVisible(false)
  }

  // 匹配不同的组件
  const handleDrawerComponent = () => {
    
    switch (activeType) {
      case TYPE_MAP.Header:
        return <AdminHeader />
      case TYPE_MAP.Footer:
        return <AdminFooter />
      case TYPE_MAP.GoodsService:
        return <AdminGoodsService />
      default:
        return null
    }
  }

  // 返回首页
  const backHome = () => (window.location.href = '/')

  // 删除
  const handleDel = (id: string) => {
    const newSettingItem = [...settingItem]
    const idx = settingItem.findIndex((s) => s.id === id)
    if (idx > -1) {
      newSettingItem.splice(idx, 1)
    }
    setSettingItem(newSettingItem)
  }

  // 编辑
  const handleEdit = (id: string) => {
    const target = settingItem.findIndex((d) => d.id === id)
    setActiveType(settingItem[target].name)
    setVisible(true)
  }

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ backgroundColor: '#fff', height: '100vh' }}
      >
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            配置中心
          </Menu.Item>
          <Menu.Item key="2" icon={<HomeOutlined />} onClick={backHome}>
            返回官网首页
          </Menu.Item>
        </Menu>
      </Sider>

      <Content style={{ margin: '24px 16px 0', backgroundColor: '#fff' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <div className={style.btn_box}>
            <Button type="primary" icon={<PlusOutlined />}>
              添加组件
            </Button>
          </div>
          <div className={style.item_wrapper}>
            {settingItem.map((setting) => (
              <div className={style.item} key={setting.id}>
                {setting.name}
                <div className={style.operate_box}>
                  <Button size="small" onClick={() => handleEdit(setting.id)}>
                    编辑
                  </Button>
                  <Button size="small" danger onClick={() => handleDel(setting.id)}>
                    删除
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Drawer title="Basic Drawer" width={600} placement="right" onClose={onClose} visible={visible}>
            {handleDrawerComponent()}
          </Drawer>
        </div>
      </Content>
    </Layout>
  )
}

export default AdminHome
