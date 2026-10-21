export default function Header() {
  return (
    <>
      <header className="header-container">
        <img src="/images/chef-claude.png" alt="chef claude's logo" />
        <p>chef claude</p>
      </header>

      {/* // Input section. */}
      <div className="header-input">
        <input type="text" className="input-text" placeholder="e.g. oregano"/>
        <input type="submit" className="submit-button" value='+ Add ingridient'/>
      </div>
    </>
  );
}
