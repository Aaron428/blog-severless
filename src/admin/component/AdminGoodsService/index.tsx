import { Button, Form, Input } from 'antd'
import style from './index.module.less'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
}

const AdminGoodsService = ({ handleClose }: AdminGoodsServiceType.IProps) => {
  const onFinish = () => {}

  return (
    <Form {...layout} name="admin-goods-service" onFinish={onFinish}>
      <Form.Item name="" label="显示名称" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="" label="描述" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <div className={style.operate_box}>
        <Button onClick={handleClose}>取消</Button>
        <Button type="primary">保存</Button>
      </div>
    </Form>
  )
}

export default AdminGoodsService
