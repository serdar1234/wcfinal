import {
  dialogs,
  fogOfWar,
  sideBar,
  swiperContainers,
  callBtn,
  callCloseBtn,
  callDialog,
  callForm
} from './variables'

import { dialogFn } from './feedback'

const arrayOfVars = [
  dialogs,
  fogOfWar,
  sideBar,
  swiperContainers,
  callBtn,
  callCloseBtn,
  callDialog,
  callForm
]

export const callFn = dialogFn(arrayOfVars)