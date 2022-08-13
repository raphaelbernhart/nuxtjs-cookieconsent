const cssHelper = (styles) => {
  const rootElement = document.querySelector(":root");
  const darkRootElement = document.querySelector(".c_darkmode");
  const updateCssVariable = (name, value, parentElement) => {
    parentElement?.style.setProperty(name, value);
  };
  const parseCssVariableName = (optionName) => {
    const prefix = "--cc";
    if (typeof optionName !== "string")
      return;
    const splittedOptionName = optionName.split(/(?=[A-Z])/);
    const lowerCaseSplittedOptionName = splittedOptionName.map((item) => {
      return `-${item.toLowerCase()}`;
    });
    return prefix + lowerCaseSplittedOptionName.join("");
  };
  const optionsArray = Object.entries(styles);
  for (let i = 0; optionsArray.length > i; i++) {
    const key = optionsArray[i][0];
    const value = optionsArray[i][1];
    if (key === "dark") {
      const darkStylesArray = Object.entries(optionsArray[i][1]);
      for (let darkI = 0; darkStylesArray.length > darkI; darkI++) {
        const darkStylesKey = darkStylesArray[darkI][0];
        const darkStylesValue = darkStylesArray[darkI][1];
        if (darkStylesKey === "enabledByDefault")
          continue;
        const parsedDarkStyleKey = parseCssVariableName(darkStylesKey);
        updateCssVariable(
          parsedDarkStyleKey,
          darkStylesValue,
          darkRootElement
        );
      }
      continue;
    }
    const parsedKey = parseCssVariableName(key);
    updateCssVariable(parsedKey, value, rootElement);
  }
};
export default cssHelper;
