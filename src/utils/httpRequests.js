import {useEffect, useState} from "react";
import axios from 'axios';

export const Get = (url) => {
    return axios.get(url);
};