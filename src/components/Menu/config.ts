export interface MenuItem {
  label: string
  href: string
}

const MenuItemList: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Exchange',
    href: '/swap',
  },
  {
    label: 'Liquidity',
    href: '/#/pool',
  },
  {
    label: 'Farms',
    href: '/farms',
  },
  {
    label: 'Pools',
    href: '/pools',
  },
  {
    label: 'Info',
    href: '/info',
  },
]

export default MenuItemList
