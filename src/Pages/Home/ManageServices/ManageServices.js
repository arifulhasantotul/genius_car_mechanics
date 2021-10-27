import React, { useEffect, useState } from "react";

const ManageServices = () => {
   const [services, setServices] = useState([]);
   useEffect(() => {
      fetch("https://protected-waters-99941.herokuapp.com/services")
         .then((res) => res.json())
         .then((data) => setServices(data));
   }, []);

   const handleDelete = (id) => {
      const url = `https://protected-waters-99941.herokuapp.com/services/${id}`;
      console.log(url);
      fetch(url, {
         method: "DELETE",
         headers: {
            "content-type": "application/json",
            Accept: "application/json",
         },
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.deletedCount) {
               alert("Deleted Successfully");
               const remaining = services.filter(
                  (service) => service._id !== id
               );
               setServices(remaining);
            }
         });
   };

   return (
      <div>
         <h2>Manage Service</h2>
         {services.map((service) => (
            <div key={service._id}>
               {service.name}{" "}
               <button
                  onClick={() => {
                     handleDelete(service._id);
                  }}
               >
                  Delete
               </button>{" "}
            </div>
         ))}
      </div>
   );
};

export default ManageServices;
