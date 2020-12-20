import {
  PolymerElement,
  html,
} from "../aw_polymer_3/polymer/polymer-element.js";
import "../aw_polymer_3/iron-icons/iron-icons.js";

/**
 * @class AwTable
 *
 */
class AwTable extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
			display: block;
			position: relative;
			width: 100%;
        }
		div#container {
			position: relative;
			width: 100%;
		}
        table {
			border-collapse: var(--aw-table-border-collapse, collapse);
			border-spacing: var(--aw-table-spacing, 0);
			box-sizing: border-box;
			display: block;
			font-family: var(--aw-table-font-family, Arial);
			overflow-x: auto;
          	width: 100%;
        }
        th {
          background-color: var(
            --aw-table-header-background-color,
            transparent
          );
          border-bottom: var(
            --aw-table-header-border-bottom,
            var(--aw-table-header-border, solid 1px #ddd)
          );
          border-left: var(
            --aw-table-header-border-left,
            var(--aw-table-header-border, none)
          );
          border-right: var(
            --aw-table-header-right,
            var(--aw-table-header-border, none)
          );
          border-top: var(
            --aw-table-header-top,
            var(--aw-table-header-border, none)
          );
          color: var(--aw-table-header-color, #888);
          margin: 0;
          padding: 0;
          position: sticky;
          top: 0;
        }
        th > div {
          box-sizing: border-box;
          font-size: var(--aw-table-header-font-size, 14px);
          font-weight: var(--aw-table-header-font-weight, bold);
          padding: var(--aw-table-header-padding, 0.5em 0.5em 0.2em 0.5em);
          text-align: var(--aw-table-header-text-align, left);
        }
        th:nth-child(1) > div {
          padding: var(--aw-table-header-first-padding, 0.5em 0.5em 0.2em 0);
        }
        th .aw-sort-icon {
          background-color: var(--aw-table-header-background-color, white);
          bottom: var(--aw-table-sortale-icon-bottom, 0.2em);
          fill: var(--aw-table-sortable-icon-color, #999);
          height: var(--aw-table-sortable-icon-size, 16px);
          position: absolute;
          right: var(--aw-table-sortable-icon-right, 5px);
          width: var(--aw-table-sortable-icon-size, 16px);
        }
        td {
          border-bottom: var(
            --aw-table-cell-border-bottom,
            var(--aw-table-cell-border, none)
          );
          border-left: var(
            --aw-table-cell-border-bottom,
            var(--aw-table-cell-border, none)
          );
          border-right: var(
            --aw-table-cell-border-bottom,
            var(--aw-table-cell-border, none)
          );
          border-top: var(
            --aw-table-cell-border-bottom,
            var(--aw-table-cell-border, none)
          );
          color: var(--aw-table-cell-color, #333);
          font-size: var(--aw-table-cell-font-size, 16px);
          margin: 0;
          padding: 0;
        }
        td > div {
          box-sizing: border-box;
          position: relative;
          padding: var(--aw-table-cell-padding, 0.5em);
        }
        td:nth-child(1) > div {
          padding: var(--aw-table-cell-first-padding, 0.5em 0.5em 0.5em 0.1em);
        }

        [sticky] th {
          background-color: var(--aw-table-header-background-color, white);
          position: sticky;
          top: 0;
          z-index: 1;
        }

        [mark-row] tbody tr:nth-of-type(2n) {
          color: var(
            --aw-table-row-mark-color,
            var(--aw-table-cell-color, #333)
          );
          background-color: var(--aw-table-row-mark-background-color, #f6f6f6);
        }
        [mark-column] tbody td:nth-of-type(2n) {
          color: var(
            --aw-table-column-mark-color,
            var(--aw-table-cell-color, #333)
          );
          background-color: var(
            --aw-table-column-mark-background-color,
            #f6f6f6
          );
        }

        [row-effect] tbody tr,
        [row-effect] tbody td {
          transition: color 0.3s, background 0.3s;
        }
        [row-effect] tbody tr:hover {
          background-color: var(
            --aw-table-cell-background-color-hover,
            #e6e6e6
          );
        }
        [sortable] {
          cursor: pointer;
          transition: color 0.3s;
        }
        [sortable] .aw-sort-icon {
          transition: fill 0.3s;
        }
        [sortable]:hover {
          color: var(--aw-table-sortable-color-hover, #666);
        }
        [sortable]:hover .aw-sort-icon {
          fill: var(--aw-table-sortable-color-hover, #666);
        }
        [nowrap] > div,
        td [nowrap] {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      </style>
      <div id="container"></div>
    `;
  }

  static get properties() {
    return {
      table: { type: HTMLTableElement, value: null },
      head: { type: HTMLElement, value: null },
      headCells: { type: Array, value: [] },
      rows: { type: Array, value: [] },

      "mark-row": { type: Boolean, value: false },
      "mark-column": { type: Boolean, value: false },
      "row-effect": { type: Boolean, value: false },
      sticky: { type: Boolean, value: false },
      sortbycolumn: { type: Number, value: null },
      sortdir: { type: String, value: "asc" },
    };
  }

  constructor() {
    super();

    /** @type {HTMLTableElement} */
    this.table = null;
    /** @type {{element:HTMLElement,cells:HTMLElement[]}} */
    this.head = {};
    /** @type {{element:HTMLElement,rows:{ element: HTMLElement, cells:HTMLElement[]}[]}} */
    this.body = {};
    /** @type {{element:HTMLElement,cells:HTMLElement[]}} */
    this.footer = {};
    /** @type {number[]} */
    this.columnsWidht = [];

    this.function = {
      /** @param {event} ev */
      sortable: (ev) => {
        this.sortClick(ev.currentTarget);
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();

    //Resolvemos el componente
    this.removeAttribute("unresolved");

    // Inicializamos
    this.init();
  }

  disconectedCallback() {
    super.disconectedCallback();

    this.unsetListeners();
  }

  /**
   * @method	getChildren
   *
   * Obtiene la tabla del interior del componente
   */
  getChildren() {
    this.table = this.firstElementChild;
  }

  /**
   * @method	getColumnsWidhts
   *
   * Obtiene los anchos de las columnas
   */
  getColumnsSizes() {
    if (this.head.element) {
      this.head.cells.forEach((cell, c) => {
        this.columnsWidht[c] = cell.hasAttribute("width")
          ? cell.getAttribute("width")
          : null;
      });
    } else {
      this.body.rows[0].cells.forEach((cell, c) => {
        this.columnsWidht[c] = cell.hasAttribute("width")
          ? cell.getAttribute("width")
          : null;
      });
    }
  }

  /**
   * @method	init
   *
   * Inicializa al componente
   */
  init() {
    this.getChildren();

    if (this.table.tagName !== "TABLE") {
      console.error("[aw-table]: First child of aw-table must be a <table>");
      return;
    }

    if (!this.parseTable()) {
      return;
    }

    this.getColumnsSizes();
    this.innerConstruct();
    this.putTableAttributes();
    this.putSortableIcons();
    this.sortOnLoad();
    this.putChildren();
    this.setListeners();
  }

  /**
   * @method	innerConstruct
   *
   * Construye el interior de la tabla para aplicar el funcionamiento deseado
   */
  innerConstruct() {
    this.head.cells.forEach((cell, c) => {
      cell.setAttribute("nowrap", "");
      cell.setAttribute("title", cell.innerHTML);
      cell.innerHTML = `<div style="${
        this.columnsWidht[c] ? `width: ${this.columnsWidht[c]}` : ``
      }">${cell.innerHTML}</div>`;
    });

    this.body.rows.forEach((row) => {
      row.cells.forEach((cell, c) => {
        cell.innerHTML = `<div style="${
          this.columnsWidht[c] ? `width: ${this.columnsWidht[c]}` : ``
        }">${cell.innerHTML}</div>`;
      });
    });

    this.footer.cells.forEach((cell, c) => {
      cell.innerHTML = `<div style="${
        this.columnsWidht[c] ? `width: ${this.columnsWidht[c]}` : ``
      }">${cell.innerHTML}</div>`;
    });
  }

  /**
   * @method	parseTable
   *
   * Pasa la tabla a las propiedades de la clase
   *
   * @returns {boolean}
   */
  parseTable() {
    if (!this.parseHead()) {
      return false;
    }
    if (!this.parseBody()) {
      return false;
    }
    if (!this.parseFooter()) {
      return false;
    }

    return true;
  }

  /**
   * @method	parseBody
   *
   * Pasa el cuerpo a las propiedades de la clase
   *
   * @returns {boolean}
   */
  parseBody() {
    this.body.element = this.table.querySelector("tbody");
    this.body.rows = [];

    if (!this.body.element) {
      return true;
    }

    let rows = this.body.element.querySelectorAll("tr");
    if (rows.length === 0) {
      console.error("[aw-table]: <tbody> element must contains one row almost");
      return false;
    }

    rows.forEach((row) => {
      this.body.rows.push({
        element: row,
        cells: row.querySelectorAll("td"),
      });

      let i = this.body.rows.length - 1;
      if (this.body.rows[i].cells.length === 0) {
        console.error(
          "[aw-table]: <tbody><tr> element must contains one cell almost"
        );
        return false;
      }
    });

    return true;
  }

  /**
   * @method	parseFooter
   *
   * Pasa el pié a las propiedades de la clase
   *
   * @returns {boolean}
   */
  parseFooter() {
    this.footer.element = this.table.querySelector("tfoot");
    this.footer.cells = [];

    if (!this.footer.element) {
      return true;
    }

    this.footer.cells = this.head.element.querySelectorAll("td");

    if (this.footer.cells.length === 0) {
      console.error(
        "[aw-table]: <tfoot> element must contains one cell almost"
      );
      return false;
    }

    return true;
  }

  /**
   * @method	parseHead
   *
   * Pasa la cabecera a las propiedades de la clase
   *
   * @returns {boolean}
   */
  parseHead() {
    this.head.element = this.table.querySelector("thead");
    this.head.cells = [];

    if (!this.head.element) {
      return true;
    }

    this.head.cells = this.head.element.querySelectorAll("th");

    if (this.head.cells.length === 0) {
      this.head.cells = this.head.element.querySelectorAll("td");
    }

    if (this.head.cells.length === 0) {
      console.error(
        "[aw-table]: <thead> element must contains one cell almost"
      );
      return false;
    }

    return true;
  }

  /**
   * @method	putChildren
   *
   * Coloca la tabla ajustada dentro del componente para mostrarla
   */
  putChildren() {
    this.$.container.appendChild(this.table);
  }

  /**
   * @method	setSortable
   *
   * Pone los iconos de ordenación
   */
  putSortableIcons() {
    this.head.cells.forEach((cell, c) => {
      if (cell.hasAttribute("sortable")) {
        let icon = document.createElement("IRON-ICON");
        icon.classList.add("aw-sort-icon");

        cell.setAttribute("c", c);

        if (!cell.hasAttribute("dir")) {
          cell.setAttribute("dir", "asc");
        }

        if (cell.getAttribute("dir") === "asc") {
          icon.setAttribute("icon", "arrow-downward");
        } else {
          icon.setAttribute("icon", "arrow-upward");
        }
        cell.appendChild(icon);
      }
    });
  }

  /**
   * @method	putTableAttributes
   *
   * Pone los atributos a la tabla
   */
  putTableAttributes() {
    this["mark-row"] && this.table.setAttribute("mark-row", "");
    this["mark-column"] && this.table.setAttribute("mark-column", "");
    this["row-effect"] && this.table.setAttribute("row-effect", "");
    this["sticky"] && this.table.setAttribute("sticky", "");
  }

  /**
   * @method setListeners
   *
   * Pone a la escucha los elementos del componente
   */
  setListeners() {
    this.head.cells.forEach((cell, c) => {
      if (cell.hasAttribute("sortable")) {
        cell.addEventListener("click", this.function.sortable);
      }
    });
  }

  /**
   * @method	sortAction
   *
   * @param {HTMLElement} cell
   */
  sortClick(cell) {
    this.head.cells.forEach((ce) => {
      if (ce.hasAttribute("sortable") && ce !== cell) {
        ce.setAttribute("dir", "asc");
        ce.querySelector(".aw-sort-icon").setAttribute(
          "icon",
          "arrow-downward"
        );
      }
    });

    let column = parseInt(cell.getAttribute("c"));
    let dir = cell.getAttribute("dir");

    if (dir === "asc") {
      cell.setAttribute("dir", "desc");
      cell.querySelector(".aw-sort-icon").setAttribute("icon", "arrow-upward");
    } else {
      cell.setAttribute("dir", "asc");
      cell
        .querySelector(".aw-sort-icon")
        .setAttribute("icon", "arrow-downward");
    }

    this.sort(column, dir);
  }

  /**
   * @method	sort
   *
   * Ordena la tabla
   *
   * @param {number} c Número de columna a ordenar
   * @param {"asc"|"desc"} dir Dirección de ordenación
   */
  sort(c, dir = "asc") {
    let rows,
      switching,
      i,
      x,
      xChild,
      y,
      yChild,
      shouldSwitch,
      switchcount = 0;
    switching = true;

    while (switching) {
      // Ponemos el switching en false
      switching = false;

      // Recorremos todas las filas
      rows = this.body.element.querySelectorAll("tr");
      let i = 0;
      for (i = 0; i < rows.length - 1; i++) {
        // Comience diciendo que no debería haber cambios:
        shouldSwitch = false;

        // Obtenga los dos elementos que desea comparar, uno de la fila actual y uno de la siguiente:
        x = rows[i].getElementsByTagName("TD")[c];
        y = rows[i + 1].getElementsByTagName("TD")[c];

        // Obtenemos el primer texto que encontremos
        xChild = x.firstChild;
        while (xChild.firstChild && xChild.firstChild.nodeName !== "#text") {
          xChild = xChild.firstChild;
        }

        // Obtenemos el primer texto que encontremos
        yChild = y.firstChild;
        while (yChild.firstChild && yChild.firstChild.nodeName !== "#text") {
          yChild = yChild.firstChild;
        }

        // Compruebe si las dos filas deben cambiar de lugar, basado en la dirección, asc o desc
        if (dir == "asc") {
          if (xChild.innerHTML.toLowerCase() > yChild.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (xChild.innerHTML.toLowerCase() < yChild.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }

      if (shouldSwitch) {
        // Si se ha marcado un cambio, hágalo y marque que se ha realizado un cambio:
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Cada vez que se realiza un cambio, aumente este recuento en 1:
        switchcount++;
      }
    }
  }

  /**
   * @method	sortOnLoad
   *
   * Ordena la tabla al ser cargada
   */
  sortOnLoad() {
    if (this.sortbycolumn !== null) {
      if (typeof this.sortbycolumn !== "number") {
        console.error("[aw-table]: 'sortbycolumn' property must be a integer");
        return;
      }

      this.sort(this.sortbycolumn, this.sortdir);
    }
  }

  /**
   * @method	unsetListeners
   *
   * Deja de escuchar los eventos del componente
   */
  unsetListeners() {
    this.head.cells.forEach((cell, c) => {
      if (cell.hasAttribute("sortable")) {
        cell.removeEventListener("click", this.function.sortable);
      }
    });
  }
}

window.customElements.define("aw-table", AwTable);
