import common from './common'

export interface ConstantsProps {
  common: typeof common
}

const constants: ConstantsProps = {
  common: common,
}

export default constants
