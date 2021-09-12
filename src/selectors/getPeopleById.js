import { useContext } from "react";
import { Context } from "../store/appContext";


export const getPeopleByName = (name) => {

    const { people: { data } } = useContext(Context)

    return data.results.filter(char => char.name === name)
}