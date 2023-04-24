import React from "react";
import { FaCheck } from "react-icons/fa";
import AdminCardBtns from "../commons/AdminCardBtns";
import GridRating from "./GridRating";

const Card = ({
  singleGame,
  singleProductHandler,
  addToCartHandler,
  cart,
  user,
  open,
  anchorEl,
  setAnchorEl,
  handleClose,
  handleClick,
  handleAdminNavigate,
  handleAdminDeleteProduct,
}) => {
  return (
    <div className="cardConteiner">
      <img
        className="gridImage"
        src={singleGame.poster}
        alt="product"
        onClick={() => singleProductHandler(singleGame)}
      />

      <div className="cardContent">
        <div className="cardSubconteiner">
          <span className="cardTitle">{singleGame.name}</span>
          
        </div>
        {/* <span className="cardRanking">
          <GridRating />
        </span> */}
        {user?.isAdmin ? (
            <AdminCardBtns
              singleGame={singleGame}
              open={open}
              anchorEl={anchorEl}
              handleClose={handleClose}
              handleClick={handleClick}
              handleAdminNavigate={handleAdminNavigate}
              handleAdminDeleteProduct={handleAdminDeleteProduct}
            />
          ) : null}
        <div className="cardSubcontainerB">
          {user?.isAdmin ? null : (
            <>
              {" "}
              <button
                className="cardButton"
                onClick={() => addToCartHandler(singleGame)}
              >
                {cart.some((el) => el.id === singleGame.id) ? (
                  <FaCheck />
                ) : (
                  "Add to cart"
                )}
              </button>
              <p className="cardCart">USD {singleGame.price}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
