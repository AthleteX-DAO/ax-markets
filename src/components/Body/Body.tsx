
import { FeaturedMarkets } from './widgets/FeaturedMarkets';
import { RelatedMarkets } from './widgets/RelatedMarkets';

const Body = () => {

    return (
        <div className="App container mx-auto px-4 py-8">
            <div className='my-12'>
                <h2 className='text-3xl font-bold text-gray-800 mb-6'>Featured Markets</h2>
                <FeaturedMarkets />
            </div>

            <div className="my-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Related Markets</h2>
                <RelatedMarkets />
            </div>
        
        </div>
    )
}

export default Body;