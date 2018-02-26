import clothes1 from '@/assets/clothes1.jpg'
import clothes2 from '@/assets/clothes2.jpg'
import clothes3 from '@/assets/clothes3.jpg'
import clothes4 from '@/assets/clothes4.jpg'
import book1 from '@/assets/book1.jpg'
import book2 from '@/assets/book2.jpg'
import book3 from '@/assets/book3.jpg'
import book4 from '@/assets/book4.jpg'
import electronic1 from '@/assets/electronic1.jpg'
import electronic2 from '@/assets/electronic2.jpg'
import electronic3 from '@/assets/electronic3.jpg'

const clothes = [
  {
    id: 'clothes-1',
    name: '中长款羽绒服男 新品加厚保暖男士羽绒服修身连帽衣服男外套羽绒服 卡其色 L',
    brand: '鼎的（Dingdi）',
    image: clothes1,
    sales: 12000,
    cost: 298,
    color: '金色',
    classification: '男装',
    key: 0
  },
  {
    id: 'clothes-2',
    name: '青春韵 短款轻薄羽绒服男 男士休闲商务保暖羽绒外套欧美风格男装 黑色 L',
    brand: '青春韵',
    image: clothes2,
    sales: 118500,
    cost: 365,
    color: '黑色',
    classification: '男装',
    key: 0
  },
  {
    id: 'clothes-3',
    name: '原创女装春季2018新款欧美连帽卫衣裙中长款宽松长袖连衣裙女 黑色 M',
    brand: 'SIBYL OF NO.17',
    image: clothes3,
    sales: 100500,
    cost: 178,
    color: '黑色',
    classification: '女装',
    key: 0
  },
  {
    id: 'clothes-4',
    name: '花花公子13大童男装冬季外套12男孩15岁男童加绒加厚开衫连帽卫衣秋冬上衣潮运动外套 灰色 M',
    brand: '花花公子（PLAYBOY）',
    image: clothes4,
    sales: 80500,
    cost: 99,
    color: '灰色',
    classification: '童装',
    key: 0
  }
]

const book = [
  {
    id: 'book-1',
    name: '解忧杂货店',
    image: book1,
    sales: 11850,
    cost: 27.5,
    author: '东野圭吾',
    country: '日本',
    classification: '文学',
    key: 1
  },
  {
    id: 'book-2',
    name: '追风筝的人',
    image: book2,
    sales: 11000,
    cost: 17.7,
    author: '卡勒德·胡赛尼',
    country: '英国',
    classification: '文学',
    key: 1
  },
  {
    id: 'book-3',
    name: '真相：若泽·穆里尼奥传',
    image: book3,
    sales: 15000,
    cost: 43.7,
    author: '罗伯特·比斯利',
    country: '英国',
    classification: '传记',
    key: 1
  },
  {
    id: 'book-4',
    name: '三国演义',
    image: book4,
    sales: 15000,
    cost: 24.50,
    author: '罗贯中',
    country: '中国',
    classification: '小说',
    key: 1
  }

]

const electronic = [
  {
    id: 'electronic-1',
    name: '【原厂延保版】Apple iPhone X (A1865) 256GB 深空灰色 移动联通电信4G手机',
    brand: 'Apple',
    image: electronic1,
    sales: 5000,
    cost: 11367,
    classification: '手机',
    key: 2
  },
  {
    id: 'electronic-2',
    name: '小米6 全网通 6GB+128GB 陶瓷黑尊享版 移动联通电信4G手机 双卡双待',
    brand: '小米',
    image: electronic2,
    sales: 6000,
    cost: 2999,
    classification: '手机',
    key: 2
  },
  {
    id: 'electronic-3',
    name: '联想(Lenovo)拯救者R720 15.6英寸大屏游戏笔记本电脑(i5-7300HQ 8G 1T+128G SSD GTX1050Ti 4G IPS 黑金)',
    brand: '联想',
    image: electronic3,
    sales: 2000,
    cost: 6399,
    classification: '笔记本',
    key: 2
  },

]

// export default [
//   // clothes,
//   // book,
//   // electronic
//
// ]

export default [
  clothes,
  book,
  electronic
]
