export const useTabs = (initialTab, allTabs) => {
    if (!allTabs && !Array.isArray(allTabs)) {
      return;
    }
    const [current, setCurrent] = useState(initialTab);
  
    return {
      currentItem: allTabs[current],
      changeItem: setCurrent
    };
  }