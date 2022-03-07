import axios from "axios";
import { ReactElement } from "react";
import endpoint from "../endpoints.config";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async url => {
	const { data } = await axios.get(url, {
		headers: {
			"x-rapidapi-host": "bayut.p.rapidapi.com",
			"x-rapidapi-key": endpoint.ApiKey,
		},
	});

	return data;
};
