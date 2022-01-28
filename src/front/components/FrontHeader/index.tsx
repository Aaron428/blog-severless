import { useState } from 'react'
import 'normalize.css'
import styles from './index.module.less'

const FrontHeader = () => {
  const [activeCate, setActiveCate] = useState('0')
  const [cateList, setCateList] = useState<FrontHeaderType.ICateItem[]>([
    { label: '首页', value: '0' },
    { label: '精致护理', value: '1' },
    { label: '营养健康', value: '2' },
    { label: '魅力彩妆', value: '3' },
    { label: '时尚服装', value: '4' },
    { label: '关于品牌', value: '5' },
    { label: '会员权益', value: '6' },
    { label: '社会责任', value: '7' },
    { label: 'APP下载', value: '8' },
  ])
  return (
    <div className={styles.front_header}>
      <img
        className={styles.front_header_img}
        src="https://blog-serverless-static.oss-cn-guangzhou.aliyuncs.com/images/resource-1643250257391-60444.jpeg"
        alt="notice image"
      />

      <div className={styles.cate_box}>
        <ul>
          {cateList.map((cate) => (
            <li key={cate.value} onClick={() => setActiveCate(cate.value)}>
              <span className={activeCate === cate.value ? styles.active_item : ''}>
                {cate.label}
              </span>
            </li>
          ))}
        </ul>

        <input type="text" placeholder='搜索你想要世界' />
      </div>
    </div>
  )
}

export default FrontHeader
