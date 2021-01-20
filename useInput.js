export const useInput = (initialValue, validation) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
      const {
        target: { value }
      } = e;
  
      let willUpdate = true;
      if (typeof validation === "function") {
        willUpdate = validation(value);
      }
      if (willUpdate) {
        setValue(value);
      }
    };
    return { value, onChange };
  };