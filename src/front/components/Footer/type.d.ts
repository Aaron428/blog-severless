declare namespace FrontFooterType {
  interface INavItem {
    title: string
    children?: {
      label: string
      link: string
    }[]
  }
}