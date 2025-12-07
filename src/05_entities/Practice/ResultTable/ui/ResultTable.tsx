import { FC } from 'react';

import { ResultTableProps } from '../model/types';

export const ResultTable: FC<ResultTableProps> = ({ data, topLabel, leftLabel }) => {
    return (
        // <div className={Styles.table}>
        //     <div className={Styles.table__title}>
        //         <div className={Styles.title}></div>
        //         {Array(data.length)
        //             .fill(0)
        //             .map((_, index) => (
        //                 <div key={index} className={Styles.title}>
        //                     <div className={Styles.text}>{leftLabel}</div>
        //                     <div className={Styles.number}>{index + 1}</div>
        //                 </div>
        //             ))}
        //     </div>
        //
        //     {data.map((element, elementIndex) => (
        //         <div key={elementIndex} className={Styles.rows}>
        //             <div className={Styles.rows__title}>{`${topLabel} ${elementIndex + 1}`}</div>
        //             {element.x.flat().map((value, valueIndex) => (
        //                 <div key={valueIndex} className={Styles.column}>
        //                     {value}
        //                 </div>
        //             ))}
        //         </div>
        //     ))}
        // </div>
        <table>
            <thead></thead>
            <tbody></tbody>
        </table>
    );
};
