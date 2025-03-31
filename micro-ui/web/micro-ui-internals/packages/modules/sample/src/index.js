import { WaterService } from "./services/waterService";

// Add this to your existing module initialization
(() => {
  // Register the water service
  Digit.WSService = WaterService;
})();

// ... rest of the existing code
