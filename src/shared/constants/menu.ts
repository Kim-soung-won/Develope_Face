import { RadioButtonChecked as RadioButtonCheckedIcon } from '@mui/icons-material'

export const pathKeys = {
  root: '/',
  Components: {
    root() {
      return pathKeys.root.concat('components')
    },
    Mui: {
      root() {
        return pathKeys.Components.root().concat('/mui')
      },
      Button() {
        return pathKeys.Components.Mui.root().concat('/button')
      },
    },
    Bootstrap: {
      root() {
        return pathKeys.Components.root().concat('/bootstrap')
      },
      Button() {
        return pathKeys.Components.Bootstrap.root().concat('/button')
      },
    },
    Basic: {
      root() {
        return pathKeys.Components.root().concat('/basic')
      },
      Button() {
        return pathKeys.Components.Basic.root().concat('/button')
      },
    },
  },
}

export const MenuItems = [
  {
    text: 'MUI Button',
    path: pathKeys.Components.Mui.Button(),
    icon: RadioButtonCheckedIcon,
  },
  {
    text: 'React-Bootstrap Button',
    path: pathKeys.Components.Bootstrap.Button(),
    icon: RadioButtonCheckedIcon,
  },
  {
    text: 'Basic Button',
    path: pathKeys.Components.Basic.Button(),
    icon: RadioButtonCheckedIcon,
  },
]
