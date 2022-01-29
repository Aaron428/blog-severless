import { useState } from 'react'
import { Button, Layout, Menu } from 'antd'
import { UserOutlined, HomeOutlined, PlusOutlined } from '@ant-design/icons'
import { v4 } from 'uuid'
import style from './index.module.less'
const { Content, Sider } = Layout

const AdminHome = () => {
  const [settingItem, setSettingItem] = useState<AdminHomeType.ISettingItem[]>([
    { id: v4(), name: 'header' },
    { id: v4(), name: 'footer' },
  ])

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
          <Button type="primary" icon={<PlusOutlined />}>添加组件</Button>
          <div className={style.item_wrapper}>
            {settingItem.map((setting) => (
              <div className={style.item} key={setting.id}>
                {setting.name}
                <Button size="small" danger onClick={() => handleDel(setting.id)}>
                  删除
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default AdminHome
