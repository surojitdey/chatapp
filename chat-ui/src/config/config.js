const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const config = {
  baseUrl,
  endpoints: {
    chatbot: baseUrl+"/"
  },
};

export default config;
