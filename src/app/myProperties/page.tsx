

import getCurrentUser from "@/app/actions/getCurrentUser";


import PropertiesClient from "./PropertiesClient";
import getListingsByUid from "../actions/getListingsByUid";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  console.log("current user ,",currentUser)

  if (!currentUser) {
   <div>please login</div>  
  }

  const listings = await getListingsByUid({ UserId: currentUser?.id });

  console.log("current listing ,",listings)

  if (listings?.length === 0) {
    return (
      <div> no properties </div>
    );
  }

  return (
      <PropertiesClient
        listings={listings}
        currentUser={currentUser}
      />
   
  );
}
 
export default PropertiesPage;