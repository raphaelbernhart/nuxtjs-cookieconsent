const updateCssVariable = (
    name: string,
    value: string,
    parentElement: HTMLElement,
) => {
    parentElement?.style.setProperty(name, value);
};

const parseCssVariableName = (optionName: string): string => {
    const prefix = '--cc';
    if (typeof optionName !== 'string') return '';

    const splittedOptionName = optionName.split(/(?=[A-Z])/);
    const lowerCaseSplittedOptionName = splittedOptionName.map((item) => {
        return `-${item.toLowerCase()}`;
    });
    return prefix + lowerCaseSplittedOptionName.join('');
};

const cssHelper = (styles: Record<string, any>) => {
    const rootElement: HTMLElement | null = document.querySelector(':root');
    const darkRootElement: HTMLElement | null =
        document.querySelector('.c_darkmode');

    if (!rootElement && !darkRootElement) return;

    const optionsArray = Object.entries(styles);
    for (let i = 0; optionsArray.length > i; i++) {
        const key = optionsArray[i][0];
        const value = optionsArray[i][1];

        // Jump iteration if key is dark
        if (key === 'dark') {
            const darkStylesArray = Object.entries(optionsArray[i][1]);
            for (let darkI = 0; darkStylesArray.length > darkI; darkI++) {
                const darkStylesKey = darkStylesArray[darkI][0];
                const darkStylesValue = darkStylesArray[darkI][1];

                if (darkStylesKey === 'enabledByDefault') continue;

                const parsedDarkStyleKey = parseCssVariableName(darkStylesKey);

                if (!darkStylesValue || typeof darkStylesValue !== 'string')
                    continue;

                if (!darkRootElement) continue;

                updateCssVariable(
                    parsedDarkStyleKey,
                    darkStylesValue,
                    darkRootElement,
                );
            }
            continue;
        }

        const parsedKey = parseCssVariableName(key);

        if (!rootElement) continue;
        updateCssVariable(parsedKey, value, rootElement);
    }
};

export default cssHelper;
