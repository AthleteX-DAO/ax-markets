import { FeaturedMarkets } from './widgets/FeaturedMarkets';
import { RelatedMarkets } from './widgets/RelatedMarkets';

const Body = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Featured Markets Section */}
      <section className="mb-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-4xl font-serif font-medium text-foreground">
            Featured Markets
          </h2>
        </div>
        <FeaturedMarkets />
      </section>

      {/* Related Markets Section */}
      <section className="mt-24">
        <h2 className="text-3xl font-serif font-medium text-foreground mb-8">
          Related Markets
        </h2>
        <RelatedMarkets />
      </section>
    </div>
  )
}

export default Body;