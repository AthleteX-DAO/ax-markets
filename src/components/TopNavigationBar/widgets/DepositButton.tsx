import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function DepositButton() {
  return (
    <Button 
      variant="ghost"
      className={cn(
        "relative overflow-hidden group",
        "bg-black border border-gold-500/30 hover:border-gold-300",
        "text-gold-300 hover:text-gold-100 transition-all",
        "font-serif tracking-wider"
      )}
    >
      <span className="relative z-10">Deposit</span>
      <span className="absolute inset-0 bg-gradient-to-r from-gold-900/20 to-gold-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Gold shine effect on hover */}
      <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent to-gold-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -skew-x-12 group-hover:translate-x-[400%]" />
    </Button>
  );
}

export default DepositButton;