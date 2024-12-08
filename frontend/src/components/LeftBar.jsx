import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Leftbar = () => {
  const navigate = useNavigate();
//   const users = useSelector(selectUser);
  return (
    <>
      <main className="">
        <aside className="h-screen lg:hidden overflow-y-scroll bg-white  fixed  pt-24 w-[16em] ">
          <div className=" ">
            <div className="flex gap-5 cursor-pointer border-b-4 border-lightwhite p-3 w-full ">
              <figure className="w-fit  ">
                {/* <img className="w-10 rounded-full " src={profile} alt="" /> */}
              </figure>
              <div>
                <p className="text-sm  font-bold text-teal">
                  {/* {users.firstName} {users.lastName} */}
                </p>
                {/* <p className="text-textgray text-sm">IN</p> */}
              </div>
            </div>
            <div className="flex  flex-col gap-2 cursor-pointer ">
              <div
                onClick={() => navigate("/add-product")}
                className="flex rounded-md bg-hoverteal text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">Products</p>
                <span>
                  <i class="fa-solid fa-folder"></i>
                </span>
              </div>
              <div className="flex rounded-md p-3 hover:duration-300 hover:bg-hoverteal hover:text-hovergray text-teal items-center justify-between ">
                <p className="font-medium font-productsansr"  onClick={() => navigate("/customers")}>Customers</p>
                <span>
                  <i class="fa-solid fa-box"></i>
                </span>
              </div>

              <div
                onClick={() => navigate("/categories")}
                className="flex   rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">
                  Categories
                </p>
                <span>
                  <i class="fa-solid fa-square-check"></i>
                </span>
              </div>
              <div
               onClick={() => navigate("/orders")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">Orders</p>
                <span>
                  <i class="fa-solid fa-bookmark"></i>
                </span>
              </div>
             
            
             
             
              
             
             
              
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default Leftbar;