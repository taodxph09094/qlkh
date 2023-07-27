import { useCallback, useEffect, useState } from "react";
import * as httpServices from "../../services/httpServices";

export const usePatchData = (
  url,
  isNeedToken = true,
  requestData = null,
  isReload,
  isRunFirst = true,
  success = null,
  fail = null
) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (isRunFirst) {
      _patchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReload, isRunFirst]);

  const _resetData = useCallback(() => {
    setData(null);
  }, []);

  const _patchData = async (customUrl = null, customData = null) => {
    let endpoint = "";

    if (customUrl) {
      endpoint = customUrl;
    } else {
      endpoint = url;
    }
    setIsLoading(true);
    try {
      const response = await httpServices.patchData(
        endpoint,
        customData ? customData : requestData
      );
      console.log(response);
      setIsLoading(false);
      setData(response);
      if (typeof success === "function") {
        success(response);
      }
    } catch (err) {
      setError(err);
      setIsLoading(false);
      if (typeof fail === "function") {
        fail(err);
      }
    }
  };

  return { isLoading, data, error, _patchData, _resetData };
};
