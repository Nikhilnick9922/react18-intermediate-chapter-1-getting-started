import { Badge } from '@chakra-ui/react'
 

interface Props {
    score:number,
}


const CriticScore = ({score}:Props) => {
    let color  = score > 90 ? 'green' :score > 88 ? "yellow" : "gray"
  return (
     <Badge colorScheme={color} fontSize={"14px"} paddingX={2} borderRadius={"8px"} >
        {score}</Badge>
  )
}

export default CriticScore



 