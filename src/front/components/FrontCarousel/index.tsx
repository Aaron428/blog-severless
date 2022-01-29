import { Carousel } from 'antd'
import { useState } from 'react'
import { v4 } from 'uuid'
import styles from './index.module.less'

const FrontCarousel = () => {
  const [images] = useState<FrontCarouselType.CarouselType[]>([
    {
      id: v4(),
      src: 'https://wx-static.ydjdev.com/resource-1634606201176-2058.png',
      link: 'http://baidu.com',
    },
    {
      id: v4(),
      src: 'https://wx-static.ydjdev.com/resource-1640231180400-33165.jpg',
      link: 'http: //baidu.com',
    },
    {
      id: v4(),
      src: 'https://wx-static.ydjdev.com/resource-1642122936912-60403.jpg',
    },
  ])


  const handleLinkNav = (path: string | undefined) => {
    if (path) {
      window.location.href = path
    }
  }

  return (
    <Carousel autoplay>
      {images.map((img) => (
        <img
          key={img.id}
          src={img.src}
          alt={img.alt}
          className={img.link ? styles.link : ''}
          onClick={() => handleLinkNav(img.link)}
        />
      ))}
    </Carousel>
  )
}

export default FrontCarousel
