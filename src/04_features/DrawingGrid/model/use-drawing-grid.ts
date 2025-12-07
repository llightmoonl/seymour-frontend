// types
import { DrawingGrid } from './types';

// lib
import { clone2DArray } from '@shared/lib/array';

export function useDrawingGrid({ grid, setGrid }: DrawingGrid) {
    const paintOverCell = (rowIndex: number, columnIndex: number) => {
        const updatedGrid = clone2DArray(grid);
        updatedGrid[rowIndex][columnIndex] = Number(!updatedGrid[rowIndex][columnIndex]);
        setGrid(updatedGrid);
    };

    return {
        paintOverCell,
    };
}
