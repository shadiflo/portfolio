const DiamondIcon = props => {
    return (
      <svg
        width={20}
        height={20}
        className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
        viewBox="0 0 40 40"
        fill="currentColor"
        {...props}
      >
        {/* Diamond shape */}
        <path
          d="M20 2L4 15L20 38L36 15L20 2Z"
          fill="currentColor"
        />
        {/* Optional inner detail to give it some dimension */}
        <path
          d="M20 10L10 18L20 34L30 18L20 10Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.7"
        />
      </svg>
    )
  }

  export default DiamondIcon
