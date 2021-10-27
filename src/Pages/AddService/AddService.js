import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
   const { register, handleSubmit, reset } = useForm();
   const onSubmit = (data) => {
      console.log(data);
      axios
         .post("https://protected-waters-99941.herokuapp.com/services", data)
         .then((res) => {
            // console.log(res.data?.insertedId);
            if (res.data?.insertedId) {
               alert("Added Successfully");
               reset();
            }
         });
   };
   return (
      <div className="add_service">
         <h2>Add a service</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               type="text"
               {...register("name", { required: true, maxLength: 20 })}
               placeholder="name"
            />
            <textarea {...register("description")} placeholder="description" />
            <input type="number" {...register("price")} placeholder="price" />
            <input type="text" {...register("img")} placeholder="image url" />
            <input type="submit" />
         </form>
      </div>
   );
};

export default AddService;
