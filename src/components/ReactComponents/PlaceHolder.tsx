const PlaceHolderImage = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
      <rect width="100%" height="100%" fill="#f0f0f0" />

      <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="10" height="10">
        <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#d0d0d0" strokeWidth={2} />
      </pattern>

      <rect width="100%" height="100%" fill="url(#diagonalHatch)" />

      <g transform="translate(150, 100)">
        <path d="M50 0 L100 100 L0 100 Z" fill="#a0a0a0" opacity="0.5" />
        <circle cx="25" cy="25" r="20" fill="#a0a0a0" opacity="0.5" />
      </g>

      <text x="200" y="250" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fill="#888">
        Trabajando en la imagen
      </text>
    </svg>
  );
};

export default PlaceHolderImage;
