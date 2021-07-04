import styled from 'styled-components/macro'
import tw from 'tailwind.macro'
 
export const PlanetInfoContainer = styled.div`
    ${tw`
        bg-myOrange 
        flex 
        flex-col
        justify-start
        items-center
        text-white 
    `}
`

export const PlanetExplanation = styled.p`
    ${tw`
        w-128   
    `}
`

// export const PlanetImgContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     width: 1000px;
//     margin: 100px auto 100px auto;
// `

export const PlanetImgContainer = styled.div`
    ${tw`
        flex
        mx-32
        my-32
    `}
`

export const PlanetImg = styled.img`
    width: 500px;
    height: 500px;
`

export const PlanetDate = styled.div`

`