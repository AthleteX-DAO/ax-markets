// DepositButton.tsx
import { Button } from "@/components/ui/button";

function DepositButton() {
  return (
    <Button 
      variant="ghost"
      className="relative overflow-hidden group bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/20 hover:border-cyan-300/40 text-white hover:text-cyan-100 transition-all"
    >
      <span className="relative z-10">Deposit</span>
      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 to-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Button>
  );
}

export default DepositButton;