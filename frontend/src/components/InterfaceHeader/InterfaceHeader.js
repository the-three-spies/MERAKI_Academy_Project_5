import "./interfaceHeader.css";
// this comp.  need to make a background img ..> for interface app 100vh-100px
// put search box
// put interface title in interface bg
const InterfaceHeader = () => {
  return (
    <div className="interface-header">
      <div className="search-box">
        <div className="input-wrapper">
          <i className="bi bi-search"></i>
          <input
            className="search-box-input"
            type="search"
            placeholder="search .."
          />
        </div>
        <button className="search-box-btn">Search</button>
      </div>
      <div className="interface-header-title">
        <h1>Fitrat Insan</h1>
        <h2>Donation Community </h2>
      </div>
    </div>
  );
};
export default InterfaceHeader;
/**
 * div
 * 1. interface-header ..> bg
 * 2. search ..>input btn icon
 * 3. title
 * div
 */
