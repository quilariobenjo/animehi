import React from 'react';

const HeaderMenu = () => {
  return (
    <div
      className="invisible fixed bottom-0 top-0 left-0 z-[1045] flex w-96 max-w-full -translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
      tabIndex={-1}
      id="offcanvasExample"
      aria-labelledby="header menu"
    >
      <div className="flex items-center justify-between p-4">
        <h5 className="mb-0 font-semibold leading-normal">Offcanvas</h5>
        <button
          type="button"
          className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
        >
          <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
            X
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeaderMenu;
