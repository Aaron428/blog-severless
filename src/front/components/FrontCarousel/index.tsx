import { Carousel } from 'antd'
import { useState } from 'react'
import { v4 } from 'uuid'

const FrontCarousel = () => {
  const [images] = useState<FrontCarouselType.CarouselType[]>([
    {
      id: v4(),
      src: 'https://wx-static.ydjdev.com/resource-1634606201176-2058.png',
    },
    {
      id: v4(),
      src: 'https://wx-static.ydjdev.com/resource-1640231180400-33165.jpg',
    },
    {
      id: v4(),
      src: 'https://wx-static.ydjdev.com/resource-1642122936912-60403.jpg',
    },
  ])

  return (
    <Carousel autoplay>
      {images.map((img) => (
        <img key={img.id} src={img.src} alt={img.alt} />
      ))}
    </Carousel>
  )
}

export default FrontCarousel
