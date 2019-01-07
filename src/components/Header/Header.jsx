import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'


export default function Header (){
  return(
    <header>
<Link to='/'>
<svg width="347" height="108" viewBox="0 0 347 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.36 79.12C24.9333 79.0667 18.0533 76.3733 12.72 71.04C7.44 65.7067 4.8 58.6933 4.8 50C4.8 41.2533 7.44 34.2133 12.72 28.88C18.0533 23.5467 25.0933 20.88 33.84 20.88C40.9867 20.88 47.3067 22.6933 52.8 26.32L54.4 37.6H53.68C52.5067 33.0133 50.1333 29.4933 46.56 27.04C42.9867 24.5333 38.7467 23.28 33.84 23.28C26.8533 23.28 21.2533 25.7067 17.04 30.56C12.88 35.4133 10.8 41.84 10.8 49.84C10.8 57.84 12.8533 64.2933 16.96 69.2C21.12 74.0533 26.5867 76.56 33.36 76.72C39.3333 76.72 44.32 75.0933 48.32 71.84C52.64 68.32 55.2533 62.5867 56.16 54.64H56.8L55.84 67.2C50.9867 75.1467 43.4933 79.12 33.36 79.12ZM66.3013 77.2C67.5813 77.2 68.6479 76.8 69.5013 76C70.4079 75.1467 70.8879 74.1333 70.9413 72.96V35.12C70.8879 33.9467 70.3813 32.9333 69.4213 32.08C68.5146 31.2267 67.4213 30.8 66.1413 30.8H65.1813V30H81.7413V30.8H80.7812C79.5013 30.8 78.3813 31.2267 77.4213 32.08C76.5146 32.9333 76.0613 33.9467 76.0613 35.12V75.52H88.5413C90.9946 75.52 93.0746 75.0933 94.7813 74.24C96.4879 73.3867 97.7679 72.3733 98.6213 71.2C99.5279 70.0267 100.408 68.48 101.261 66.56H102.061L97.6613 78H65.1813V77.2H66.3013ZM194.072 79.12C185.912 79.0667 179.459 76.8 174.712 72.32C170.019 67.84 167.672 61.7333 167.672 54C167.672 46.2133 170.019 40.08 174.712 35.6C179.459 31.12 185.912 28.88 194.072 28.88C197.379 28.88 200.712 29.3067 204.072 30.16C207.432 31.0133 210.339 32.1867 212.792 33.68L214.552 45.04H213.832C211.539 35.8667 204.925 31.28 193.992 31.28C187.645 31.28 182.632 33.3067 178.952 37.36C175.272 41.4133 173.432 46.96 173.432 54C173.432 58.5867 174.259 62.5867 175.912 66C177.565 69.36 179.965 71.9733 183.112 73.84C186.259 75.7067 189.912 76.64 194.072 76.64C198.232 76.64 201.859 76.0267 204.952 74.8C208.099 73.52 210.685 71.44 212.712 68.56C214.792 65.68 215.965 62.1067 216.232 57.84H216.952L216.072 68.8C213.992 72 210.979 74.5333 207.032 76.4C203.085 78.2133 198.765 79.12 194.072 79.12ZM270.398 78H267.438C262.211 78 258.291 76.48 255.678 73.44L238.078 54.16L255.278 33.92C255.865 33.1733 255.945 32.48 255.518 31.84C255.145 31.1467 254.478 30.8 253.518 30.8H252.798V30H269.118V30.8H268.798C265.545 30.8 262.958 31.76 261.038 33.68L243.598 52.32L263.438 73.92C264.398 75.0933 265.385 75.92 266.398 76.4C267.411 76.88 268.745 77.1467 270.398 77.2V78ZM239.998 77.2H240.878V78H224.478V77.2H225.438C226.718 77.2 227.811 76.7733 228.718 75.92C229.625 75.0667 230.105 74.0533 230.158 72.88V35.12C230.105 33.9467 229.625 32.9333 228.718 32.08C227.811 31.2267 226.718 30.8 225.438 30.8H224.478V30H240.878V30.8H239.918C238.211 30.8 236.878 31.4933 235.918 32.88C235.491 33.52 235.278 34.24 235.278 35.04V72.96C235.278 74.1333 235.731 75.1467 236.638 76C237.598 76.8 238.718 77.2 239.998 77.2ZM275.84 77.2C277.227 77.2 278.4 76.72 279.36 75.76C280.373 74.7467 280.907 73.5467 280.96 72.16V27.76C280.907 26.3733 280.373 25.2 279.36 24.24C278.4 23.28 277.227 22.8 275.84 22.8H274.8V22H292.32V22.8H291.28C289.893 22.8 288.693 23.28 287.68 24.24C286.72 25.2 286.213 26.3733 286.16 27.76V72.16C286.16 73.5467 286.667 74.7467 287.68 75.76C288.693 76.72 289.893 77.2 291.28 77.2H292.32V78H274.8V77.2H275.84ZM344.151 29.12C344.151 27.84 343.698 26.7467 342.791 25.84C341.885 24.88 340.818 24.3733 339.591 24.32H324.391V72.24C324.445 73.6267 324.951 74.8 325.911 75.76C326.925 76.72 328.125 77.2 329.511 77.2H330.551V78H313.031V77.2H314.071C315.458 77.2 316.631 76.72 317.591 75.76C318.605 74.8 319.138 73.6533 319.191 72.32V24.32H303.991C302.711 24.3733 301.618 24.88 300.711 25.84C299.858 26.7467 299.431 27.84 299.431 29.12V30.48L298.631 30.56V20.48C299.431 20.8 300.818 21.12 302.791 21.44C304.765 21.76 306.578 21.92 308.231 21.92H335.271C337.885 21.92 340.045 21.7333 341.751 21.36C343.511 20.9333 344.578 20.64 344.951 20.48V30.56L344.151 30.48V29.12Z" fill="#007FBA"/>
<path d="M132.5 25C117.864 25 106 36.8645 106 51.5C106 66.1355 117.864 78 132.5 78C147.136 78 159 66.1355 159 51.5C158.981 36.8723 147.128 25.0188 132.5 25ZM133.637 75.6695V71.0084C133.637 70.3805 133.128 69.8715 132.5 69.8715C131.872 69.8715 131.363 70.3805 131.363 71.0084V75.6695C118.897 75.0743 108.926 65.1026 108.331 52.6369H112.992C113.619 52.6369 114.128 52.1278 114.128 51.5C114.128 50.8722 113.619 50.3631 112.992 50.3631H108.331C108.926 37.8974 118.897 27.9257 131.363 27.3305V31.9916C131.363 32.6195 131.872 33.1285 132.5 33.1285C133.128 33.1285 133.637 32.6195 133.637 31.9916V27.3305C146.103 27.9257 156.074 37.8974 156.669 50.3631H152.008C151.381 50.3631 150.872 50.8722 150.872 51.5C150.872 52.1278 151.381 52.6369 152.008 52.6369H152.02H156.681C156.085 65.1067 146.107 75.08 133.637 75.6695Z" fill="#007FBA"/>
<path d="M144.494 62.0727L133.637 51.0339V39.5631C133.637 38.9352 133.128 38.4262 132.5 38.4262C131.872 38.4262 131.363 38.9352 131.363 39.5631V51.5C131.364 51.7983 131.483 52.0841 131.693 52.2958L142.868 63.6643C143.308 64.1132 144.028 64.1209 144.477 63.6814C144.926 63.2418 144.933 62.5216 144.494 62.0727Z" fill="#007FBA"/>
</svg>
</Link>

    </header>
  )
}