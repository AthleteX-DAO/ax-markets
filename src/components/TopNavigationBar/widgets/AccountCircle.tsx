import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function AccountSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-0 rounded-full">
          <Avatar className="ring-2 ring-gold-500/50 hover:ring-gold-300/80 transition-all duration-300 hover:scale-110">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-gradient-to-r from-gold-600 to-gold-400 text-black font-medium">
              AX
            </AvatarFallback>
          </Avatar>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-black border-l border-gold-500/20">
        <SheetHeader>
          <SheetTitle className="text-gold-300 font-serif">Account Settings</SheetTitle>
          <SheetDescription className="text-gold-500/80">
            Manage your profile and preferences
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4 py-6">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name" className="text-gold-300">Name</Label>
            <Input 
              id="sheet-demo-name" 
              defaultValue="Pedro Duarte" 
              className="bg-black border-gold-500/30 focus:border-gold-300"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username" className="text-gold-300">Username</Label>
            <Input 
              id="sheet-demo-username" 
              defaultValue="@peduarte" 
              className="bg-black border-gold-500/30 focus:border-gold-300"
            />
          </div>
        </div>
        <SheetFooter>
          <Button 
            type="submit"
            className="bg-gold-600 hover:bg-gold-500 text-black"
          >
            Save changes
          </Button>
          <SheetClose asChild>
            <Button variant="outline" className="border-gold-500/50 text-gold-300 hover:bg-gold-900/20">
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
export default AccountSheet