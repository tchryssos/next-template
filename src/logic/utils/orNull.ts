import ternary from 'logic/utils/ternary'

const orNull = (bool: boolean, truthy: unknown) => ternary(bool, truthy, null)

export default orNull

