import localFont from 'next/font/local'

const pretendard = localFont({
  src: [
    {
      path: '../../../public/assets/fonts/pretendard/Pretendard-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/pretendard/Pretendard-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/pretendard/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/pretendard/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/pretendard/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/pretendard/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/pretendard/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/pretendard/Pretendard-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/pretendard/Pretendard-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display : "swap", // 웹 폰트를 사용할 때 폰트 로드될 때까지 기본 폰트
  variable : "--font-pretendard"
})

const dahyun = localFont({
  src: '../../../public/assets/fonts/dahyun/dahyun.ttf',
  style: 'normal',
  display : "swap", 
  variable : "--font-dahyun",
})


export { pretendard, dahyun }