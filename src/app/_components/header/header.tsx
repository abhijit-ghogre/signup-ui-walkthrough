import React from "react";
import SearchIcon from "~/app/_components/header/searchIcon";
import CartIcon from "~/app/_components/header/cartIcon";

function Header() {
  return (
    <>
      <div className="flex justify-end gap-[20px] px-[40px] py-[12px] text-[12px]">
        <div>Help</div>
        <div>Orders & Returns</div>
        <div>Hi, John</div>
      </div>

      <div className={"flex h-[64px] items-center justify-between px-[40px]"}>
        <div className={"text-[32px] font-bold"}>ECOMMERCE</div>
        <div className={"hidden gap-[32px] text-[16px] font-semibold sm:flex"}>
          <div>Categories</div>
          <div>Sale</div>
          <div>Clearance</div>
          <div>New stock</div>
          <div>Trending</div>
        </div>
        <div className={"flex gap-[32px]"}>
          <SearchIcon />
          <CartIcon />
        </div>
      </div>
      <div
        className={
          "flex h-[36px] items-center justify-center gap-[24px] bg-[#F4F4F4]"
        }
      >
        <div>&lt;</div>
        <div className={"text-[14px] font-medium"}>
          Get 10% off on business sign up
        </div>
        <div>&gt;</div>
      </div>
    </>
  );
}

export default Header;
