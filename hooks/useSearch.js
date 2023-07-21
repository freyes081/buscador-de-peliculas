import { useEffect, useRef, useState } from "react";


export function useSearch(){
    const [search, updateSearch] = useState("");
    const [error, setError] = useState(null);
    const isFirstInput = useRef(true); 

    useEffect (()=>{
        if(isFirstInput.current){
            isFirstInput.current = search === "";
            return;
        }
        if(search.length === 0){
            setError("No se puede buscar una película vacía.");
            return;
        }
        if(search.match(/^\d+$/)){
            setError("No se puede buscar una película con números.");
            return;
        }
        if(search.length < 3){
            setError("No se puede buscar una película con menos de 3 caracteres.");
            return;
        }
        setError(null);
    }, [search]);
    return {
        search, updateSearch, error
    }
}