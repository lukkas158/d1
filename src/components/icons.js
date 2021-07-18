import styled from "styled-components";

const Svg = styled.svg`
  width: 21px;
  height: 20px;
  color: ${(props) => props.color || "#e4e6f1"};
`;

export const Bed = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M 6 6 C 4.355469 6 3 7.355469 3 9 L 3 15.78125 C 2.390625 16.332031 2 17.121094 2 18 L 2 27 L 7 27 L 7 25 L 25 25 L 25 27 L 30 27 L 30 18 C 30 17.121094 29.609375 16.332031 29 15.78125 L 29 9 C 29 7.355469 27.644531 6 26 6 Z M 6 8 L 26 8 C 26.554688 8 27 8.445313 27 9 L 27 15 L 25 15 L 25 14 C 25 12.355469 23.644531 11 22 11 L 18 11 C 17.234375 11 16.53125 11.300781 16 11.78125 C 15.46875 11.300781 14.765625 11 14 11 L 10 11 C 8.355469 11 7 12.355469 7 14 L 7 15 L 5 15 L 5 9 C 5 8.445313 5.445313 8 6 8 Z M 10 13 L 14 13 C 14.554688 13 15 13.445313 15 14 L 15 15 L 9 15 L 9 14 C 9 13.445313 9.445313 13 10 13 Z M 18 13 L 22 13 C 22.554688 13 23 13.445313 23 14 L 23 15 L 17 15 L 17 14 C 17 13.445313 17.445313 13 18 13 Z M 5 17 L 27 17 C 27.554688 17 28 17.445313 28 18 L 28 25 L 27 25 L 27 23 L 5 23 L 5 25 L 4 25 L 4 18 C 4 17.445313 4.445313 17 5 17 Z"
    />
  </Svg>
);

export const CCMCloud = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 78 78"
  >
    <defs>
      <clipPath id="clip-CCM-Cloud">
        <rect width="78" height="78" />
      </clipPath>
    </defs>
    <g id="CCM-Cloud" clip-path="url(#clip-CCM-Cloud)">
      <g
        id="Grupo_4899"
        data-name="Grupo 4899"
        transform="translate(4.229 10.32)"
      >
        <path
          fill="currentColor"
          id="Subtração_1"
          data-name="Subtração 1"
          d="M55.633,43.232h0v-4.82a10.019,10.019,0,0,0,4.013-1.232,9.558,9.558,0,0,0,3.609-3.493,9.553,9.553,0,0,0,0-9.689A9.553,9.553,0,0,0,59.647,20.5a10.1,10.1,0,0,0-4.693-1.273c.058,0,.059.006.06.007a7.332,7.332,0,0,1-.839.064l-2.1.075L51.613,17.5A16.314,16.314,0,0,0,48.237,11a17.7,17.7,0,0,0-27.2.338l-.931,1.2-1.553-.375a4.955,4.955,0,0,0-1.165-.15,4.9,4.9,0,0,0-3.531,1.39,4.587,4.587,0,0,0-1.436,3.417l.311,2.479-1.707.676a9.842,9.842,0,0,0-4.386,3.53,9.181,9.181,0,0,0-1.669,5.332,9.34,9.34,0,0,0,1.319,4.845A9.567,9.567,0,0,0,9.9,37.179c.175.1.356.192.536.279v5.148a14.788,14.788,0,0,1-2.981-1.3,15.024,15.024,0,0,1-5.433-5.258A13.506,13.506,0,0,1,0,28.917a12.771,12.771,0,0,1,2.1-7.061,15.941,15.941,0,0,1,5.356-5.032,8.945,8.945,0,0,1,1.358-4.807,10.362,10.362,0,0,1,3.609-3.493,9.71,9.71,0,0,1,4.967-1.314,3.411,3.411,0,0,1,.621.075l.388.076a23,23,0,0,1,7.219-5.333,21.89,21.89,0,0,1,18.239-.075A21.285,21.285,0,0,1,51.032,7.1a22.8,22.8,0,0,1,4.618,7.549,15.835,15.835,0,0,1,6.985,2.215,14.432,14.432,0,0,1,5.045,5.071,13.405,13.405,0,0,1,1.862,6.909,13.638,13.638,0,0,1-2.018,7.211,15.028,15.028,0,0,1-5.432,5.258,14.716,14.716,0,0,1-6.457,1.922Z"
          transform="translate(0 0)"
        />
        <path
          fill="currentColor"
          id="Caminho_349"
          data-name="Caminho 349"
          d="M1.563-7.5H29.627V27.959H1.563V-7.5ZM4.369-4.545V2.842H26.82V-4.545Zm0,10.342v8.865H26.82V5.8Zm0,11.82V25H26.82V17.617Z"
          transform="translate(17.561 30.096)"
          stroke-width="0.5"
        />
      </g>
    </g>
  </Svg>
);

export const ChartPie = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 14.875 5.0625 C 14.917969 5.058594 14.957031 5.066406 15 5.0625 L 15 16.40625 L 15.28125 16.71875 L 23.0625 24.46875 C 21.15625 26.0625 18.6875 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 10.292969 9.320313 5.625 14.875 5.0625 Z M 17 5.0625 C 22.285156 5.539063 26.460938 9.714844 26.9375 15 L 17 15 Z M 18.4375 17 L 26.9375 17 C 26.730469 19.292969 25.863281 21.394531 24.46875 23.0625 Z"
    />
  </Svg>
);

export const Check = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M 28.28125 6.28125 L 11 23.5625 L 3.71875 16.28125 L 2.28125 17.71875 L 10.28125 25.71875 L 11 26.40625 L 11.71875 25.71875 L 29.71875 7.71875 Z"
    />
  </Svg>
);

export const Exchange = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M 22.1875 2.28125 L 20.78125 3.71875 L 25.0625 8 L 4 8 L 4 10 L 25.0625 10 L 20.78125 14.28125 L 22.1875 15.71875 L 28.90625 9 Z M 9.8125 16.28125 L 3.09375 23 L 9.8125 29.71875 L 11.21875 28.28125 L 6.9375 24 L 28 24 L 28 22 L 6.9375 22 L 11.21875 17.71875 Z"
    />
  </Svg>
);

export const ExternalLinkSquareAlt = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 25 7 L 25 25 L 7 25 Z M 13 10 L 13 12 L 18.5625 12 L 9.28125 21.28125 L 10.71875 22.71875 L 20 13.4375 L 20 19 L 22 19 L 22 10 Z"
    />
  </Svg>
);

export const GemSolid = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M 9.53125 6 L 4.21875 12.375 L 3.71875 12.96875 L 4.21875 13.625 L 15.21875 27.625 L 16 28.625 L 16.78125 27.625 L 27.78125 13.625 L 28.28125 12.96875 L 27.78125 12.375 L 22.46875 6 Z M 10.46875 8 L 14.125 8 L 11.4375 12 L 7.125 12 Z M 17.875 8 L 21.53125 8 L 24.875 12 L 20.5625 12 Z M 16 8.84375 L 18.125 12 L 13.875 12 Z M 7.03125 14 L 11.25 14 L 13.625 22.40625 Z M 13.3125 14 L 18.65625 14 L 16 23.3125 Z M 20.75 14 L 24.96875 14 L 18.375 22.375 Z"
    />
  </Svg>
);

export const PaperPlane = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M 3.59375 5.34375 L 4.03125 7.21875 L 5.96875 16 L 4.03125 24.78125 L 3.59375 26.65625 L 5.375 25.9375 L 27.375 16.9375 L 29.65625 16 L 27.375 15.0625 L 5.375 6.0625 Z M 6.375 8.65625 L 21.90625 15 L 7.78125 15 Z M 7.78125 17 L 21.90625 17 L 6.375 23.34375 Z"
    />
  </Svg>
);

export const Pen = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z"
    />
  </Svg>
);

export const PlayCircle = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 12 9.125 L 12 22.875 L 13.5 22 L 22.5 16.875 L 24 16 L 22.5 15.125 L 13.5 10 Z M 14 12.5625 L 19.96875 16 L 14 19.4375 Z"
    />
  </Svg>
);

export const Plus = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M 15 5 L 15 15 L 5 15 L 5 17 L 15 17 L 15 27 L 17 27 L 17 17 L 27 17 L 27 15 L 17 15 L 17 5 Z"
    />
  </Svg>
);

export const Rocket = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M 25.90625 4 C 25.210938 4 24.242188 4.03125 23.21875 4.125 C 21.171875 4.316406 18.808594 4.660156 17.34375 6.125 C 16.113281 7.355469 13.570313 10.621094 11.21875 13.6875 C 10.753906 14.292969 10.773438 14.28125 10.34375 14.84375 L 8.625 14.75 C 7.347656 14.683594 6.117188 15.222656 5.3125 16.21875 L 3.21875 18.78125 L 2.1875 20.09375 L 3.8125 20.40625 L 7.09375 21.0625 L 10.9375 24.90625 L 11.59375 28.1875 L 11.9375 29.8125 L 13.21875 28.78125 L 15.78125 26.6875 C 16.777344 25.882813 17.316406 24.652344 17.25 23.375 L 17.15625 21.6875 C 17.738281 21.246094 17.71875 21.257813 18.34375 20.78125 C 21.417969 18.425781 24.695313 15.898438 25.90625 14.6875 C 27.359375 13.234375 27.683594 10.835938 27.875 8.78125 C 28.066406 6.726563 27.96875 4.96875 27.96875 4.96875 L 27.9375 4.0625 L 27.03125 4.03125 C 27.03125 4.03125 26.601563 4 25.90625 4 Z M 25 6 C 25.398438 6 25.679688 6.023438 25.96875 6.03125 C 25.980469 6.613281 26.003906 7.21875 25.875 8.59375 C 25.699219 10.488281 25.121094 12.597656 24.46875 13.25 C 23.578125 14.140625 20.1875 16.839844 17.125 19.1875 C 14.417969 21.261719 12.511719 22.71875 11.96875 23.125 L 8.90625 20.0625 C 9.316406 19.511719 10.71875 17.597656 12.78125 14.90625 C 15.125 11.851563 17.832031 8.449219 18.75 7.53125 C 19.433594 6.847656 21.519531 6.269531 23.40625 6.09375 C 24.089844 6.03125 24.601563 6 25 6 Z M 20.4375 9.53125 C 19.320313 9.53125 18.4375 10.445313 18.4375 11.5625 C 18.4375 12.679688 19.320313 13.59375 20.4375 13.59375 C 21.554688 13.59375 22.46875 12.679688 22.46875 11.5625 C 22.46875 10.445313 21.554688 9.53125 20.4375 9.53125 Z M 8.5 16.75 L 8.875 16.78125 C 8.273438 17.578125 7.289063 18.855469 7.15625 19.03125 L 5.8125 18.75 L 6.84375 17.5 C 7.246094 17.003906 7.859375 16.714844 8.5 16.75 Z M 6.21875 21.9375 C 5.363281 22.792969 4.875 23.976563 4.53125 24.96875 C 4.1875 25.960938 4.03125 26.78125 4.03125 26.78125 L 3.71875 28.25 L 5.1875 27.96875 C 5.1875 27.96875 5.984375 27.832031 6.96875 27.5 C 7.953125 27.167969 9.136719 26.675781 10.03125 25.78125 L 8.625 24.375 C 8.179688 24.820313 7.296875 25.210938 6.5 25.5 C 6.804688 24.667969 7.25 23.722656 7.625 23.34375 Z M 15.21875 23.125 L 15.25 23.5 C 15.285156 24.140625 15.03125 24.753906 14.53125 25.15625 L 13.25 26.1875 L 12.96875 24.84375 C 13.144531 24.714844 14.421875 23.722656 15.21875 23.125 Z"
    />
  </Svg>
);

export const SignOut = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 20.050781 28 23.640625 25.988281 25.8125 22.90625 L 24.1875 21.75 C 22.378906 24.320313 19.390625 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 C 19.390625 6 22.375 7.679688 24.1875 10.25 L 25.8125 9.09375 C 23.640625 6.011719 20.050781 4 16 4 Z M 23.34375 11.28125 L 21.90625 12.71875 L 24.1875 15 L 12 15 L 12 17 L 24.1875 17 L 21.90625 19.28125 L 23.34375 20.71875 L 27.34375 16.71875 L 28.03125 16 L 27.34375 15.28125 Z"
    />
  </Svg>
);

export const Table = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 12 7 L 12 12 L 7 12 Z M 14 7 L 18 7 L 18 12 L 14 12 Z M 20 7 L 25 7 L 25 12 L 20 12 Z M 7 14 L 12 14 L 12 18 L 7 18 Z M 14 14 L 18 14 L 18 18 L 14 18 Z M 20 14 L 25 14 L 25 18 L 20 18 Z M 7 20 L 12 20 L 12 25 L 7 25 Z M 14 20 L 18 20 L 18 25 L 14 25 Z M 20 20 L 25 20 L 25 25 L 20 25 Z"
    />
  </Svg>
);

export const Tools = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M 5.25 2.75 L 4.6875 3.28125 L 3.28125 4.6875 L 2.75 5.25 L 3.15625 5.90625 L 5.25 9.40625 L 5.53125 9.90625 L 8.46875 9.90625 L 12.46875 13.875 C 8.894531 17.464844 4.347656 22.027344 4.1875 22.1875 C 2.621094 23.753906 2.617188 26.320313 4.21875 27.8125 C 5.78125 29.355469 8.328125 29.394531 9.8125 27.8125 C 9.824219 27.800781 9.832031 27.792969 9.84375 27.78125 L 16 21.59375 L 22.1875 27.8125 L 22.28125 27.875 C 23.851563 29.355469 26.347656 29.375 27.8125 27.8125 L 27.8125 27.78125 L 27.84375 27.78125 C 29.375 26.214844 29.390625 23.667969 27.8125 22.1875 L 27.78125 22.15625 L 22.5625 16.96875 C 26.074219 16.640625 28.824219 13.675781 28.875 10.09375 L 28.90625 10.09375 C 28.910156 10.074219 28.90625 10.050781 28.90625 10.03125 C 28.90625 10.019531 28.90625 10.011719 28.90625 10 C 29.003906 8.84375 28.753906 7.738281 28.15625 6.78125 L 27.46875 5.71875 L 22.8125 10.375 L 21.40625 8.90625 L 26.15625 4.15625 L 24.78125 3.59375 C 23.976563 3.25 23.046875 3 22 3 C 18.15625 3 15 6.15625 15 10 C 15 10.417969 15.089844 10.78125 15.15625 11.15625 C 14.71875 11.59375 14.390625 11.953125 13.875 12.46875 L 9.90625 8.5 L 9.90625 5.53125 L 9.40625 5.25 L 5.90625 3.15625 Z M 22 5 C 22.140625 5 22.238281 5.082031 22.375 5.09375 L 18.59375 8.875 L 19.28125 9.59375 L 22.09375 12.5 L 22.78125 13.21875 L 26.75 9.25 C 26.769531 9.480469 26.933594 9.648438 26.90625 9.90625 L 26.90625 10 C 26.90625 12.753906 24.660156 15 21.90625 15 C 21.539063 15 21.09375 14.914063 20.59375 14.8125 L 20.0625 14.71875 L 19.6875 15.09375 L 8.40625 26.40625 L 8.375 26.40625 L 8.375 26.4375 C 7.664063 27.214844 6.421875 27.234375 5.59375 26.40625 L 5.59375 26.375 L 5.5625 26.375 C 4.785156 25.664063 4.765625 24.421875 5.59375 23.59375 C 5.972656 23.214844 13.3125 15.8125 16.90625 12.21875 L 17.3125 11.8125 L 17.15625 11.25 C 17.074219 10.925781 17 10.367188 17 10 C 17 7.246094 19.246094 5 22 5 Z M 5.5625 5.25 L 7.90625 6.6875 L 7.90625 7.6875 L 7.6875 7.90625 L 6.6875 7.90625 L 5.25 5.5625 Z M 20.1875 17.40625 L 26.40625 23.59375 L 26.40625 23.625 L 26.4375 23.625 C 27.214844 24.335938 27.234375 25.578125 26.40625 26.40625 L 26.375 26.40625 L 26.375 26.4375 C 25.664063 27.214844 24.421875 27.234375 23.59375 26.40625 L 17.40625 20.1875 Z"
    />
  </Svg>
);

export const UserFriends = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M 9 7 C 5.699219 7 3 9.699219 3 13 C 3 14.984375 3.976563 16.75 5.46875 17.84375 C 2.832031 19.152344 1 21.863281 1 25 L 3 25 C 3 21.675781 5.675781 19 9 19 C 12.324219 19 15 21.675781 15 25 L 17 25 C 17 21.675781 19.675781 19 23 19 C 26.324219 19 29 21.675781 29 25 L 31 25 C 31 21.863281 29.167969 19.152344 26.53125 17.84375 C 28.023438 16.75 29 14.984375 29 13 C 29 9.699219 26.300781 7 23 7 C 19.699219 7 17 9.699219 17 13 C 17 14.984375 17.976563 16.75 19.46875 17.84375 C 18.011719 18.566406 16.789063 19.707031 16 21.125 C 15.210938 19.707031 13.988281 18.566406 12.53125 17.84375 C 14.023438 16.75 15 14.984375 15 13 C 15 9.699219 12.300781 7 9 7 Z M 9 9 C 11.222656 9 13 10.777344 13 13 C 13 15.222656 11.222656 17 9 17 C 6.777344 17 5 15.222656 5 13 C 5 10.777344 6.777344 9 9 9 Z M 23 9 C 25.222656 9 27 10.777344 27 13 C 27 15.222656 25.222656 17 23 17 C 20.777344 17 19 15.222656 19 13 C 19 10.777344 20.777344 9 23 9 Z"
    />
  </Svg>
);
