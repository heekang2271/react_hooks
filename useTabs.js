const useTabs = (initialTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
      return;
    }
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
      currentTab: allTabs[currentIndex],
      changeTab: setCurrentIndex
    }
  }