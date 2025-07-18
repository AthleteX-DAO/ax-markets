import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function AccountSheet() {
  return (
    <Sheet>
      <Button variant="ghost" className="p-0 rounded-full">
        <SheetTrigger asChild>
          <Avatar className="ring-2 ring-gold-500/50 hover:ring-gold-300/80 transition-all duration-300 hover:scale-110">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-gradient-to-r from-gold-600 to-gold-400 text-black font-medium">
              AX
            </AvatarFallback>
          </Avatar>
        </SheetTrigger>
      </Button>
      <SheetContent className="bg-black border-l border-gold-500/20 w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-gold-300 font-serif">Account Overview</SheetTitle>
          <SheetDescription className="text-gold-500/80">
            Your trading portfolio and activity
          </SheetDescription>
        </SheetHeader>
        
        {/* Portfolio Summary */}
        <div className="grid grid-cols-2 gap-4 mt-6 mb-8">
          <div className="bg-black/50 border border-gold-500/20 rounded-lg p-4">
            <p className="text-sm text-gold-400/80">Positions value</p>
            <p className="text-xl font-medium text-gold-300">$0.00</p>
          </div>
          <div className="bg-black/50 border border-gold-500/20 rounded-lg p-4">
            <p className="text-sm text-gold-400/80">Profit/loss</p>
            <p className="text-xl font-medium text-gold-300">$0.00</p>
          </div>
          <div className="bg-black/50 border border-gold-500/20 rounded-lg p-4">
            <p className="text-sm text-gold-400/80">Volume traded</p>
            <p className="text-xl font-medium text-gold-300">$0.00</p>
          </div>
          <div className="bg-black/50 border border-gold-500/20 rounded-lg p-4">
            <p className="text-sm text-gold-400/80">Markets traded</p>
            <p className="text-xl font-medium text-gold-300">0</p>
          </div>
        </div>

        {/* Tabs for Positions/Activity */}
        <Tabs defaultValue="positions" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-black/50 border border-gold-500/20">
            <TabsTrigger 
              value="positions" 
              className="text-gold-400 data-[state=active]:bg-gold-900/20 data-[state=active]:text-gold-300"
            >
              Positions
            </TabsTrigger>
            <TabsTrigger 
              value="activity" 
              className="text-gold-400 data-[state=active]:bg-gold-900/20 data-[state=active]:text-gold-300"
            >
              Activity
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="positions" className="mt-4">
            <div className="border border-gold-500/20 rounded-lg p-4 min-h-[200px] flex flex-col items-center justify-center">
              <p className="text-gold-400/60 mb-2">No positions found</p>
              <Button 
                variant="outline" 
                className="border-gold-500/50 text-gold-300 hover:bg-gold-900/20"
              >
                Explore Markets
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="activity" className="mt-4">
            <div className="border border-gold-500/20 rounded-lg p-4 min-h-[200px] flex flex-col items-center justify-center">
              <p className="text-gold-400/60">No recent activity</p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Account Settings Section */}
        <div className="mt-8 pt-6 border-t border-gold-500/20">
          <h3 className="text-gold-300 font-serif mb-4">Account Settings</h3>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-gold-300">Name</Label>
              <Input 
                id="name" 
                defaultValue="Pedro Duarte" 
                className="bg-black border-gold-500/30 focus:border-gold-300"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username" className="text-gold-300">Username</Label>
              <Input 
                id="username" 
                defaultValue="@peduarte" 
                className="bg-black border-gold-500/30 focus:border-gold-300"
              />
            </div>
          </div>
        </div>

        <SheetClose asChild className="mt-6">
          <Button 
            variant="outline" 
            className="w-full border-gold-500/50 text-gold-300 hover:bg-gold-900/20"
          >
            Close
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  )
}

export default AccountSheet