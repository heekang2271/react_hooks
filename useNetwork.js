export const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
  
      if(typeof onChange === "function") {
        setStatus(navigator.onLine);
      }
    }
  
    useEffect(() => {
      window.addEventListener("online", handleChange);
      window.addEventListener("offline", handleChange);
    }, []);
    return status;
  }