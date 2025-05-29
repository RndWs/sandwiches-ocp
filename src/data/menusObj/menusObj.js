
import deliSandwichesObj from "./submenus/deliSandwichesObj"
import deliWrapsObj from "./submenus/deliWrapsObj"
import vipSandwiches from "./submenus/vipSandwiches"
import vipWraps from "./submenus/vipWraps"
import intlSandwiches from "./submenus/intlSandwiches"
import brklSandwiches from "./submenus/brklSandwiches"

const menusObj = {
  "deli": {
    type: 'deli', 
    typeLong: 'deli', 
    typeShort: 'deli',
    typeDetailSandwiches: deliSandwichesObj,
    typeDetailWraps: deliWrapsObj
  },
  "vip": {
    type: 'vip',  
    typeLong: 'executive',
    typeShort: 'vip',
    typeDetailSandwiches: vipSandwiches,
    typeDetailWraps: vipWraps
  },
  "international": {
    type: 'intl',  
    typeLong: 'international',
    typeShort: 'intl', 
    typeDetailSandwiches: intlSandwiches
  },
  "brickel": {
    type: 'brkl',  
    typeLong: 'brickel',
    typeShort: 'brkl', 
    typeDetailSandwiches: brklSandwiches
  },

}

export default menusObj;