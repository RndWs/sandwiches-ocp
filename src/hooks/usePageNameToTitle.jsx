
import { useEffect } from "react";
import useSharedPropsStore from "../store/store";

function usePageNameToTitle( pageName ) {

  const { projectName } = useSharedPropsStore();

  useEffect(() => {
    // console.log(`projectName: ${projectName}`);
    // console.log(`pageName: ${pageName}`);
    document.title = `${projectName} ${pageName!=="" ? `- ${pageName}` : ""}`;
  }, []);

  return null

}

export default usePageNameToTitle