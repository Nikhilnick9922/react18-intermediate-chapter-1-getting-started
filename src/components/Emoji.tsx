import bullsEyes from '../assets/bulls-eye.webp'
import thumbsUp from '../assets/thumbs-up.webp'
import meh  from '../assets/meh.webp'
import { Image, ImageProps } from '@chakra-ui/react'


interface Props {
    rating : number
}

  
const emojiMap:{[key:number]: ImageProps} = {
    3: {src:meh , alt: 'meh' , boxSize: "25px"},
    4: {src:thumbsUp , alt: 'recommended', boxSize: "25px"},
    5: {src:bullsEyes , alt: 'exceptional', boxSize: "30px"},   
}


const Emoji = ({rating}: Props) => {
    if(rating<3) return null
  return (
      <Image {...emojiMap[rating]}  marginTop={1} />
  )
}

export default Emoji


 