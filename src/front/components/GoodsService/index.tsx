import { useState } from 'react'
import styles from './index.module.less'

const GoodsService = () => {
  const [services] = useState<GoodsServiceType.IServiceItem[]>([
    {
      imgSrc: 'https://blog-serverless-static.oss-cn-guangzhou.aliyuncs.com/images/1.png',
      title: '正品保障',
      desc: '正品授权 假一赔十',
    },

    {
      imgSrc: 'https://blog-serverless-static.oss-cn-guangzhou.aliyuncs.com/images/1%20%281%29.png',
      title: '七天无理由退换',
      desc: '（未拆封）',
    },
    {
      imgSrc: 'https://blog-serverless-static.oss-cn-guangzhou.aliyuncs.com/images/1%20%282%29.png',
      title: '免运费',
      desc: '偏远地区满299元',
    },
    {
      imgSrc: 'https://blog-serverless-static.oss-cn-guangzhou.aliyuncs.com/images/1%20%283%29.png',
      title: '实物拍摄',
      desc: '实物拍 购买放心',
    },
    {
      imgSrc: 'https://blog-serverless-static.oss-cn-guangzhou.aliyuncs.com/images/1%20%284%29.png',
      title: '闪电发货',
      desc: '八大配送 速配到家',
    },
  ])
  return (
    <div className={styles.page}>
      <div className={styles.goods_service}>
        <span className={styles.goods_service_title}>商品服务</span>
        <span className={styles.goods_service_desc}>高效跟进 贴心服务</span>
      </div>

      <div className={styles.service_box}>
        {services.map((service) => (
          <div key={service.title} className={styles.service_box_item}>
            <img src={service.imgSrc} alt="icon" />
            <span className={styles.service_box_item_title}>
              {service.title}
              <span className={styles.service_box_item_desc}>{service.desc}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GoodsService
