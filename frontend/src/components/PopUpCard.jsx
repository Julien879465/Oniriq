import React from "react";
import PropTypes from "prop-types";

function PopUpCard({ popUp, onClose }) {
  if (popUp.length !== 1) return null;
  return (
    <div className="overlay bg-gradient-blue-d md:bg-blue md:bg-opacity-30 fixed w-full h-full md:h-full backdrop-blur-sm ">
      <div className="modal container max-w-lg md:max-h-[80%] fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 flex flex-col items-center md:items-end justify-between py-12 md:bg-white rounded-xl px-12 md:px-0">
        <div className="flex w-11/12  flex-col items-center md:pr-[10%]">
          {popUp.map((card) => {
            return (
              <img
                className="image md:aspect-square md:w-8/12 object-contain"
                src={card.URL}
                alt="reve"
              />
            );
          })}

          <div className="modalRight flex flex-col items-center md:items-end">
            <button
              type="button"
              onClick={onClose}
              className="closed button fixed top-8 right-8 text-white md:text-gradient-blue-d"
            >
              {" "}
              X{" "}
            </button>
            <div className="content flex flex-col justify-around items-between my-8">
              {popUp.map((card) => {
                return (
                  <div className="flex flex-col justify-between">
                    <h1 className="font-sans text-base md:w-11/12 md:text-right	 mt-8 md:mt-4 text text-white md:text-gradient-blue-d">
                      {card.DESCRIPTION}
                    </h1>
                    <div className="flex flex-row items-baseline justify-between w-5/12 ">
                      <div className="flex">
                        <span className="font-sans font-medium text-base mt-8 md:mt-4 text-white md:hidden">
                          {card.TYPE === "Rêve" ? "30" : "5"}
                        </span>
                        <span className="font-sans font-medium text-base mt-8 md:mt-4 text-white md:hidden">
                          000{" "}
                        </span>
                      </div>
                      <span className="font-sans text-sm mt-8 md:mt-4 text-white md:hidden ml-2">
                        {" "}
                        dreameez
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              type="button"
              className="bg-yellow font-sans text-xl font-medium text-white flex justify-between whitespace-nowrap items-center md:mx-[5%] px-4 py-4 rounded-3xl"
            >
              <svg
                className="fill-none stroke-white stroke-2 w-full"
                width="24"
                height="24"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.25 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V9.75C15.75 8.92157 15.0784 8.25 14.25 8.25Z" />
                <path d="M5.25 8.25V5.25C5.25 4.25544 5.64509 3.30161 6.34835 2.59835C7.05161 1.89509 8.00544 1.5 9 1.5C9.99456 1.5 10.9484 1.89509 11.6517 2.59835C12.3549 3.30161 12.75 4.25544 12.75 5.25V8.25" />
              </svg>
              <p className="pl-[4%]">Débloquez ce rêve!</p>
            </button>
          </div>
        </div>
      </div>

      <button type="button" onClick={() => onClose} className="flex">
        x
      </button>
    </div>
  );
}

PopUpCard.propTypes = {
  popUp: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PopUpCard;