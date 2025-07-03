// components/MobileMenu.tsx
'use client'

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { FC, useState } from "react"
import { MobileMenuProps } from "./lib/types"

const MobileMenu: FC<MobileMenuProps> = ({ isMenuOpen, scrollToSection, setIsMenuOpen, aboutRef, featureRef, pricingRef }) => {
    const [isOpen, setIsOpen] = useState<Boolean>(false);

    return (
    <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DrawerTrigger asChild>
        <Button
            variant="default"
            size="lg"
            onClick={()=>setIsOpen(true)} 
            className="md:hidden size-10">
          <Menu size={60} />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="text-black border-t border-white/20">
        <div className="mx-auto w-full max-w-5xl">
            <div className="mb-3">
                <DrawerHeader>
                    <DrawerTitle className="flex justify-center font-bold items-center px-4 text-lg">
                        Меню
                    </DrawerTitle>
                </DrawerHeader>
            </div>

            <nav className="flex flex-col gap-8 max-w-sm mx-auto text-lg font-medium">
                <div className="flex flex-col gap-4">
                    <DrawerClose asChild>
                        <Button
                            onClick={()=> {
                                setTimeout(()=>scrollToSection(aboutRef), 100);
                            }}
                            className={`font-semibold p-2 border-black cursor-pointer text-lg`}
                        >
                            Миссия
                        </Button>
                    </DrawerClose>
                    <DrawerClose asChild>
                        <Button
                            onClick={() => {
                                setTimeout(()=>scrollToSection(featureRef), 100);
                            }}
                            className={`font-semibold cursor-pointer  text-lg`}
                        >
                            Функции
                        </Button>
                    </DrawerClose>
                    <DrawerClose asChild>
                        <Button
                            onClick={() => {
                                setTimeout(()=>scrollToSection(pricingRef), 100);
                            }}
                            className={`font-semibold cursor-pointer text-lg`}
                        >
                            Цена
                        </Button>
                    </DrawerClose>
                </div>
                <div className="flex flex-col mb-3">
                    <DrawerClose asChild>
                        <Button className={` items-center px-3.5 py-1.5 text-white font-semibold cursor-pointer text-lg`}>
                            Начать
                        </Button>
                    </DrawerClose>
                </div>
            </nav>
        </div>

      </DrawerContent>
    </Drawer>
  )
}

export default MobileMenu
