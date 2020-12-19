interface AwTable extends HTMLElement {
    table: HTMLTableElement;
    head: {
        element: HTMLElement,
        cells: Array<HTMLTableHeaderCellElement>
    },
    body: {
        element: HTMLElement,
        rows: {
            element: HTMLTableRowElement,
            cells: Array<HTMLTableCellElement>
        }
    },
    footer: {
        element: HTMLElement,
        cells: Array<HTMLTableDataCellElement>
    },

    /**
     * @method  sort
     * 
     * Sort table for column
     * 
     * @param column Column number to sort 
     * @param dir Direction of order
     */
    sort( column: number, dir: string ) : void
}

declare var AwTable: {
	prototype: AwTable,
	new(): AwTable
}