const create = async (data, tenantId) => {
  try {
    const response = await Digit.PaymentService.apiCall({
      url: "/ws-services/wc/_create",
      method: "POST",
      data: {
        ...data,
        tenantId,
      },
      auth: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const search = async (data) => {
  try {
    const response = await Digit.PaymentService.apiCall({
      url: "/ws-services/wc/_search",
      method: "POST",
      data,
      auth: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const wsCalculationEstimate = async (data, businessService) => {
  try {
    const response = await Digit.PaymentService.apiCall({
      url: `/ws-calculator/waterCalculator/_estimate`,
      method: "POST",
      data,
      auth: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const WaterService = {
  create,
  search,
  wsCalculationEstimate,
};
