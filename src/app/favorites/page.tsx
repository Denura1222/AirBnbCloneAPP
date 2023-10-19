// import EmptyState from "@/app/components/EmptyState";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingByIds from "@/app/actions/getListingByIds";

import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const listings = await getListingByIds();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
     
      
        <div>No favorites found</div>
     
    );
  }

  return (
    
      <FavoritesClient
        listings={listings}
        currentUser={currentUser}
      />
  );
}
 
export default ListingPage;