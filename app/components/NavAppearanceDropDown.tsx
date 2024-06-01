function AppearanceDropDownItem({
  option,
  isDefault = false,
}: {
  option: string;
  isDefault?: boolean;
}) {
  const optionLower = option.toLowerCase();

  return (
    <div
      className={`appearance-drop-down-item ${isDefault ? "selected" : ""}`}
      id={`appearance-drop-down-item-${optionLower}`}
      tabIndex={0}
    >
      <img
        src={`icons/appearance-drop-down-icon-${optionLower}-light-mode.svg`}
        alt=""
        draggable="false"
        className="appearance-drop-down-icon appearance-drop-down-icon-light-mode"
      />
      <img
        src={
          optionLower === "system"
            ? `icons/appearance-drop-down-icon-${optionLower}-dark-mode.png`
            : `icons/appearance-drop-down-icon-${optionLower}-dark-mode.svg`
        }
        alt=""
        draggable="false"
        className="appearance-drop-down-icon appearance-drop-down-icon-dark-mode"
      />
      <div className="button-text">{option}</div>
    </div>
  );
}

function AppearanceDropDown() {
  return (
    <div className="hidden" id="appearance-drop-down">
      <div className="card-border"></div>
      <AppearanceDropDownItem option="System" isDefault={true} />
      <AppearanceDropDownItem option="Light" />
      <AppearanceDropDownItem option="Dark" />
    </div>
  );
}

export default AppearanceDropDown;
