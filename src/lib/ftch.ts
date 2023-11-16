const request = async (
	method: string,
	url: string,
	params?: Record<string, any>,
	headers: Record<string, string> = {}
) => {
	let options: any = {
		method: method,
		headers: {
			"Content-Type": "application/json",
			...headers,
		},
	};

	let requestUrl = url;
	if (method.toUpperCase() === "GET") {
		requestUrl += `?${new URLSearchParams(params).toString()}`;
	} else {
		options = { ...options, body: JSON.stringify(params) };
	}

	// console.log(options);
	return await fetch(requestUrl, options);
}

const ftch = {
	get: async (endpoint: string, params?: Record<string, any>) => {
		const res = await request("GET", endpoint, params);
		const data = await res.json();
		if (res.ok) {
			return data;
		} else {
			const error = Error(data.message);
			error.code = res.status;
			throw error;
		}
	},
	post: async (endpoint: string, body?: Record<string, any>) => {
		const res = await request("POST", endpoint, body);
		const data = await res.json();
		if (res.ok) {
			return data;
		} else {
			const error = Error(data.message);
			error.code = res.status;
			throw error;
		}
	},
	put: async (endpoint: string, body?: Record<string, any>) => {
		const res = await request("PUT", endpoint, body);
		const data = await res.json();
		if (res.ok) {
			return data;
		} else {
			const error = Error(data.message);
			error.code = res.status;
			throw error;
		}
	},
	delete: async (endpoint: string, body?: Record<string, any>) => {
		const res = await request("DELETE", endpoint, body);
		const data = await res.json();
		if (res.ok) {
			return data;
		} else {
			const error = Error(data.message);
			error.code = res.status;
			throw error;
		}
	},
}

export default ftch;