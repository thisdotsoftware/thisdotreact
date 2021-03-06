import { useLocation } from "react-router";

export const useQueryParams = (): URLSearchParams => {
  return new URLSearchParams(useLocation().search);
};
