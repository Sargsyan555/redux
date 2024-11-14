import { useEffect, useState } from "react";
import { IRate } from "../../features/products/types";
import { useAppDispatch } from "../../api/hooks";
import { updateRate } from "../../features/products/productsSlice";

export const Rating:React.FC<IRate> = ({id, rate}) => {
    const dispatch  = useAppDispatch()
    const filled = 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-512.png';
    const empty = 'https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-19-512.png'
    const  [rating, setRating] = useState<number[]>([0,0,0,0,0]);

    const loadDefaultRate = () => {
        const temp = [...rating];
        temp.fill(1, 0, rate);
        temp.fill(0, rate)
        setRating(temp);
    }
    const showTmpRate = (value:number) => {
        const temp = [...rating];
        temp.fill(1, 0, value);
        temp.fill(0, value)
        setRating(temp);
    }
    useEffect(() => {
        loadDefaultRate()
    }, [])
    return<div>
         {
            rating.map((elem, i) => 
                <img 
                    style={{cursor:"pointer"}}
                    key={i}
                    width={40}
                    height={40}
                    src={elem === 0 ? empty : filled}
                    onMouseLeave={loadDefaultRate}
                    onMouseEnter={() => showTmpRate(i + 1)}
                    onClick={() => dispatch(updateRate({id, rate: i + 1}))}
                    />
                )
         }
        
    </div>
}