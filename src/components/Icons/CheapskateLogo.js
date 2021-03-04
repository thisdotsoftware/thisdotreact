import React from "react";
import PropTypes from "prop-types";

const CheapskateLogo = ({ width = 100, height, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2360 405"
    width={width}
    height={height || width / 5.8}
    css={`
      fill: var(--color-primary-main);
    `}
    {...props}
  >
    <path d="M400.244 174.8c0-19.417-4.852-33.916-14.251-43.823l-.009-.01-.008-.009c-9.422-10.185-22.317-15.358-38.932-15.358-16.614 0-29.655 5.173-39.35 15.377-9.399 9.908-14.25 24.407-14.25 43.823V300h-49.6V0h49.6v97.94c7.31-7.676 16.12-13.734 26.407-18.176l.007-.003.008-.004c12.266-5.179 25.6-7.757 39.978-7.757 17.091 0 32.361 3.664 45.757 11.044 13.694 7.397 24.365 18.355 32.005 32.809 7.924 14.488 11.838 31.898 11.838 52.147l-.004 132h-49.2l.004-125.2zM1555.74 0v168.458L1632.8 75.6h68.7l-103.44 112.398L1701.51 300h-67.09l-78.68-91.411V300h-49.6V0h49.6z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1725.93 127.04l-.01.011-.01.011c-9.24 17.395-13.83 37.325-13.83 59.738 0 22.414 4.59 42.601 13.82 60.516l.01.016.01.016c9.49 17.62 22.25 31.485 38.3 41.546l.01.007.01.006c16.05 9.797 33.75 14.693 53.04 14.693 17.34 0 32.87-3.525 46.52-10.626 11.61-6.035 21.18-13.391 28.68-22.083V299.6h50V76h-50v28.015c-7.46-8.456-16.9-15.58-28.27-21.385-13.14-7.112-28.54-10.63-46.13-10.63-19.55 0-37.51 4.892-53.82 14.683-16.06 9.527-28.84 22.998-38.33 40.357zm166.87 60.46c0 38.494-29.44 69.5-65.5 69.5-36.07 0-65.5-31.006-65.5-69.5s29.43-69.5 65.5-69.5c36.06 0 65.5 31.006 65.5 69.5z"
    />
    <path d="M1326.84 294.22l-.02-.01c-13.86-6.521-24.93-15.25-33.15-26.21l-.01-.009v-.01c-8.58-11.721-12.69-25.174-13.27-39.581h51.12l.15 1.829c.75 8.723 4.83 16.098 12.43 22.186 7.86 5.818 17.67 8.785 29.58 8.785 12.59 0 21.99-2.366 28.46-6.839 6.75-4.752 9.94-10.578 9.94-17.561 0-3.797-.91-7.006-2.67-9.707-1.77-2.71-4.47-5.028-8.22-6.904l-.01-.006-.02-.007c-7.54-3.901-19.78-8.257-36.81-13.049-16.58-4.544-30.13-8.968-40.63-13.277-10.69-4.388-20.01-11.108-27.94-20.13l-.01-.013-.01-.013c-7.85-9.244-11.68-21.341-11.68-36.094 0-12.154 3.6-23.226 10.77-33.16 7.18-10.206 17.35-18.151 30.43-23.872l.01-.006c13.36-5.724 28.57-8.562 45.59-8.562 25.41 0 46.03 6.49 61.68 19.658 17.07 13.84 24.57 33.653 25.62 55.142h-49.54c-.77-9.419-3.89-17.916-11.42-24.05-6.74-5.494-15.98-8.35-27.94-8.35-11.79 0-20.52 2.234-26.44 6.432-5.9 4.181-8.76 9.588-8.76 16.368 0 5.316 1.91 9.72 5.77 13.341 4.05 3.798 9.01 6.865 14.93 9.183 6.07 2.112 15.08 4.894 27.04 8.349 16.03 4.276 29.19 8.703 39.45 13.289 10.68 4.385 19.86 10.965 27.52 19.721 7.84 8.969 11.82 20.794 12.09 35.279v.038c0 12.928-3.58 24.533-10.76 34.75-7.18 10.209-17.35 18.156-30.43 23.879-12.84 5.737-27.93 8.571-45.21 8.571-17.57 0-33.45-3.11-47.61-9.371l-.02-.009z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1237.55 247.327l.01-.011c9.23-17.915 13.82-38.102 13.82-60.516 0-22.413-4.59-42.343-13.83-59.738-9.23-17.374-22.02-30.85-38.34-40.38C1183.15 76.89 1165.32 72 1145.78 72c-17.08 0-32.47 3.527-46.12 10.626-11.61 6.035-21.18 13.292-28.68 21.79V75.6h-49.6V405h49.6V271.363c7.88 8.579 17.58 15.91 29.06 22.004l.02.007.01.008c13.39 6.829 28.64 10.218 45.71 10.218 19.55 0 37.38-4.893 53.44-14.693l.01-.005c16.32-10.063 29.1-23.936 38.32-41.575zm-45.92-98.766l.01.025.01.024c6.19 10.571 9.33 23.274 9.33 38.19 0 14.913-3.14 27.901-9.35 39.025l-.01.016v.016c-5.98 11.166-13.99 19.684-24.05 25.616-9.83 5.688-20.41 8.527-31.79 8.527-11.1 0-21.7-2.835-31.81-8.537-9.78-5.667-17.8-13.921-24.04-24.831-5.94-11.126-8.95-24.116-8.95-39.032 0-14.921 3.01-27.773 8.95-38.624 6.24-10.913 14.25-19.17 24.04-24.84 10.11-5.701 20.71-8.536 31.81-8.536 11.38 0 21.97 2.841 31.8 8.531l.02.015.03.015c10.03 5.402 18.03 13.51 24 24.4z"
    />
    <path d="M118 304c32.071 0 62.121-13.026 84.878-35.39l-32.903-32.336C156.367 250.897 138.229 260 118 260c-38.609 0-70-32.183-70-72 0-39.816 31.391-72 70-72 20.229 0 38.367 9.103 51.975 23.726l32.903-32.336C180.121 85.026 150.071 72 118 72 52.863 72 0 123.902 0 188s52.863 116 118 116zm1997.52-46v42h-40c-20.82 0-37.1-4.867-48.52-14.897-11.54-10.133-17.08-26.41-17.08-48.303v-120h-30V75.6h30V20.8h50v54.8h55.6v41.2h-55.6v120c0 7.985 1.8 13.336 4.96 16.535 3.46 2.958 9.5 4.665 18.64 4.665h32z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2208.95 245.72c-10.84-9.849-17.11-22.774-18.76-38.92h167.92l.27-1.684c1.08-6.791 1.62-14.366 1.62-22.716 0-21.621-4.6-40.763-13.85-57.367-9.24-16.856-22.18-29.929-38.78-39.18C2290.78 76.602 2271.9 72 2250.8 72c-21.9 0-41.44 4.734-58.57 14.252l-.01.006c-16.88 9.526-30.08 23.141-39.58 40.794l-.01.01c-9.24 17.402-13.83 37.601-13.83 60.538 0 22.947 4.73 43.282 14.24 60.948l.01.016.01.017c9.77 17.369 23.09 30.965 39.94 40.749l.01.009.02.009c17.12 9.514 36.4 14.252 57.77 14.252 26.13 0 52.2-6.456 69.99-19.591v-.003c11.13-8.261 21.2-18.013 28.11-29.282l1.13-1.838-43.41-22.301c-11.76 19.962-32.82 30.615-55.82 30.615-16.61 0-30.52-5.175-41.85-15.48zM2188.4 168c2.13-17.067 8.8-30.533 20-40.4 11.2-10.133 24.67-15.2 40.4-15.2 17.33 0 31.87 5.067 43.6 15.2 11.26 9.728 17.24 22.528 17.94 38.4.03.661.05 1.328.06 2h-122zM541.386 206.8c1.651 16.146 7.925 29.071 18.759 38.92C571.481 256.025 585.39 261.2 602 261.2c22.998 0 44.055-10.653 55.821-30.615l43.406 22.301-1.127 1.838c-6.906 11.269-16.981 21.021-28.108 29.282l-.004.003C654.2 297.144 628.133 303.6 602 303.6c-21.373 0-40.646-4.738-57.771-14.252l-.017-.009-.016-.009c-16.85-9.784-30.169-23.38-39.939-40.749l-.009-.017-.009-.016C494.726 230.882 490 210.547 490 187.6c0-22.937 4.589-43.136 13.834-60.538l.005-.01c9.505-17.653 22.703-31.268 39.578-40.794l.012-.006C560.561 76.734 580.103 72 602 72c21.1 0 39.976 4.602 56.574 13.853s29.532 22.324 38.777 39.18c9.253 16.604 13.849 35.746 13.849 57.367 0 8.35-.539 15.925-1.625 22.716l-.27 1.684H541.386zm18.214-79.2c-11.2 9.867-17.867 23.333-20 40.4h122a72.86 72.86 0 00-.059-2c-.697-15.872-6.677-28.672-17.941-38.4-11.733-10.133-26.267-15.2-43.6-15.2-15.733 0-29.2 5.067-40.4 15.2zm189.524-.549l.005-.011c9.494-17.359 22.271-30.83 38.33-40.358C803.778 76.893 821.734 72 841.284 72c17.593 0 32.992 3.518 46.131 10.63 11.374 5.805 20.809 12.929 28.269 21.385V76h50v223.6h-50v-28.709c-7.497 8.692-17.07 16.048-28.677 22.083-13.655 7.101-29.179 10.626-46.523 10.626-19.29 0-36.986-4.896-53.041-14.693l-.011-.006-.01-.007c-16.045-10.061-28.811-23.926-38.299-41.546l-.008-.016-.009-.016c-9.229-17.915-13.822-38.102-13.822-60.516 0-22.413 4.593-42.343 13.834-59.738l.006-.011zm68.171 28.021l.019-.018c10.935-10.935 10.935-28.663 0-39.598a27.894 27.894 0 00-12.554-7.251 6 6 0 10-3.096 11.593c2.62.7 5.097 2.075 7.165 4.143a15.928 15.928 0 014.526 9.051l-3.961.566a15.999 15.999 0 00-13.576 13.576l-5.657 39.598a16.001 16.001 0 004.525 13.577l45.255 45.254c4.687 4.687 12.285 4.687 16.971 0l50.912-50.911c4.686-4.687 4.686-12.284 0-16.971l-45.255-45.255a16.001 16.001 0 00-13.577-4.525l-11.877 1.697c1.17 8.231-.227 16.756-4.19 24.284.475.351.929.742 1.359 1.172 4.687 4.686 4.687 12.284 0 16.97-4.686 4.687-12.284 4.687-16.97 0-4.68-4.68-4.686-12.264-.019-16.952z"
    />
  </svg>
);

CheapskateLogo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default CheapskateLogo;
