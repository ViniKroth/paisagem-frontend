import axios from "axios";
import * as crypto from "crypto-js";
import { api } from "configs/";
import { HTTPStatusCodes } from "configs/constants";
//import * as querystring from 'querystring'

export const create = async especie => {
  const params = {
    ...especie
  };
  console.log(params);
  const response = await axios({
    method: "post",
    url: `${api}/especies`,
    data: params,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });

  if (response) {
    const api_response = response.data;
    if (api_response.data) {
      return response.data;
    } else {
      return {
        statusDesc: "Erro obtendo resposta do servidor.",
        statusCode: HTTPStatusCodes.InternalServerError
      };
    }
  }
};

export const read = async id => {
  const response = await axios({
    method: "get",
    url: `${api}/especies/${id}`,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });

  console.log(response)

  if (response) {
    const api_response = response.data;
    return api_response;
  } else {
    return {
      statusDesc: "Erro obtendo resposta do servidor.",
      statusCode: HTTPStatusCodes.InternalServerError
    };
  }
};

export const update = async especie => {
  const params = {
    ...especie
  };

  console.log(params);
  const response = await axios({
    method: "put",
    url: `${api}/especies`,
    data: params,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });

  if (response) {
    const api_response = response.data;
    if (api_response.data) {
      return response.data;
    } else {
      return {
        statusDesc: "Erro obtendo resposta do servidor.",
        statusCode: HTTPStatusCodes.InternalServerError
      };
    }
  }
};

export const listAll = async () => {
  const response = await axios({
    method: "get",
    url: `${api}/especies/`,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });

  if (response) {
    const api_response = response.data;
    return api_response;
  } else {
    return {
      statusDesc: "Erro obtendo resposta do servidor.",
      statusCode: HTTPStatusCodes.InternalServerError
    };
  }
};
