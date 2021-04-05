/** @jsx jsx */
import Tw from '../icons/twitter.svg'
import Te from '../icons/telegram.svg'
import { jsx, Box, Flex, Link } from 'theme-ui'

const withIcn = A => () => (
  <A style={{fill: '#ccc', width: 30, margin: '1em'}} />
)

const Twi = withIcn(Tw)
const Tel = withIcn(Te)
export const Social = () => (
  <Flex>
    <Link href="https://twitter.com/rizomeio" target="blank"><Twi /></Link>
    <Link href="https://t.me/roastpool" target="blank"><Tel /></Link>
  </Flex>
)
