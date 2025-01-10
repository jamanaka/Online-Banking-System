function AppsMenuIcon() {
  
  return (
    <div>
      <svg
        className=""
        id="taggleButton"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="30"
        height="30"
        fill="currentColor"
      >
        {/* Row 1 */}
        <circle cx="5" cy="6" r="2" />
        <circle cx="12" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        {/* Row 2 */}
        <circle cx="5" cy="12" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="19" cy="12" r="2" />
        {/* Row 3 */}
        <circle cx="5" cy="18" r="2" />
        <circle cx="12" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
      </svg>
    </div>
  );
}

export default AppsMenuIcon;
