import { FeaturedMarkets } from './widgets/FeaturedMarkets';
import { RelatedMarkets } from './widgets/RelatedMarkets';

const Body = () => {

    return (
        <div className="App">
            <FeaturedMarkets />

            <RelatedMarkets />
      </div>
    )
}

export default Body;