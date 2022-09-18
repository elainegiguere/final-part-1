import { useEffect, useState } from "react";
import PeoplesService from "../service/PeoplesService";

const peoplesService = new PeoplesService();

const useFetchPeoples = () => {
    const [data, setData] = useState([]);

    const getPeoples = async ()=> {
        const data = await peoplesService.getPeoples();
        setData(data.peoples);
    }

    useEffect(()=> {
        getPeoples();
    }, []);

    return data;
}

export default useFetchPeoples;