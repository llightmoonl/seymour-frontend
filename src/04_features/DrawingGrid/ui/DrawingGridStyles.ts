import { cva } from 'class-variance-authority';

export const styles = {
    root: cva(['drawing-grid', 'border-collapse table-fixed']),
    column: cva(
        [
            'drawing-grid__column',
            //TODO: fix - избавиться от абсолютных величин заменить относительными
            'w-[70px] h-[80px] border border-black dark:border-white',
        ],
        {
            variants: {
                filled: {
                    true: 'bg-black dark:bg-white',
                },
                disabled: {
                    true: 'pointer-none cursor-not-allowed',
                },
            },
        },
    ),
};
