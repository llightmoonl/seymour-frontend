export interface DrawingGrid {
    grid: number[][];
    setGrid: (value: number[][]) => void;
}

export interface DrawingGridProps extends DrawingGrid{
    className?: string;
    disabled?: boolean;
}