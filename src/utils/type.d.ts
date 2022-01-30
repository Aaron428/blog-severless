declare namespace UtilType {

  type TypeString = '商品服务' | '头部导航' | '底部' | null

  interface ITypeMap {
    GoodsService: TypeString
    Header: TypeString
    Footer: TypeString
  }
}