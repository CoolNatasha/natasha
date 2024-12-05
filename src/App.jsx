import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './componets/Container'
import Flex from './componets/Flex'
import Image from './componets/Image'
import logo from './assets/logo.png'
import Menu from './componets/Menu'
import Button from './componets/Button'
import banner from './assets/banner.png'
import Heading from './componets/Heading'

function App() {
  

  return (
    <>
     {/* {Header part start} */}
     <div className="">
      <Container className={"max-w-headerContainer "}>
        <Flex className={"justify-between "}>
          <div className="w-[15%]">
            <Image src={logo} alt={logo}/>
          </div>
          <div className="w-[70%] flex justify-center gap-x-12 mt-[20px]">
            <Menu mText={"Home"} className={"hover:text-[#327186] hover:text-[20px]"}/>
            <Menu mText={"Course"} className={"hover:text-[#327186] hover:text-[20px]"}/>
            <Menu mText={"Monitors"} className={"hover:text-[#327186] hover:text-[20px]"}/>
            <Menu mText={"About"} className={"hover:text-[#327186] hover:text-[20px]"}/>
          </div>
          <div className="w-[15%] mt-[20px]">
          <Button btnText={"Get Started"} className={"py-[8px] px-[24px] rounded-2xl hover:bg-btnhover border border-btnhover"}/>
          </div>
        </Flex>
      </Container>
     </div>

     {/* {Header part end} */}
     {/* {Banner part start } */}
     <div className="pt-[120px]">
      <Flex>
      <div className="w-[50%] ml-[100px] mt-[150px]">
        <Heading text={"Getting Quality Education is now more Easy"} as={'h1'} className={"font-karla font-bold text-[64px] pr-[50px]"} />
        <Heading text={"t is a long established fact that a reader will be distracted by the readable content of a page when looking "} as={'p'} className={"font-pop font-semiold text-[22px] mt-[20px]"}/>
       <Flex>
        <div className="">
        <Button btnText={"Join Us Free"} className={"py-[8px] px-[24px] rounded-2xl hover:bg-btnhover border border-btnhover font-pop font-semibold text-[18px] mt-[50px] ml-[20px] "}/>
        </div>
        <div className="">
        <Button btnText={"Join Us Free"} className={"py-[8px] px-[24px] rounded-2xl hover:bg-btnhover border border-btnhover font-pop font-semibold text-[18px] mt-[50px] ml-[20px]"}/>
        </div>
       </Flex>
      </div>
      <div className="w-[50%]">
        <Image src={banner} alt={banner}/>
      </div>
      </Flex>
     </div>
     {/* {Banner part end} */}
     {/* {About part start } */}
       <div className="bg-[#0166FF] py-[50px] ">
        <Container className={"max-w-headerContainer"} >
        <Flex className={"justify-between gap-16"}>
         
        <div className="flex p-[20px] w-[25%] justify-between gap-x-8">
            
            <div className="">
                <Heading text={"8200"} as={'h4'} className={"font-karla font-bold text-[40px] text-white"}/>
                <Heading text={" Success Stories"} as={'p'} className={"font-pop font text-[20px] text-white"}/>
              </div>
              <div className="py-[px] px-[1px] bg-white"></div>
              
            </div>
            <div className="flex p-[20px] w-[25%] justify-between ml-[20px] gap-x-8">
            
            <div className="">
                <Heading text={"12200"} as={'h4'} className={"font-karla font-bold text-[40px] text-white"}/>
                <Heading text={"Expert Monitors"} as={'p'} className={"font-pop font text-[20px] text-white"}/>
              </div>
              <div className="py-[2px] px-[1px] bg-white"></div>
              
            </div>
            <div className="flex p-[20px] w-[25%] justify-between ml-[20px] gap-x-8">
            
            <div className="">
                <Heading text={"50000"} as={'h4'} className={"font-karla font-bold text-[40px] text-white"}/>
                <Heading text={"Hours  Course"} as={'p'} className={"font-pop font text-[20px] text-white"}/>
              </div>
              <div className="py-[2px] px-[1px] bg-white"></div>
              
            </div>
            <div className="flex p-[20px] w-[25%] justify-between ml-[20px] gap-x-8">
            
            <div className="">
                <Heading text={"70000"} as={'h4'} className={"font-karla font-bold text-[40px] text-white"}/>
                <Heading text={" Active Student"} as={'p'} className={"font-pop font text-[20px] text-white"}/>
              </div>
              
              
            </div>
          
        </Flex>
        </Container>
       </div>
     {/* {About part end } */}
     {/* {service part start } */}
     
     {/* {service part end } */}
  
    </>
  )
}

export default App
