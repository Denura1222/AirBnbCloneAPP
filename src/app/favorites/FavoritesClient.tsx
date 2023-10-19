// import { SafeListing, SafeUser } from "@/app/types";

import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/listingCard";
import { Listing, User } from "@prisma/client";

interface FavoritesClientProps {
  listings: Listing[],
  currentUser?: User | null,
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
  currentUser
}) => {
  return (
    <Container>
      <div>nothing</div>
      <div 
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
   );
}
 
export default FavoritesClient;