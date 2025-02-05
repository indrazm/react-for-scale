import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../shared/utils/queryClient";

export const Providers = ({ children }: React.PropsWithChildren) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
