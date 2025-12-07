import { FC } from 'react';

// styles
import { styles } from './DrawingGridStyles';

// hooks
import { useDrawingGrid } from '../model/use-drawing-grid';

// types
import { DrawingGridProps } from '../model/types';

// lib
import { cn } from '@shared/lib/utils';

// constants
import { TAB_NO_FOCUS, TAB_FOCUS } from '@shared/constants/a11y';

export const DrawingGrid: FC<DrawingGridProps> = ({ className, grid, setGrid, disabled }) => {
    const { paintOverCell } = useDrawingGrid({ grid, setGrid });

    // TODO: feature - реализовать зажатие мыши, чтоб закрашивать другие ячейки
    return (
        <table className={cn(styles.root(), className)}>
            <tbody>
                {grid.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((column, columnIndex) => (
                            <td
                                key={columnIndex}
                                aria-label={`Ячейка ${rowIndex + 1}-${columnIndex + 1} - ${column ? 'закрашена' : 'пустая'}`}
                                aria-disabled={disabled}
                                tabIndex={disabled ? TAB_NO_FOCUS : TAB_FOCUS}
                                onClick={() => !disabled && paintOverCell(rowIndex, columnIndex)}
                                className={styles.column({ filled: Boolean(column), disabled })}></td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
