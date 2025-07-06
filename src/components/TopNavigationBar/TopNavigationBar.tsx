import AccountSheet from "./widgets/AccountCircle";
import DepositButton from "./widgets/DepositButton";

const TopNavigationBar = () => {
    return (
        <nav className="w-full">
            <div className="container mx-auto flex justify-between items-center">
            <img src="/src/assets/Athletex 11 BIG.png" alt="AthleteX Markets Exchange" className="h-45" />
            <a href="/" className="text-gray-300 hover:text-white">Markets</a>
            <div className="space-x-4">
                <DepositButton />
                <AccountSheet />
            </div>
            </div>
        </nav>
    );
}

export default TopNavigationBar;