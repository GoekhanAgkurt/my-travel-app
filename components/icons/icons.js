const icons = {
  check: {
    title: "check",
    viewBox: "0 -960 960 960",
    path: "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z",
  },
  upload: {
    title: "upload",
    viewBox: "0 -960 960 960",
    path: "M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z",
  },
  delete: {
    title: "delete",
    viewBox: "0 -960 960 960",
    path: "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z",
  },
  edit: {
    title: "edit",
    viewBox: "0 -960 960 960",
    path: "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z",
  },
  store: {
    title: "store",
    viewBox: "0 -960 960 960",
    path: "M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z",
  },
  addStore: {
    title: "addStore",
    viewBox: "0 -960 960 960",
    path: "M720-40v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM80-160v-240H40v-80l40-200h600l40 200v80h-40v120h-80v-120H440v240H80Zm80-80h200v-160H160v160Zm-38-240h516-516ZM80-720v-80h600v80H80Zm42 240h516l-24-120H146l-24 120Z",
  },
  products: {
    title: "products",
    viewBox: "0 -960 960 960",
    path: "M640-80q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170T640-80Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm-480 0q-33 0-56.5-23.5T80-240v-304q0-8 1.5-16t4.5-16l80-184h-6q-17 0-28.5-11.5T120-800v-40q0-17 11.5-28.5T160-880h280q17 0 28.5 11.5T480-840v40q0 17-11.5 28.5T440-760h-6l66 152q-19 10-36 21t-32 25l-84-198h-96l-92 216v304h170q5 21 13.5 41.5T364-160H160Zm480-440q-42 0-71-29t-29-71q0-42 29-71t71-29v200q0-42 29-71t71-29q42 0 71 29t29 71H640Z",
  },
  cart: {
    title: "cart",
    viewBox: "0 -960 960 960",
    path: "M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z",
  },
  addToCart: {
    title: "addToCart",
    viewBox: "0 -960 960 960",
    path: "M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z",
  },
  plus: {
    title: "plus",
    viewBox: "0 -960 960 960",
    path: "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z",
  },
  account: {
    title: "account",
    viewBox: "0 -960 960 960",
    path: "M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z",
  },
  arrowBack: {
    title: "arrowBack",
    viewBox: "0 -960 960 960",
    path: "M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z",
  },
  arrowForward: {
    title: "arrowForward",
    viewBox: "0 -960 960 960",
    path: "m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z",
  },
  error: {
    title: "error",
    viewBox: "0 -960 960 960",
    path: "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z",
  },
  search: {
    title: "search",
    viewBox: "0 -960 960 960",
    path: "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",
  },
  darkmode: {
    title: "darkmode",
    viewBox: "0 -960 960 960",
    path: "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z",
  },
  moon: {
    title: "moon",
    viewBox: "0 -960 960 960",
    path: "M560-80q-82 0-155-31.5t-127.5-86Q223-252 191.5-325T160-480q0-83 31.5-155.5t86-127Q332-817 405-848.5T560-880q54 0 105 14t95 40q-91 53-145.5 143.5T560-480q0 112 54.5 202.5T760-134q-44 26-95 40T560-80Zm0-80h21q10 0 19-2-57-66-88.5-147.5T480-480q0-89 31.5-170.5T600-798q-9-2-19-2h-21q-133 0-226.5 93.5T240-480q0 133 93.5 226.5T560-160Zm-80-320Z",
  },
  filter: {
    title: "filter",
    viewBox: "0 -960 960 960",
    path: "M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z",
  },
  filterList: {
    title: "filterList",
    viewBox: "0 -960 960 960",
    path: "M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z",
  },
  menu: {
    title: "menu",
    viewBox: "0 -960 960 960",
    path: "M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z",
  },
  cancel: {
    title: "cancel",
    viewBox: "0 -960 960 960",
    path: "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",
  },
  warning: {
    title: "warning",
    viewBox: "0 -960 960 960",
    path: "m40-120 440-760 440 760H40Zm104-60h672L480-760 144-180Zm340.175-57q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5ZM454-348h60v-224h-60v224Zm26-122Z",
  },
  shoppingList: {
    title: "shoppingList",
    viewBox: "0 -960 960 960",
    path: "M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z",
  },
  addToShoppingList: {
    title: "addToShoppingList",
    viewBox: "0 0 24 24",
    path: "M7 22C6.45 22 5.97917 21.8042 5.5875 21.4125C5.19583 21.0208 5 20.55 5 20C5 19.45 5.19583 18.9792 5.5875 18.5875C5.97917 18.1958 6.45 18 7 18C7.55 18 8.02083 18.1958 8.4125 18.5875C8.80417 18.9792 9 19.45 9 20C9 20.55 8.80417 21.0208 8.4125 21.4125C8.02083 21.8042 7.55 22 7 22ZM17 22C16.45 22 15.9792 21.8042 15.5875 21.4125C15.1958 21.0208 15 20.55 15 20C15 19.45 15.1958 18.9792 15.5875 18.5875C15.9792 18.1958 16.45 18 17 18C17.55 18 18.0208 18.1958 18.4125 18.5875C18.8042 18.9792 19 19.45 19 20C19 20.55 18.8042 21.0208 18.4125 21.4125C18.0208 21.8042 17.55 22 17 22ZM1 4V2H4.275L8.525 11H15.525L19.425 4H21.7L17.3 11.95C17.1167 12.2833 16.8708 12.5417 16.5625 12.725C16.2542 12.9083 15.9167 13 15.55 13H8.1L7 15H19V17H7C6.25 17 5.67917 16.675 5.2875 16.025C4.89583 15.375 4.88333 14.7167 5.25 14.05L6.6 11.6L3 4H1Z",
  },
  removeFromShoppingList: {
    title: "removeFromShoppingList",
    viewBox: "0 0 24 24",
    path: "M9.62318 9.00001L8.60868 6.50001L7.59419 3.99998H12.1594H17.2319L16.2174 6.00001L14.6956 9.00001H12.1594H9.62318ZM7.08695 22C6.52899 22 6.05135 21.8042 5.65401 21.4125C5.25666 21.0208 5.058 20.55 5.058 20C5.058 19.45 5.25662 18.9792 5.65401 18.5875C6.05135 18.1958 6.52899 18 7.08695 18C7.64492 18 8.12261 18.1958 8.51996 18.5875C8.91731 18.9792 9.11597 19.45 9.11597 20C9.11597 20.55 8.91735 21.0208 8.51996 21.4125C8.12261 21.8042 7.64492 22 7.08695 22ZM17.2319 22C16.6739 22 16.1963 21.8042 15.7989 21.4125C15.4016 21.0208 15.2029 20.55 15.2029 20C15.2029 19.45 15.4015 18.9792 15.7989 18.5875C16.1963 18.1958 16.6739 18 17.2319 18C17.7899 18 18.2675 18.1958 18.6649 18.5875C19.0622 18.9792 19.2609 19.45 19.2609 20C19.2609 20.55 19.0622 21.0208 18.6649 21.4125C18.2675 21.8042 17.7899 22 17.2319 22ZM1 3.99998V2H4.32248L8.63408 11H15.7355L19.692 3.99998H22L17.5362 11.95C17.3503 12.2834 17.1008 12.5417 16.788 12.725C16.4752 12.9083 16.1329 13.0001 15.7609 13.0001H8.20288L7.08695 15.0002H19.2609V17.0001H7.08695C6.32611 17.0001 5.747 16.6751 5.34965 16.0252C4.95234 15.3752 4.93964 14.7168 5.3113 14.0502L6.68086 11.6002L3.02869 4.00009L1 3.99998Z",
  },
};

export default function Icon({
  variant,
  size = 30,
  color = "var(--primaryDarkColor)",
  ...rest
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={icons[variant].viewBox}
      width={size}
      fill={color}
      {...rest}
    >
      <title>{icons[variant].title}</title>
      <path d={icons[variant].path} />
    </svg>
  );
}
