import { useState } from 'react'
import styles from './index.module.less'

const FrontFooter = () => {
  const [navList] = useState<FrontFooterType.INavItem[]>([
    {
      title: '帮助中心',
      children: [
        { label: '隐私声明', link: '/about#private' },
        { label: '退换货政策', link: '/about#private' },
        { label: '常见问题', link: '/about#private' },
      ],
    },
    {
      title: '配送服务',
      children: [
        { label: '配送中心', link: 'http:baidu.com' },
        { label: '打包流程', link: 'http:baidu.com' },
        { label: '发货流程', link: 'http:baidu.com' },
        { label: '快递查询', link: 'http:baidu.com' },
      ],
    },
    {
      title: '关于伊的家',
      children: [
        { label: '关于我们', link: 'http:baidu.com' },
        { label: '招贤纳士', link: 'http:baidu.com' },
        { label: '经销商查询', link: 'http:baidu.com' },
        { label: '伊的家社区', link: 'http:baidu.com' },
      ],
    },
  ])

  return (
    <div className={styles.front_footer}>
      <div className={styles.front_footer_inner}>
        <div className={styles.app_box}>
          <p className={styles.app_box_title}>伊的家APP</p>
          <span className={styles.app_box_desc}>精致女人 品质生活</span>
          <img
            className={styles.app_box_img}
            src="https://wx-static.ydjdev.com/yidejia/img/app_code1.png"
          />
        </div>

        <div className={styles.nav_wrapper}>
          {navList.map((d) => (
            <div className={styles.item} key={d.title}>
              <span className={styles.item_title}>{d.title}</span>
              {d.children?.map((c) => (
                <div key={c.label} className={styles.item_child_link}>
                  <a>{c.label}</a>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.service_box}>
          <div className={styles.service_box_title}>客服热线</div>
          <div className={styles.service_box_phone}>400-678-9193</div>
          <div className={styles.service_box_mail}>客服邮箱：market@yidejia.com</div>
        </div>
      </div>
    </div>
  )
}

export default FrontFooter
