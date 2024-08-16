import Routes from "./routes"
import { ThemeProvider } from "@/components/theme-provider"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "./components/ui/sonner";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 100 * 60 * 60 * 24
      }
    }
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Routes />
        <Toaster position="top-right" expand={false} richColors={true} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
