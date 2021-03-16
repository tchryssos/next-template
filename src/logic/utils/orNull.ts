import ternary from 'logic/utils/ternary'

const orNull = (bool: boolean, truthy: any) => ternary(bool, truthy, null)

export default orNull

