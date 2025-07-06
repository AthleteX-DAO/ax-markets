import AccountSheet from "./widgets/AccountCircle";
import DepositButton from "./widgets/DepositButton";

const TopNavigationBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">My App</div>
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