export function useSiteStatus() {
	const config = useRuntimeConfig();
	const isDevelopment = () => {
		return config.public.siteStatus === "development";
	};

	return {
		isDevelopment,
	};
}
